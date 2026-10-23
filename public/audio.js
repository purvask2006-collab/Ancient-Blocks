// Sacred Patterns - Centralized Web Audio Engine
// Features: Ambient music generation per world, sound effect channels, volume controls & clean lifecycle

class SacredAudioManager {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.musicVolume = 0.5;
    this.sfxVolume = 0.8;

    this.musicGain = null;
    this.sfxGain = null;
    this.masterGain = null;

    this.activeWorldMusic = null;
    this.ambientNodes = [];
    this.ambientInterval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.setValueAtTime(this.musicVolume, this.ctx.currentTime);
        this.musicGain.connect(this.masterGain);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
        this.sfxGain.connect(this.masterGain);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : 1, this.ctx.currentTime, 0.05);
    }
    return this.isMuted;
  }

  toggleMute() {
    return this.setMuted(!this.isMuted);
  }

  setMusicVolume(vol) {
    this.musicVolume = Math.max(0, Math.min(1, vol));
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setTargetAtTime(this.musicVolume, this.ctx.currentTime, 0.05);
    }
  }

  setSfxVolume(vol) {
    this.sfxVolume = Math.max(0, Math.min(1, vol));
    if (this.sfxGain && this.ctx) {
      this.sfxGain.gain.setTargetAtTime(this.sfxVolume, this.ctx.currentTime, 0.05);
    }
  }

  // --------------------------------------------------------------------------
  // AMBIENT MUSIC ENGINE (Per-world procedural synthesis)
  // --------------------------------------------------------------------------
  startWorldMusic(worldId) {
    this.init();
    if (!this.ctx) return;
    if (this.activeWorldMusic === worldId) return;

    this.stopWorldMusic();
    this.activeWorldMusic = worldId;

    if (worldId === 'india') {
      this.playIndiaAmbience();
    } else if (worldId === 'japan') {
      this.playJapanAmbience();
    } else if (worldId === 'egypt') {
      this.playEgyptAmbience();
    }
  }

  stopWorldMusic() {
    clearInterval(this.ambientInterval);
    this.ambientInterval = null;

    if (this.ambientNodes.length > 0 && this.ctx) {
      const now = this.ctx.currentTime;
      this.ambientNodes.forEach(item => {
        try {
          if (item.gainNode) {
            item.gainNode.gain.setTargetAtTime(0, now, 0.2);
          }
          if (item.osc) {
            item.osc.stop(now + 0.3);
          }
        } catch (e) {}
      });
    }
    this.ambientNodes = [];
    this.activeWorldMusic = null;
  }

  // India: Meditative Tanpura drone & periodic bansuri flute tones
  playIndiaAmbience() {
    if (!this.ctx || !this.musicGain) return;
    const now = this.ctx.currentTime;

    // Drones (D3 146.8 Hz & A3 220 Hz)
    [146.83, 220.0].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.045, now + 1.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.musicGain);

      osc.start(now);
      this.ambientNodes.push({ osc, gainNode: gain });
    });

    // Periodic gentle bansuri notes
    const bansuriNotes = [293.66, 369.99, 440.0, 554.37, 587.33]; // D raga
    const triggerBansuri = () => {
      if (this.activeWorldMusic !== 'india' || !this.ctx) return;
      const t = this.ctx.currentTime;
      const note = bansuriNotes[Math.floor(Math.random() * bansuriNotes.length)];
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, t);
      osc.frequency.linearRampToValueAtTime(note + 2, t + 2.5);

      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.04, t + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 3.2);

      osc.connect(gain);
      gain.connect(this.musicGain);

      osc.start(t);
      osc.stop(t + 3.3);
    };

    this.ambientInterval = setInterval(triggerBansuri, 6000);
    setTimeout(triggerBansuri, 1200);
  }

  // Japan: Shakuhachi flute breath tones & sparse koto notes
  playJapanAmbience() {
    if (!this.ctx || !this.musicGain) return;
    const now = this.ctx.currentTime;

    // Soft warm wind drone
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(260, now);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(130.81, now); // C3
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.035, now + 1.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);

    osc.start(now);
    this.ambientNodes.push({ osc, gainNode: gain });

    // Shakuhachi pentatonic phrase (Insen scale: D, Eb, G, A, C)
    const insenNotes = [293.66, 311.13, 392.00, 440.00, 523.25];
    const triggerShakuhachi = () => {
      if (this.activeWorldMusic !== 'japan' || !this.ctx) return;
      const t = this.ctx.currentTime;
      const note = insenNotes[Math.floor(Math.random() * insenNotes.length)];

      const flute = this.ctx.createOscillator();
      const fGain = this.ctx.createGain();
      flute.type = 'sine';
      flute.frequency.setValueAtTime(note, t);
      // Gentle pitch bend characteristic of shakuhachi meri-kari
      flute.frequency.exponentialRampToValueAtTime(note * 0.98, t + 0.5);
      flute.frequency.linearRampToValueAtTime(note, t + 2.0);

      fGain.gain.setValueAtTime(0, t);
      fGain.gain.linearRampToValueAtTime(0.045, t + 0.6);
      fGain.gain.exponentialRampToValueAtTime(0.001, t + 3.5);

      flute.connect(fGain);
      fGain.connect(this.musicGain);

      flute.start(t);
      flute.stop(t + 3.6);
    };

    this.ambientInterval = setInterval(triggerShakuhachi, 6500);
    setTimeout(triggerShakuhachi, 1000);
  }

  // Egypt: Temple resonant sanctuary drone & phrygian harp motifs
  playEgyptAmbience() {
    if (!this.ctx || !this.musicGain) return;
    const now = this.ctx.currentTime;

    // Low temple resonance
    [110.0, 164.81].forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, now);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 1.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.musicGain);

      osc.start(now);
      this.ambientNodes.push({ osc, gainNode: gain });
    });

    // Ceremonial harp / sistrum notes
    const egyptianNotes = [220.0, 233.08, 277.18, 293.66, 329.63, 349.23];
    const triggerHarp = () => {
      if (this.activeWorldMusic !== 'egypt' || !this.ctx) return;
      const t = this.ctx.currentTime;
      const note = egyptianNotes[Math.floor(Math.random() * egyptianNotes.length)];

      const harp = this.ctx.createOscillator();
      const hGain = this.ctx.createGain();
      harp.type = 'triangle';
      harp.frequency.setValueAtTime(note, t);

      hGain.gain.setValueAtTime(0.05, t);
      hGain.gain.exponentialRampToValueAtTime(0.001, t + 2.2);

      harp.connect(hGain);
      hGain.connect(this.musicGain);

      harp.start(t);
      harp.stop(t + 2.3);
    };

    this.ambientInterval = setInterval(triggerHarp, 5500);
    setTimeout(triggerHarp, 1200);
  }

  // --------------------------------------------------------------------------
  // SOUND EFFECTS CHANNELS
  // --------------------------------------------------------------------------
  playMoveSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.sfxGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(380, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(240, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playSandRakeSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.sfxGain) return;

    // Granular soft sand sweep
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.Q.setValueAtTime(3, this.ctx.currentTime);

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  playPushSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.sfxGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.16);

    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.16);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.16);
  }

  playTempleBell() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.sfxGain) return;

    const freqs = [280, 560, 840, 1120];
    const gains = [0.35, 0.18, 0.10, 0.05];
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const decay = 2.8 - idx * 0.4;
      gain.gain.setValueAtTime(gains[idx], this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + decay);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start();
      osc.stop(this.ctx.currentTime + decay);
    });
  }

  playStoneMechanismSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.sfxGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(90, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(140, this.ctx.currentTime + 0.4);

    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.5);
  }

  playEgyptianChime() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.sfxGain) return;

    const freqs = [587.33, 880, 1174.66];
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0.22, this.ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 1.4);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + idx * 0.08 + 1.4);
    });
  }

  playCrackSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.sfxGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(130, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(40, this.ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  playWinSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx || !this.sfxGain) return;

    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;

      const startTime = this.ctx.currentTime + idx * 0.12;
      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.45);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(startTime);
      osc.stop(startTime + 0.45);
    });
  }
}

window.sacredAudio = new SacredAudioManager();
