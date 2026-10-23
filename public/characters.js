// Sacred Patterns - Character Design Bible & SVG Character Artwork
// 6 Playable / Guiding Humanoid Companions:
// - India: Amara (Sacred Altar Keeper) & Vikram (Stepwell Architect)
// - Japan: Yuki (Shrine Oracle) & Kenji (Tatami Master)
// - Egypt: Kiya (Horizon Watcher) & Ahmose (Lotus Keeper)

window.SACRED_CHARACTERS = {
  amara: {
    id: 'amara',
    name: 'Amara',
    role: 'Sacred Altar Keeper',
    country: 'India',
    levelId: 2,
    palette: { primary: '#d97706', secondary: '#1e1b4b', gold: '#f59e0b', skin: '#b47b4d' },
    tagline: 'Flowing ochre & indigo robes, brass armlets, and sacred measuring cord.',
    lore: 'Patient, thoughtful, and deeply attentive to ancient geometric patterns and sacred seals.',
    dialogue: {
      intro: "Every symbol has its place. Let us discover what these three were meant to reveal.",
      hint: "The inscription is a pattern. Look carefully at the position of each symbol.",
      invalid: "The sequence remains quiet. Compare the door clues again before setting the seals.",
      progress: "The sacred geometry of the chamber aligns. We are nearing the truth.",
      success: "The sequence is restored. Even the smallest mark has meaning.",
      treasure: "Look at the sacred craftsmanship of this talisman! Four millennia untouched."
    }
  },
  vikram: {
    id: 'vikram',
    name: 'Vikram',
    role: 'Stepwell Architect',
    country: 'India',
    levelId: 2,
    palette: { primary: '#c2410c', secondary: '#fef3c7', gold: '#10b981', skin: '#a36d40' },
    tagline: 'Cream kurta, terracotta dhoti, folding measuring rule, and emerald-pinned turban.',
    lore: 'Practical, energetic, hands-on master of stepwell masonry and stone mechanisms.',
    dialogue: {
      intro: "Three slots, three seals. There has to be a logical arrangement.",
      hint: "Start with what the inscription fixes in place. Then work outward.",
      invalid: "Not quite aligned yet. The middle position is fixed by clue three.",
      progress: "The weight distribution is shifting—our calculations are holding!",
      success: "Perfect alignment! Now that is a mechanism worth studying.",
      treasure: "Magnificent engineering! The hidden counterweight compartment released perfectly."
    }
  },
  yuki: {
    id: 'yuki',
    name: 'Yuki',
    role: 'Shrine Oracle',
    country: 'Japan',
    levelId: 1,
    palette: { primary: '#dc2626', secondary: '#ffffff', gold: '#e11d48', skin: '#fde8d0' },
    tagline: 'White haori, red hakama, ritual gohei wand, and silver temple bell.',
    lore: 'Gentle, spiritual, and perceptive Heian oracle who perceives balance in all continuous lines.',
    dialogue: {
      intro: "Let every line flow without breaking. The garden will reveal its balance.",
      hint: "Rake from corner to corner. The unraked sand calls for an unbroken path.",
      invalid: "The line has lost its flow. Let us find another path.",
      progress: "The garden begins to breathe. Half of the sacred sand is now harmonized.",
      success: "The garden is at peace. Nothing more needs to be added.",
      treasure: "Listen to the bell resonate across Kyoto. Meditative perfection achieved."
    }
  },
  kenji: {
    id: 'kenji',
    name: 'Kenji',
    role: 'Tatami Master',
    country: 'Japan',
    levelId: 1,
    palette: { primary: '#1e3a8a', secondary: '#93c5fd', gold: '#78350f', skin: '#ebd0b5' },
    tagline: 'Deep blue hakama, pale indigo haori, cloth palm wraps, and wooden shaku ruler.',
    lore: 'Reserved, disciplined craftsman who approaches the zen trail with methodical precision.',
    dialogue: {
      intro: "One continuous line. Each turn must be deliberate.",
      hint: "Check the open neighbors before committing to the next square.",
      invalid: "The stone is immovable; look for open raking space.",
      progress: "Sixteen stones and sand tiles surveyed. The route holds steady.",
      success: "Every cell aligned. A clean path, with nothing wasted.",
      treasure: "Exact harmony of space and boundary. The master would be pleased."
    }
  },
  kiya: {
    id: 'kiya',
    name: 'Kiya',
    role: 'Horizon Watcher',
    country: 'Egypt',
    levelId: 3,
    palette: { primary: '#1d4ed8', secondary: '#fbbf24', gold: '#f59e0b', skin: '#ab7045' },
    tagline: 'Fitted lapis lazuli gown, broad jeweled collar, gold-beaded net cap, and kohl-lined eyes.',
    lore: 'Sharp-witted, ambitious New Kingdom temple astronomer who calculates celestial conduits.',
    dialogue: {
      intro: "Four pairs, one wall. Every connection must fall exactly where it belongs.",
      hint: "Do not follow the nearest symbol blindly. Consider the paths that remain open.",
      invalid: "That route conflicts with another. Reconsider the alignment.",
      progress: "Two sacred conduits established. The remaining channels must not cross.",
      success: "Excellent. The pattern is whole, and every line has its place.",
      treasure: "The sunlight channels down the sanctuary axis! True astronomical alignment."
    }
  },
  ahmose: {
    id: 'ahmose',
    name: 'Ahmose',
    role: 'Lotus Keeper',
    country: 'Egypt',
    levelId: 3,
    palette: { primary: '#059669', secondary: '#f8fafc', gold: '#d97706', skin: '#995e34' },
    tagline: 'Sun-tanned build, white linen shendyt kilt, green lotus sash, and golden ankh pendant.',
    lore: 'Warm, nurturing steward from the Nile Delta who celebrates the return of sacred harmony.',
    dialogue: {
      intro: "Every symbol belongs somewhere. Let us help them find one another.",
      hint: "Look at the empty spaces. A path needs room to reach its destination.",
      invalid: "The conduits cannot cross; give each path room to breathe.",
      progress: "Halfway there! The temple stones are beginning to hum with life.",
      success: "Look at the wall now. Everything is connected again.",
      treasure: "Life, health, and strength! The temple of the Nile is restored."
    }
  }
};

// Rich SVG Character Renderer (Supporting both high-detail portrait cards and full-body stage avatars)
window.getCompanionSVG = function(charId, pose = 'portrait') {
  const isPortrait = (pose === 'portrait');

  // =========================================================================
  // 1. AMARA - Sacred Altar Keeper (Ancient India / Mohenjo-daro)
  // =========================================================================
  if (charId === 'amara') {
    if (isPortrait) {
      return `
        <svg class="companion-svg companion-portrait" viewBox="0 0 160 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="amara-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.95"/>
              <stop offset="65%" stop-color="#fde68a" stop-opacity="0.75"/>
              <stop offset="100%" stop-color="#d97706" stop-opacity="0.35"/>
            </radialGradient>
            <linearGradient id="amara-silk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b"/>
              <stop offset="45%" stop-color="#d97706"/>
              <stop offset="100%" stop-color="#9a3412"/>
            </linearGradient>
            <linearGradient id="amara-choli" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#312e81"/>
              <stop offset="100%" stop-color="#1e1b4b"/>
            </linearGradient>
            <linearGradient id="amara-gold-trim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>

          <!-- Decorative Cultural Backdrop Circle -->
          <circle cx="80" cy="80" r="72" fill="url(#amara-halo)" stroke="#d97706" stroke-width="2"/>
          <circle cx="80" cy="80" r="66" fill="none" stroke="#b45309" stroke-width="1" stroke-dasharray="3 3"/>
          <!-- Terracotta Mandala rays -->
          <g opacity="0.25" stroke="#b45309" stroke-width="1.5">
            <line x1="80" y1="10" x2="80" y2="150"/>
            <line x1="10" y1="80" x2="150" y2="80"/>
            <line x1="30" y1="30" x2="130" y2="130"/>
            <line x1="130" y1="30" x2="30" y2="130"/>
          </g>

          <!-- Hair Bun (Behind) with Golden Filigree Pin -->
          <ellipse cx="80" cy="40" rx="22" ry="19" fill="#18181b"/>
          <circle cx="80" cy="36" r="6" fill="url(#amara-gold-trim)"/>
          <circle cx="80" cy="36" r="2.5" fill="#b91c1c"/>

          <!-- Shoulders & Indigo Choli Blouse -->
          <path d="M 32,156 Q 44,118 70,114 L 90,114 Q 116,118 128,156 Z" fill="url(#amara-choli)"/>
          <!-- Gold Embroidered Neckline -->
          <path d="M 62,114 Q 80,126 98,114" stroke="url(#amara-gold-trim)" stroke-width="3" fill="none"/>

          <!-- Saffron Ochre Draped Silk Dupatta / Saree -->
          <path d="M 34,156 Q 44,120 62,114 Q 78,138 98,156 Z" fill="url(#amara-silk)"/>
          <path d="M 98,118 Q 118,126 128,156 L 110,156 Q 102,132 94,120 Z" fill="url(#amara-silk)"/>
          <!-- Gold Zari Border on Pallu -->
          <path d="M 40,156 Q 52,126 64,115" stroke="url(#amara-gold-trim)" stroke-width="2" fill="none"/>
          <path d="M 62,118 Q 80,140 98,156" stroke="url(#amara-gold-trim)" stroke-width="2.5" fill="none"/>

          <!-- Graceful Neck -->
          <rect x="73" y="90" width="14" height="26" rx="2" fill="#b47b4d"/>
          <!-- Gold Choker Necklace -->
          <path d="M 71,104 Q 80,110 89,104" stroke="url(#amara-gold-trim)" stroke-width="3.5" fill="none"/>
          <circle cx="80" cy="108" r="3" fill="#b91c1c"/>

          <!-- Elegant Head & Face -->
          <ellipse cx="80" cy="72" rx="19" ry="24" fill="#b47b4d"/>
          <!-- Soft Cheek Shading -->
          <ellipse cx="69" cy="76" rx="5" ry="3.5" fill="#a16238" opacity="0.3"/>
          <ellipse cx="91" cy="76" rx="5" ry="3.5" fill="#a16238" opacity="0.3"/>

          <!-- Front Raven Hair Styling -->
          <path d="M 61,64 C 64,48 76,46 80,56 C 84,46 96,48 99,64 C 95,54 85,50 80,52 C 75,50 65,54 61,64 Z" fill="#18181b"/>
          <path d="M 61,64 Q 58,80 62,94 Q 65,80 66,66 Z" fill="#18181b"/>
          <path d="M 99,64 Q 102,80 98,94 Q 95,80 94,66 Z" fill="#18181b"/>

          <!-- Maang Tikka (Forehead Jewel) -->
          <line x1="80" y1="48" x2="80" y2="58" stroke="url(#amara-gold-trim)" stroke-width="1.5"/>
          <circle cx="80" cy="60" r="2.5" fill="url(#amara-gold-trim)"/>

          <!-- Sacred Vermilion Bindi -->
          <circle cx="80" cy="67" r="2" fill="#dc2626"/>

          <!-- Delicate Almond Eyes & Brows -->
          <path d="M 67,65 Q 73,63 77,66" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path d="M 83,66 Q 87,63 93,65" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <ellipse cx="72" cy="71" rx="2.8" ry="2" fill="#18181b"/>
          <ellipse cx="88" cy="71" rx="2.8" ry="2" fill="#18181b"/>
          <circle cx="73" cy="70" r="0.8" fill="#ffffff"/>
          <circle cx="89" cy="70" r="0.8" fill="#ffffff"/>

          <!-- Nose & Gentle Lips -->
          <path d="M 80,71 L 79,79 L 82,80" stroke="#8d562f" stroke-width="1.3" fill="none"/>
          <path d="M 75,85 Q 80,88 85,85" stroke="#991b1b" stroke-width="2" fill="none" stroke-linecap="round"/>

          <!-- Gold Jhumka Earrings -->
          <circle cx="60" cy="80" r="2" fill="url(#amara-gold-trim)"/>
          <path d="M 57,84 Q 60,82 63,84 L 62,88 L 58,88 Z" fill="url(#amara-gold-trim)"/>
          <circle cx="100" cy="80" r="2" fill="url(#amara-gold-trim)"/>
          <path d="M 97,84 Q 100,82 103,84 L 102,88 L 98,88 Z" fill="url(#amara-gold-trim)"/>

          <!-- Foreground: Sacred Offering Bowl with Lotus Bud -->
          <g transform="translate(62, 132)">
            <ellipse cx="18" cy="14" rx="20" ry="7" fill="#ca8a04" stroke="#78350f" stroke-width="1.2"/>
            <path d="M 0,14 Q 18,28 36,14 Z" fill="#b45309"/>
            <circle cx="18" cy="11" r="5" fill="#f43f5e"/>
            <circle cx="14" cy="12" r="3" fill="#fbcfe8"/>
            <circle cx="22" cy="12" r="3" fill="#fbcfe8"/>
          </g>
        </svg>
      `;
    }
  }

  // =========================================================================
  // 2. VIKRAM - Stepwell Architect (Ancient India / Stepwell Secrets)
  // =========================================================================
  if (charId === 'vikram') {
    if (isPortrait) {
      return `
        <svg class="companion-svg companion-portrait" viewBox="0 0 160 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="vikram-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffedd5" stop-opacity="0.95"/>
              <stop offset="65%" stop-color="#fed7aa" stop-opacity="0.75"/>
              <stop offset="100%" stop-color="#ea580c" stop-opacity="0.35"/>
            </radialGradient>
            <linearGradient id="vikram-turban-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fbbf24"/>
              <stop offset="40%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#c2410c"/>
            </linearGradient>
            <linearGradient id="vikram-kurta" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="70%" stop-color="#fef3c7"/>
              <stop offset="100%" stop-color="#fde68a"/>
            </linearGradient>
          </defs>

          <!-- Architectural Stepped Terrace Halo -->
          <circle cx="80" cy="80" r="72" fill="url(#vikram-halo)" stroke="#c2410c" stroke-width="2"/>
          <circle cx="80" cy="80" r="66" fill="none" stroke="#b45309" stroke-width="1" stroke-dasharray="4 2"/>
          <!-- Stepwell geometric steps behind head -->
          <g opacity="0.25" stroke="#9a3412" stroke-width="1.8" fill="none">
            <path d="M 25,60 L 40,60 L 40,75 L 55,75 L 55,90"/>
            <path d="M 135,60 L 120,60 L 120,75 L 105,75 L 105,90"/>
            <path d="M 30,120 L 50,120 L 50,135 L 70,135"/>
            <path d="M 130,120 L 110,120 L 110,135 L 90,135"/>
          </g>

          <!-- Shoulders & Cream Kurta -->
          <path d="M 26,156 Q 42,120 70,116 L 90,116 Q 118,120 134,156 Z" fill="url(#vikram-kurta)" stroke="#d97706" stroke-width="1"/>
          <!-- Kurta Placket & Terracotta Piping -->
          <path d="M 80,116 L 80,156" stroke="#c2410c" stroke-width="2.5"/>
          <circle cx="80" cy="128" r="2" fill="#78350f"/>
          <circle cx="80" cy="140" r="2" fill="#78350f"/>
          <circle cx="80" cy="152" r="2" fill="#78350f"/>

          <!-- Leather Tool Harness Strap with Brass Buckles -->
          <path d="M 40,156 L 76,116 L 86,118 L 52,156 Z" fill="#78350f"/>
          <rect x="58" y="132" width="10" height="7" rx="1.5" fill="#f59e0b" stroke="#78350f"/>

          <!-- Strong Neck -->
          <rect x="71" y="88" width="18" height="30" rx="3" fill="#a36d40"/>

          <!-- Confident Handsome Face -->
          <ellipse cx="80" cy="74" rx="19" ry="23" fill="#a36d40"/>
          <!-- Strong Jaw -->
          <path d="M 64,74 Q 68,96 80,98 Q 92,96 96,74 Z" fill="#a36d40"/>

          <!-- Saffron-Gold Master Architect Turban -->
          <!-- Base Wraps -->
          <path d="M 54,60 C 50,42 62,26 80,26 C 98,26 110,42 106,60 C 98,52 90,52 80,54 C 70,52 62,52 54,60 Z" fill="url(#vikram-turban-gold)"/>
          <path d="M 50,54 Q 72,40 108,46 Q 112,58 104,64 Q 76,52 52,60 Z" fill="#ea580c"/>
          <path d="M 54,46 Q 80,32 106,38 Q 104,48 80,44 Q 56,48 54,46 Z" fill="#f59e0b"/>
          <!-- Crown Swirl of Turban -->
          <ellipse cx="80" cy="28" rx="14" ry="9" fill="#c2410c"/>
          <!-- Glowing Emerald Brooch Pin with Golden Sunburst -->
          <circle cx="80" cy="38" r="7" fill="#f59e0b"/>
          <circle cx="80" cy="38" r="4.5" fill="#10b981"/>
          <circle cx="80" cy="38" r="2" fill="#a7f3d0"/>

          <!-- Ears -->
          <ellipse cx="61" cy="74" rx="3.5" ry="6" fill="#a36d40"/>
          <ellipse cx="99" cy="74" rx="3.5" ry="6" fill="#a36d40"/>

          <!-- Eyes & Confident Brow -->
          <path d="M 66,66 Q 72,64 78,67" stroke="#1c1917" stroke-width="2.4" fill="none" stroke-linecap="round"/>
          <path d="M 82,67 Q 88,64 94,66" stroke="#1c1917" stroke-width="2.4" fill="none" stroke-linecap="round"/>
          <ellipse cx="72" cy="72" rx="3" ry="2.2" fill="#1c1917"/>
          <ellipse cx="88" cy="72" rx="3" ry="2.2" fill="#1c1917"/>
          <circle cx="73.5" cy="71" r="0.8" fill="#ffffff"/>
          <circle cx="89.5" cy="71" r="0.8" fill="#ffffff"/>

          <!-- Nose & Confident Smile & Trim Mustache -->
          <path d="M 80,70 L 78,81 L 83,82" stroke="#78350f" stroke-width="1.8" fill="none"/>
          <path d="M 72,85 Q 80,84 88,85 Q 84,88 80,88 Q 76,88 72,85 Z" fill="#1c1917"/>
          <path d="M 75,91 Q 80,94 85,91" stroke="#451a03" stroke-width="1.8" fill="none" stroke-linecap="round"/>

          <!-- Foreground: Brass & Teak Folding Ruler -->
          <g transform="translate(100, 118)">
            <path d="M 0,30 L 26,0 L 32,5 L 6,35 Z" fill="#ca8a04" stroke="#78350f" stroke-width="1"/>
            <!-- Tick Marks -->
            <line x1="6" y1="22" x2="10" y2="26" stroke="#451a03" stroke-width="1"/>
            <line x1="12" y1="16" x2="16" y2="20" stroke="#451a03" stroke-width="1"/>
            <line x1="18" y1="10" x2="22" y2="14" stroke="#451a03" stroke-width="1"/>
            <!-- Brass Joint Rivet -->
            <circle cx="26" cy="6" r="2.5" fill="#fef08a" stroke="#78350f"/>
          </g>
        </svg>
      `;
    }
  }

  // =========================================================================
  // 3. YUKI - Shrine Oracle (Ancient Japan / Kyoto Zen Trail)
  // =========================================================================
  if (charId === 'yuki') {
    if (isPortrait) {
      return `
        <svg class="companion-svg companion-portrait" viewBox="0 0 160 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="yuki-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fff1f2" stop-opacity="0.95"/>
              <stop offset="65%" stop-color="#fce7f3" stop-opacity="0.75"/>
              <stop offset="100%" stop-color="#f43f5e" stop-opacity="0.3"/>
            </radialGradient>
            <linearGradient id="yuki-vermilion" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ef4444"/>
              <stop offset="60%" stop-color="#dc2626"/>
              <stop offset="100%" stop-color="#991b1b"/>
            </linearGradient>
            <linearGradient id="yuki-bell-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="60%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#b45309"/>
            </linearGradient>
          </defs>

          <!-- Sakura & Torii Halo Backdrop -->
          <circle cx="80" cy="80" r="72" fill="url(#yuki-halo)" stroke="#e11d48" stroke-width="2"/>
          <circle cx="80" cy="80" r="66" fill="none" stroke="#fda4af" stroke-width="1" stroke-dasharray="3 3"/>
          <!-- Faint Torii Gate Silhouette -->
          <g opacity="0.22" stroke="#dc2626" stroke-width="2.5" fill="none">
            <path d="M 40,32 Q 80,28 120,32"/>
            <path d="M 44,40 L 116,40"/>
            <line x1="56" y1="32" x2="56" y2="90"/>
            <line x1="104" y1="32" x2="104" y2="90"/>
          </g>

          <!-- Drifting Sakura Petals in Background -->
          <path d="M 30,50 Q 36,44 42,50 Q 36,56 30,50 Z" fill="#f472b6" opacity="0.7" transform="rotate(15 36 50)"/>
          <path d="M 124,42 Q 130,36 136,42 Q 130,48 124,42 Z" fill="#f472b6" opacity="0.7" transform="rotate(-20 130 42)"/>
          <path d="M 28,110 Q 34,104 40,110 Q 34,116 28,110 Z" fill="#fbcfe8" opacity="0.8"/>
          <path d="M 128,118 Q 134,112 140,118 Q 134,124 128,118 Z" fill="#fbcfe8" opacity="0.8"/>

          <!-- Long Trailing Black Silk Hair (Behind) -->
          <path d="M 52,60 C 44,90 42,125 46,156 L 114,156 C 118,125 116,90 108,60 Z" fill="#18181b"/>
          <!-- Red Hair-Tie Ribbon -->
          <rect x="76" y="104" width="8" height="6" rx="1.5" fill="#dc2626"/>

          <!-- Pristine White Shrine Maiden Kimono (Haori) -->
          <path d="M 28,156 Q 44,120 70,115 L 90,115 Q 116,120 132,156 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.2"/>
          <!-- Vermilion Hakama Inner Collar & Accents -->
          <path d="M 64,115 L 80,138 L 96,115" stroke="url(#yuki-vermilion)" stroke-width="4.5" fill="none"/>
          <path d="M 68,115 L 80,134 L 92,115" stroke="#ffffff" stroke-width="2" fill="none"/>

          <!-- Slender Neck -->
          <rect x="73" y="90" width="14" height="26" rx="2" fill="#fde8d0"/>

          <!-- Gentle Beautiful Oval Face -->
          <ellipse cx="80" cy="73" rx="18" ry="23" fill="#fde8d0"/>
          <!-- Soft Peach Cheek Blush -->
          <ellipse cx="68" cy="78" rx="6" ry="3.5" fill="#fb7185" opacity="0.4"/>
          <ellipse cx="92" cy="78" rx="6" ry="3.5" fill="#fb7185" opacity="0.4"/>

          <!-- Elegant Heian Bangs & Sidelocks (Mizura / Hime Cut) -->
          <path d="M 62,64 C 66,48 78,44 80,54 C 82,44 94,48 98,64 C 94,54 86,52 80,53 C 74,52 66,54 62,64 Z" fill="#18181b"/>
          <!-- Long Sidelocks framing cheeks -->
          <path d="M 62,62 Q 58,82 62,106 Q 66,82 66,66 Z" fill="#18181b"/>
          <path d="M 98,62 Q 102,82 98,106 Q 94,82 94,66 Z" fill="#18181b"/>
          <!-- Vermilion Ribbon Ties on Sidelocks -->
          <rect x="58" y="86" width="6" height="3" rx="1" fill="#dc2626"/>
          <rect x="96" y="86" width="6" height="3" rx="1" fill="#dc2626"/>

          <!-- Gentle Almond Eyes & Refined Brows -->
          <path d="M 68,66 Q 73,64 77,66" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path d="M 83,66 Q 87,64 92,66" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <ellipse cx="73" cy="72" rx="2.6" ry="2" fill="#18181b"/>
          <ellipse cx="87" cy="72" rx="2.6" ry="2" fill="#18181b"/>
          <circle cx="74" cy="71" r="0.8" fill="#ffffff"/>
          <circle cx="88" cy="71" r="0.8" fill="#ffffff"/>

          <!-- Petite Nose & Soft Crimson Lips -->
          <path d="M 80,73 L 79,80 L 81,81" stroke="#f43f5e" stroke-width="1.2" fill="none" opacity="0.6"/>
          <path d="M 76,86 Q 80,89 84,86" stroke="#e11d48" stroke-width="2" fill="none" stroke-linecap="round"/>

          <!-- Foreground: Sacred Suzu Bell with Braided Cords -->
          <g transform="translate(102, 110)">
            <!-- Golden Suzu Bell -->
            <circle cx="16" cy="16" r="11" fill="url(#yuki-bell-gold)" stroke="#b45309" stroke-width="1.2"/>
            <line x1="8" y1="18" x2="24" y2="18" stroke="#78350f" stroke-width="1.5"/>
            <circle cx="16" cy="21" r="2" fill="#78350f"/>
            <!-- Sacred 5-color cords trailing -->
            <path d="M 16,27 Q 12,38 10,48" stroke="#dc2626" stroke-width="2" fill="none"/>
            <path d="M 18,27 Q 20,38 24,48" stroke="#f59e0b" stroke-width="1.8" fill="none"/>
            <path d="M 14,27 Q 16,38 18,48" stroke="#ffffff" stroke-width="1.5" fill="none"/>
          </g>

          <!-- Left Foreground: Ritual Paper Gohei Wand Tip -->
          <g transform="translate(24, 102)">
            <line x1="10" y1="46" x2="22" y2="14" stroke="#ca8a04" stroke-width="3" stroke-linecap="round"/>
            <!-- Zigzag Shide Paper -->
            <path d="M 22,14 L 30,20 L 24,26 L 32,32" stroke="#ffffff" stroke-width="4.5" fill="none" stroke-linecap="round"/>
            <path d="M 22,14 L 30,20 L 24,26 L 32,32" stroke="#cbd5e1" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          </g>
        </svg>
      `;
    }
  }

  // =========================================================================
  // 4. KENJI - Tatami Master (Ancient Japan / Shoji Discipline)
  // =========================================================================
  if (charId === 'kenji') {
    if (isPortrait) {
      return `
        <svg class="companion-svg companion-portrait" viewBox="0 0 160 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="kenji-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#eff6ff" stop-opacity="0.95"/>
              <stop offset="65%" stop-color="#dbeafe" stop-opacity="0.75"/>
              <stop offset="100%" stop-color="#1e3a8a" stop-opacity="0.3"/>
            </radialGradient>
            <linearGradient id="kenji-haori" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#93c5fd"/>
              <stop offset="50%" stop-color="#60a5fa"/>
              <stop offset="100%" stop-color="#1e3a8a"/>
            </linearGradient>
            <linearGradient id="kenji-wood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#78350f"/>
            </linearGradient>
          </defs>

          <!-- Bamboo & Shoji Grid Halo Backdrop -->
          <circle cx="80" cy="80" r="72" fill="url(#kenji-halo)" stroke="#1e3a8a" stroke-width="2"/>
          <circle cx="80" cy="80" r="66" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 2"/>
          <!-- Shoji Lattice & Bamboo stalks -->
          <g opacity="0.22" stroke="#1e3a8a" stroke-width="1.8" fill="none">
            <rect x="36" y="32" width="88" height="88"/>
            <line x1="36" y1="62" x2="124" y2="62"/>
            <line x1="36" y1="92" x2="124" y2="92"/>
            <line x1="66" y1="32" x2="66" y2="120"/>
            <line x1="94" y1="32" x2="94" y2="120"/>
          </g>

          <!-- Shoulders & Layered Haori / Kimono -->
          <!-- Deep Blue Outer Haori -->
          <path d="M 24,156 Q 42,118 70,114 L 90,114 Q 118,118 136,156 Z" fill="url(#kenji-haori)" stroke="#172554" stroke-width="1"/>
          <!-- White Kimono Underlayer & Dark Collar -->
          <path d="M 64,114 L 80,140 L 96,114" stroke="#ffffff" stroke-width="5" fill="none"/>
          <path d="M 66,114 L 80,136 L 94,114" stroke="#1e293b" stroke-width="2.5" fill="none"/>

          <!-- Sturdy Neck -->
          <rect x="71" y="88" width="18" height="28" rx="2" fill="#ebd0b5"/>

          <!-- Disciplined Master Craftsman Face -->
          <ellipse cx="80" cy="74" rx="19" ry="23" fill="#ebd0b5"/>
          <!-- Defined Jawline -->
          <path d="M 63,72 Q 67,96 80,98 Q 93,96 97,72 Z" fill="#ebd0b5"/>

          <!-- Dark Hair Tied Back with Clean Hachimaki Headband -->
          <path d="M 60,60 C 56,42 66,28 80,28 C 94,28 104,42 100,60 C 94,50 88,48 80,48 C 72,48 66,50 60,60 Z" fill="#18181b"/>
          <!-- White Cloth Hachimaki Headband -->
          <rect x="58" y="52" width="44" height="7" rx="1.5" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
          <!-- Red Hinomaru Sun Emblem on Headband -->
          <circle cx="80" cy="55.5" r="2.8" fill="#dc2626"/>
          <!-- Tied Knot Tail at Temple -->
          <path d="M 101,54 L 108,50 L 109,56 Z" fill="#ffffff"/>

          <!-- Ears -->
          <ellipse cx="60" cy="75" rx="3.5" ry="6" fill="#ebd0b5"/>
          <ellipse cx="100" cy="75" rx="3.5" ry="6" fill="#ebd0b5"/>

          <!-- Focused, Observant Eyes & Dark Brows -->
          <path d="M 66,66 Q 72,63 77,66" stroke="#18181b" stroke-width="2.4" fill="none" stroke-linecap="round"/>
          <path d="M 83,66 Q 88,63 94,66" stroke="#18181b" stroke-width="2.4" fill="none" stroke-linecap="round"/>
          <ellipse cx="72" cy="71.5" rx="2.8" ry="1.9" fill="#18181b"/>
          <ellipse cx="88" cy="71.5" rx="2.8" ry="1.9" fill="#18181b"/>
          <circle cx="73" cy="71" r="0.7" fill="#ffffff"/>
          <circle cx="89" cy="71" r="0.7" fill="#ffffff"/>

          <!-- Straight Nose & Calm Firm Mouth -->
          <path d="M 80,69 L 78,80 L 82,81" stroke="#854d0e" stroke-width="1.8" fill="none"/>
          <line x1="74" y1="89" x2="86" y2="89" stroke="#451a03" stroke-width="2" stroke-linecap="round"/>

          <!-- Foreground: Polished Wooden Shaku Rule -->
          <g transform="translate(106, 108)">
            <rect x="0" y="0" width="10" height="46" rx="2" fill="url(#kenji-wood)" stroke="#451a03" stroke-width="1" transform="rotate(-18 5 23)"/>
            <line x1="2" y1="12" x2="7" y2="10" stroke="#fef08a" stroke-width="1.2"/>
            <line x1="3" y1="22" x2="8" y2="20" stroke="#fef08a" stroke-width="1.2"/>
            <line x1="4" y1="32" x2="9" y2="30" stroke="#fef08a" stroke-width="1.2"/>
          </g>

          <!-- Left Foreground: Bamboo Rake Handle Tip -->
          <g transform="translate(26, 114)">
            <line x1="12" y1="42" x2="22" y2="8" stroke="#15803d" stroke-width="4.5" stroke-linecap="round"/>
            <line x1="12" y1="42" x2="22" y2="8" stroke="#86efac" stroke-width="1.5" stroke-linecap="round"/>
          </g>
        </svg>
      `;
    }
  }

  // =========================================================================
  // 5. KIYA - Horizon Watcher (Ancient Egypt / Temple Alignments)
  // =========================================================================
  if (charId === 'kiya') {
    if (isPortrait) {
      return `
        <svg class="companion-svg companion-portrait" viewBox="0 0 160 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="kiya-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.95"/>
              <stop offset="65%" stop-color="#fed7aa" stop-opacity="0.75"/>
              <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.35"/>
            </radialGradient>
            <linearGradient id="kiya-lapis" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#2563eb"/>
              <stop offset="50%" stop-color="#1d4ed8"/>
              <stop offset="100%" stop-color="#1e3a8a"/>
            </linearGradient>
            <linearGradient id="kiya-wesekh" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f59e0b"/>
              <stop offset="25%" stop-color="#06b6d4"/>
              <stop offset="50%" stop-color="#dc2626"/>
              <stop offset="75%" stop-color="#10b981"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
            <linearGradient id="kiya-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#fbbf24"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>

          <!-- Golden Solar Disc Halo Backdrop -->
          <circle cx="80" cy="80" r="72" fill="url(#kiya-halo)" stroke="#d97706" stroke-width="2"/>
          <circle cx="80" cy="80" r="66" fill="none" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3 3"/>
          <!-- Winged Sun Disc Silhouette -->
          <g opacity="0.25" stroke="#b45309" stroke-width="1.8" fill="none">
            <circle cx="80" cy="30" r="14" fill="rgba(245, 158, 11, 0.4)"/>
            <path d="M 80,30 Q 50,18 20,32 Q 50,38 80,30 Z" fill="rgba(217, 119, 6, 0.3)"/>
            <path d="M 80,30 Q 110,18 140,32 Q 110,38 80,30 Z" fill="rgba(217, 119, 6, 0.3)"/>
          </g>

          <!-- Royal Lapis Lazuli Linen Gown -->
          <path d="M 30,156 Q 44,120 70,116 L 90,116 Q 116,120 130,156 Z" fill="url(#kiya-lapis)"/>
          <!-- Gold Shoulder Straps -->
          <rect x="48" y="116" width="10" height="40" fill="url(#kiya-gold)"/>
          <rect x="102" y="116" width="10" height="40" fill="url(#kiya-gold)"/>

          <!-- Magnificent Broad Jeweled Wesekh Collar -->
          <!-- Outer Gold Band -->
          <path d="M 44,116 Q 80,146 116,116 Q 112,98 80,100 Q 48,98 44,116 Z" fill="url(#kiya-wesekh)"/>
          <!-- Concentric Jewel Rows -->
          <path d="M 50,115 Q 80,138 110,115" stroke="url(#kiya-gold)" stroke-width="2" fill="none"/>
          <path d="M 54,120 Q 80,143 106,120" stroke="#06b6d4" stroke-width="2" fill="none"/>
          <path d="M 58,125 Q 80,148 102,125" stroke="#dc2626" stroke-width="2" fill="none"/>
          <!-- Drop Beads -->
          <circle cx="68" cy="133" r="2" fill="#06b6d4"/>
          <circle cx="80" cy="136" r="2.5" fill="url(#kiya-gold)"/>
          <circle cx="92" cy="133" r="2" fill="#06b6d4"/>

          <!-- Elegant Egyptian Neck -->
          <rect x="73" y="86" width="14" height="28" rx="2" fill="#ab7045"/>

          <!-- Striking Sculpted Face -->
          <ellipse cx="80" cy="70" rx="18" ry="23" fill="#ab7045"/>
          <!-- Warm Amber Cheek Highlights -->
          <ellipse cx="69" cy="75" rx="5" ry="3.5" fill="#c2410c" opacity="0.25"/>
          <ellipse cx="91" cy="75" rx="5" ry="3.5" fill="#c2410c" opacity="0.25"/>

          <!-- Gold-Beaded Net Cap (Wig Cover) over Sleek Black Hair -->
          <path d="M 58,62 C 54,40 66,24 80,24 C 94,24 106,40 102,62 C 98,48 90,44 80,44 C 70,44 62,48 58,62 Z" fill="#18181b"/>
          <!-- Gold Beaded Mesh Grid -->
          <g stroke="url(#kiya-gold)" stroke-width="1.3" opacity="0.9">
            <line x1="64" y1="36" x2="96" y2="36"/>
            <line x1="60" y1="44" x2="100" y2="44"/>
            <line x1="62" y1="52" x2="98" y2="52"/>
            <line x1="72" y1="28" x2="64" y2="58"/>
            <line x1="80" y1="26" x2="80" y2="60"/>
            <line x1="88" y1="28" x2="96" y2="58"/>
          </g>
          <!-- Golden Uraeus (Royal Cobra) at Brow -->
          <path d="M 80,46 Q 80,38 82,34 Q 84,32 82,30" stroke="url(#kiya-gold)" stroke-width="2.5" fill="none"/>
          <circle cx="82" cy="30" r="2" fill="#dc2626"/>

          <!-- Dramatic Kohl-lined Almond Eyes (Eye of Horus Styling) -->
          <path d="M 64,65 L 77,65 L 75,69 L 66,69 Z" fill="#09090b"/>
          <path d="M 64,65 L 58,67 L 57,69 L 66,69" stroke="#09090b" stroke-width="1.6" fill="none"/><!-- Winged eyeliner tail -->
          <ellipse cx="71" cy="67" rx="2.5" ry="1.8" fill="#ffffff"/>
          <circle cx="71.5" cy="67" r="1.5" fill="#18181b"/>
          <circle cx="72" cy="66.5" r="0.5" fill="#ffffff"/>

          <path d="M 83,65 L 96,65 L 94,69 L 85,69 Z" fill="#09090b"/>
          <path d="M 96,65 L 102,67 L 103,69 L 94,69" stroke="#09090b" stroke-width="1.6" fill="none"/>
          <ellipse cx="89" cy="67" rx="2.5" ry="1.8" fill="#ffffff"/>
          <circle cx="88.5" cy="67" r="1.5" fill="#18181b"/>
          <circle cx="88" cy="66.5" r="0.5" fill="#ffffff"/>

          <!-- Fine Nose & Rich Terracotta Lips -->
          <path d="M 80,67 L 78,77 L 82,78" stroke="#78350f" stroke-width="1.5" fill="none"/>
          <path d="M 75,84 Q 80,87 85,84" stroke="#991b1b" stroke-width="2.2" fill="none" stroke-linecap="round"/>

          <!-- Large Gold Hoops -->
          <circle cx="58" cy="74" r="5" fill="none" stroke="url(#kiya-gold)" stroke-width="2"/>
          <circle cx="102" cy="74" r="5" fill="none" stroke="url(#kiya-gold)" stroke-width="2"/>

          <!-- Foreground: Astronomical Sighting Tablet & Plumb -->
          <g transform="translate(100, 114)">
            <rect x="0" y="0" width="22" height="32" rx="2" fill="#78350f" stroke="#ca8a04" stroke-width="1.5"/>
            <!-- Hieroglyphs on tablet -->
            <line x1="4" y1="8" x2="18" y2="8" stroke="#fef08a" stroke-width="1.2"/>
            <line x1="4" y1="16" x2="18" y2="16" stroke="#fef08a" stroke-width="1.2"/>
            <line x1="4" y1="24" x2="14" y2="24" stroke="#fef08a" stroke-width="1.2"/>
          </g>
        </svg>
      `;
    }
  }

  // =========================================================================
  // 6. AHMOSE - Lotus Keeper (Ancient Egypt / Nile Sanctuary)
  // =========================================================================
  if (charId === 'ahmose') {
    if (isPortrait) {
      return `
        <svg class="companion-svg companion-portrait" viewBox="0 0 160 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ahmose-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ecfdf5" stop-opacity="0.95"/>
              <stop offset="65%" stop-color="#d1fae5" stop-opacity="0.75"/>
              <stop offset="100%" stop-color="#059669" stop-opacity="0.35"/>
            </radialGradient>
            <linearGradient id="ahmose-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fef08a"/>
              <stop offset="50%" stop-color="#f59e0b"/>
              <stop offset="100%" stop-color="#b45309"/>
            </linearGradient>
            <linearGradient id="ahmose-lotus" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#34d399"/>
              <stop offset="60%" stop-color="#059669"/>
              <stop offset="100%" stop-color="#065f46"/>
            </linearGradient>
          </defs>

          <!-- Nile Lotus & Papyrus Halo Backdrop -->
          <circle cx="80" cy="80" r="72" fill="url(#ahmose-halo)" stroke="#059669" stroke-width="2"/>
          <circle cx="80" cy="80" r="66" fill="none" stroke="#10b981" stroke-width="1" stroke-dasharray="4 2"/>
          <!-- Papyrus reeds silhouette -->
          <g opacity="0.22" stroke="#047857" stroke-width="1.8" fill="none">
            <path d="M 28,120 Q 35,60 30,30 Q 42,45 35,65"/>
            <path d="M 132,120 Q 125,60 130,30 Q 118,45 125,65"/>
            <circle cx="80" cy="28" r="8" fill="rgba(16, 185, 129, 0.3)"/>
          </g>

          <!-- Shoulders & Athletic Sun-Tanned Build -->
          <path d="M 26,156 Q 42,118 70,114 L 90,114 Q 118,118 134,156 Z" fill="#995e34"/>
          <!-- Pleated Linen Sash & Emerald Lotus Band -->
          <path d="M 38,156 L 74,114 L 88,114 L 54,156 Z" fill="url(#ahmose-lotus)"/>
          <!-- Gold Embroidered Lotus Border -->
          <path d="M 40,156 L 75,114" stroke="url(#ahmose-gold)" stroke-width="2"/>

          <!-- Strong Bronzed Neck -->
          <rect x="71" y="86" width="18" height="30" rx="3" fill="#995e34"/>
          <!-- Reed & Gold Beaded Collar -->
          <path d="M 64,106 Q 80,116 96,106" stroke="url(#ahmose-gold)" stroke-width="3" fill="none"/>
          <circle cx="70" cy="110" r="2" fill="#059669"/>
          <circle cx="80" cy="112" r="2.5" fill="#f59e0b"/>
          <circle cx="90" cy="110" r="2" fill="#059669"/>

          <!-- Warm Friendly Sculpted Face -->
          <ellipse cx="80" cy="72" rx="19" ry="23" fill="#995e34"/>
          <!-- Strong Jaw -->
          <path d="M 64,72 Q 68,96 80,98 Q 92,96 96,72 Z" fill="#995e34"/>

          <!-- Short Curly Textured Black Hair -->
          <path d="M 60,58 C 56,38 66,24 80,24 C 94,24 104,38 100,58 C 96,48 88,44 80,44 C 72,44 64,48 60,58 Z" fill="#1c1917"/>
          <circle cx="64" cy="36" r="4.5" fill="#1c1917"/>
          <circle cx="72" cy="30" r="4.5" fill="#1c1917"/>
          <circle cx="80" cy="27" r="4.5" fill="#1c1917"/>
          <circle cx="88" cy="30" r="4.5" fill="#1c1917"/>
          <circle cx="96" cy="36" r="4.5" fill="#1c1917"/>

          <!-- Ears with Small Gold Studs -->
          <ellipse cx="61" cy="73" rx="3.5" ry="6" fill="#995e34"/>
          <circle cx="61" cy="76" r="1.5" fill="url(#ahmose-gold)"/>
          <ellipse cx="99" cy="73" rx="3.5" ry="6" fill="#995e34"/>
          <circle cx="99" cy="76" r="1.5" fill="url(#ahmose-gold)"/>

          <!-- Warm Bright Eyes & Dark Brows -->
          <path d="M 66,64 Q 72,62 77,65" stroke="#1c1917" stroke-width="2.2" fill="none" stroke-linecap="round"/>
          <path d="M 83,65 Q 88,62 94,64" stroke="#1c1917" stroke-width="2.2" fill="none" stroke-linecap="round"/>
          <ellipse cx="72" cy="70" rx="3" ry="2.2" fill="#1c1917"/>
          <ellipse cx="88" cy="70" rx="3" ry="2.2" fill="#1c1917"/>
          <circle cx="73.5" cy="69" r="0.8" fill="#ffffff"/>
          <circle cx="89.5" cy="69" r="0.8" fill="#ffffff"/>

          <!-- Straight Nose & Warm Open Smile -->
          <path d="M 80,68 L 78,79 L 83,80" stroke="#78350f" stroke-width="1.8" fill="none"/>
          <path d="M 74,86 Q 80,91 86,86" stroke="#451a03" stroke-width="2.2" fill="none" stroke-linecap="round"/>

          <!-- Central Golden Ankh Talisman -->
          <g transform="translate(72, 122)">
            <ellipse cx="8" cy="8" rx="6" ry="7" fill="none" stroke="url(#ahmose-gold)" stroke-width="2.8"/>
            <line x1="8" y1="15" x2="8" y2="30" stroke="url(#ahmose-gold)" stroke-width="3" stroke-linecap="round"/>
            <line x1="2" y1="19" x2="14" y2="19" stroke="url(#ahmose-gold)" stroke-width="3" stroke-linecap="round"/>
          </g>

          <!-- Foreground: Blooming Nile Blue Lotus Blossom -->
          <g transform="translate(104, 108)">
            <!-- Stem -->
            <path d="M 6,40 Q 12,24 16,14" stroke="#059669" stroke-width="3" fill="none"/>
            <!-- Sepals & Petals -->
            <path d="M 8,14 Q 16,0 24,14 Q 16,22 8,14 Z" fill="#06b6d4"/>
            <path d="M 12,14 Q 16,-2 20,14 Z" fill="#38bdf8"/>
            <path d="M 4,16 Q 14,8 16,16 Q 10,24 4,16 Z" fill="#0284c7"/>
            <path d="M 28,16 Q 18,8 16,16 Q 22,24 28,16 Z" fill="#0284c7"/>
            <circle cx="16" cy="14" r="3" fill="#fef08a"/>
          </g>
        </svg>
      `;
    }
  }

  // =========================================================================
  // FALLBACK / FULL-BODY IDLE POSE (For In-Game Sidebars)
  // =========================================================================
  if (charId === 'amara') {
    return `
      <svg class="companion-svg companion-fullbody" viewBox="0 0 140 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="amara-robe" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#d97706"/>
            <stop offset="60%" stop-color="#b45309"/>
            <stop offset="100%" stop-color="#1e1b4b"/>
          </linearGradient>
          <linearGradient id="amara-gold-full" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#fde047"/>
            <stop offset="100%" stop-color="#d97706"/>
          </linearGradient>
        </defs>
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <path d="M 52,100 Q 36,160 30,245 L 110,245 Q 104,160 88,100 Z" fill="url(#amara-robe)"/>
        <path d="M 55,100 C 62,140 50,190 44,245 L 68,245 C 72,190 74,140 68,100 Z" fill="#b45309" opacity="0.6"/>
        <path d="M 72,100 C 82,130 98,180 106,245 L 88,245 C 80,180 72,135 68,100 Z" fill="#1e1b4b" opacity="0.8"/>
        <path d="M 30,242 L 110,242 L 110,245 L 30,245 Z" fill="url(#amara-gold-full)"/>
        <path d="M 48,105 Q 68,140 102,235" stroke="url(#amara-gold-full)" stroke-width="2.5" fill="none"/>
        <ellipse cx="58" cy="246" rx="6" ry="3" fill="#b47b4d"/>
        <ellipse cx="82" cy="246" rx="6" ry="3" fill="#b47b4d"/>
        <path d="M 54,75 L 86,75 L 88,105 L 52,105 Z" fill="#1e1b4b"/>
        <path d="M 64,55 L 76,55 L 78,80 L 62,80 Z" fill="#b47b4d"/>
        <circle cx="70" cy="74" r="2.5" fill="#f59e0b"/>
        <path d="M 54,78 Q 38,100 46,128 L 54,124 Q 48,104 60,82 Z" fill="#b47b4d"/>
        <rect x="42" y="96" width="6" height="5" rx="1.5" fill="url(#amara-gold-full)"/>
        <ellipse cx="48" cy="130" rx="9" ry="4" fill="#ca8a04"/>
        <path d="M 39,130 Q 48,142 57,130 Z" fill="#b45309"/>
        <path d="M 86,78 Q 102,100 94,132 L 86,128 Q 92,104 80,82 Z" fill="#b47b4d"/>
        <rect x="92" y="96" width="6" height="5" rx="1.5" fill="url(#amara-gold-full)"/>
        <path d="M 90,132 Q 95,165 92,195 Q 98,220 94,235" stroke="#fef08a" stroke-width="2" stroke-dasharray="3 2" fill="none"/>
        <circle cx="90" cy="132" r="3" fill="#c2410c"/>
        <ellipse cx="70" cy="46" rx="12" ry="14" fill="#b47b4d"/>
        <circle cx="70" cy="28" r="9" fill="#18181b"/>
        <circle cx="70" cy="28" r="3" fill="url(#amara-gold-full)"/>
        <path d="M 58,40 Q 70,30 82,40 Q 84,52 82,58 Q 70,38 58,58 Z" fill="#18181b"/>
        <circle cx="70" cy="42" r="1.5" fill="#c2410c"/>
        <ellipse cx="66" cy="46" rx="1.5" ry="1" fill="#27272a"/>
        <ellipse cx="74" cy="46" rx="1.5" ry="1" fill="#27272a"/>
        <path d="M 68,52 Q 70,54 72,52" stroke="#991b1b" stroke-width="1.2" fill="none"/>
      </svg>
    `;
  } else if (charId === 'vikram') {
    return `
      <svg class="companion-svg companion-fullbody" viewBox="0 0 140 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vikram-turban-full" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#c2410c"/>
          </linearGradient>
        </defs>
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <path d="M 52,140 Q 40,195 44,244 L 96,244 Q 100,195 88,140 Z" fill="#c2410c"/>
        <path d="M 66,140 L 68,244 L 72,244 L 74,140 Z" fill="#9a3412"/>
        <rect x="46" y="244" width="14" height="5" rx="2" fill="#78350f"/>
        <rect x="80" y="244" width="14" height="5" rx="2" fill="#78350f"/>
        <path d="M 50,78 L 90,78 L 94,152 L 46,152 Z" fill="#fef3c7"/>
        <path d="M 68,78 L 68,125" stroke="#d97706" stroke-width="1.5"/>
        <rect x="46" y="132" width="48" height="9" rx="2" fill="#78350f"/>
        <rect x="66" y="130" width="8" height="13" rx="2" fill="#d97706"/>
        <path d="M 56,141 L 56,165 L 53,172 L 59,172 Z" fill="#b45309"/>
        <path d="M 50,82 Q 32,106 38,136 L 46,132 Q 40,110 58,86 Z" fill="#a36d40"/>
        <rect x="30" y="120" width="14" height="26" rx="3" fill="#fde68a" stroke="#d97706" transform="rotate(-25 35 130)"/>
        <path d="M 90,82 Q 108,106 102,136 L 94,132 Q 98,110 82,86 Z" fill="#a36d40"/>
        <path d="M 98,125 L 112,110 L 116,114 L 102,129 Z" fill="#ca8a04"/>
        <rect x="65" y="58" width="10" height="22" fill="#a36d40"/>
        <ellipse cx="70" cy="50" rx="11" ry="13" fill="#a36d40"/>
        <path d="M 56,44 Q 70,22 84,44 Q 92,30 70,20 Q 48,30 56,44 Z" fill="url(#vikram-turban-full)"/>
        <circle cx="70" cy="30" r="3.5" fill="#10b981"/>
        <ellipse cx="66" cy="50" rx="1.5" ry="1" fill="#1c1917"/>
        <ellipse cx="74" cy="50" rx="1.5" ry="1" fill="#1c1917"/>
        <path d="M 67,56 Q 70,58 73,56" stroke="#451a03" stroke-width="1.5" fill="none"/>
      </svg>
    `;
  } else if (charId === 'yuki') {
    return `
      <svg class="companion-svg companion-fullbody" viewBox="0 0 140 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <path d="M 52,108 Q 36,170 30,244 L 110,244 Q 104,170 88,108 Z" fill="#dc2626"/>
        <path d="M 68,108 L 68,244" stroke="#991b1b" stroke-width="2"/>
        <path d="M 50,118 L 46,244" stroke="#991b1b" stroke-width="1.5"/>
        <path d="M 90,118 L 94,244" stroke="#991b1b" stroke-width="1.5"/>
        <rect x="46" y="244" width="14" height="4" fill="#ffffff"/>
        <rect x="46" y="247" width="14" height="4" rx="1" fill="#78350f"/>
        <rect x="80" y="244" width="14" height="4" fill="#ffffff"/>
        <rect x="80" y="247" width="14" height="4" rx="1" fill="#78350f"/>
        <path d="M 50,70 L 90,70 L 92,112 L 48,112 Z" fill="#ffffff" stroke="#e2e8f0"/>
        <rect x="48" y="104" width="44" height="8" fill="#b91c1c"/>
        <path d="M 48,72 Q 26,95 34,124 L 44,120 Q 36,98 52,78 Z" fill="#ffffff" stroke="#e2e8f0"/>
        <circle cx="34" cy="126" r="4.5" fill="#cbd5e1" stroke="#64748b"/>
        <path d="M 34,130 L 32,142" stroke="#dc2626" stroke-width="2"/>
        <path d="M 92,72 Q 114,95 106,124 L 96,120 Q 104,98 88,78 Z" fill="#ffffff" stroke="#e2e8f0"/>
        <line x1="106" y1="124" x2="118" y2="86" stroke="#ca8a04" stroke-width="2.5"/>
        <path d="M 118,86 L 124,92 L 118,98 L 126,104" stroke="#ffffff" stroke-width="3" fill="none"/>
        <path d="M 52,42 Q 40,80 44,140 Q 42,90 56,54 Z" fill="#18181b"/>
        <path d="M 88,42 Q 100,80 96,140 Q 98,90 84,54 Z" fill="#18181b"/>
        <rect x="68" y="90" width="4" height="6" fill="#dc2626"/>
        <rect x="66" y="54" width="8" height="18" fill="#fde8d0"/>
        <ellipse cx="70" cy="46" rx="11" ry="13" fill="#fde8d0"/>
        <path d="M 58,42 Q 70,30 82,42 Q 84,54 80,60 Q 70,36 60,60 Z" fill="#18181b"/>
        <ellipse cx="66" cy="46" rx="1.5" ry="1" fill="#18181b"/>
        <ellipse cx="74" cy="46" rx="1.5" ry="1" fill="#18181b"/>
        <path d="M 68,52 Q 70,54 72,52" stroke="#e11d48" stroke-width="1.2" fill="none"/>
      </svg>
    `;
  } else if (charId === 'kenji') {
    return `
      <svg class="companion-svg companion-fullbody" viewBox="0 0 140 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <path d="M 50,116 Q 36,175 32,244 L 108,244 Q 104,175 90,116 Z" fill="#1e3a8a"/>
        <path d="M 70,116 L 70,244" stroke="#172554" stroke-width="2"/>
        <rect x="46" y="244" width="15" height="7" rx="1" fill="#78350f"/>
        <rect x="79" y="244" width="15" height="7" rx="1" fill="#78350f"/>
        <path d="M 48,74 L 92,74 L 96,120 L 44,120 Z" fill="#93c5fd"/>
        <path d="M 62,74 L 70,105 L 78,74" fill="#ffffff"/>
        <rect x="46" y="112" width="48" height="9" fill="#1e293b"/>
        <rect x="78" y="104" width="6" height="24" rx="1" fill="#d97706" stroke="#78350f"/>
        <path d="M 48,76 Q 32,102 38,132 L 48,128 Q 42,106 58,82 Z" fill="#93c5fd"/>
        <rect x="36" y="118" width="10" height="12" rx="2" fill="#ffffff" stroke="#cbd5e1"/>
        <path d="M 92,76 Q 108,102 102,132 L 92,128 Q 98,106 82,82 Z" fill="#93c5fd"/>
        <rect x="94" y="118" width="10" height="12" rx="2" fill="#ffffff" stroke="#cbd5e1"/>
        <rect x="65" y="56" width="10" height="20" fill="#ebd0b5"/>
        <ellipse cx="70" cy="48" rx="11" ry="13" fill="#ebd0b5"/>
        <path d="M 58,40 Q 70,30 82,40 Q 82,54 80,58 Q 70,36 60,58 Z" fill="#18181b"/>
        <rect x="58" y="42" width="24" height="4" fill="#ffffff"/>
        <line x1="64" y1="48" x2="68" y2="48" stroke="#18181b" stroke-width="1.8"/>
        <line x1="72" y1="48" x2="76" y2="48" stroke="#18181b" stroke-width="1.8"/>
        <line x1="68" y1="54" x2="72" y2="54" stroke="#451a03" stroke-width="1.4"/>
      </svg>
    `;
  } else if (charId === 'kiya') {
    return `
      <svg class="companion-svg companion-fullbody" viewBox="0 0 140 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="kiya-gown-full" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1d4ed8"/>
            <stop offset="100%" stop-color="#1e3a8a"/>
          </linearGradient>
          <linearGradient id="kiya-collar-full" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b"/>
            <stop offset="35%" stop-color="#06b6d4"/>
            <stop offset="70%" stop-color="#dc2626"/>
            <stop offset="100%" stop-color="#f59e0b"/>
          </linearGradient>
        </defs>
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <path d="M 56,100 Q 48,170 42,245 L 98,245 Q 92,170 84,100 Z" fill="url(#kiya-gown-full)"/>
        <rect x="48" y="245" width="14" height="4" rx="1.5" fill="#f59e0b"/>
        <rect x="78" y="245" width="14" height="4" rx="1.5" fill="#f59e0b"/>
        <path d="M 56,76 L 84,76 L 86,102 L 54,102 Z" fill="url(#kiya-gown-full)"/>
        <path d="M 52,70 Q 70,88 88,70 Q 84,54 70,54 Q 56,54 52,70 Z" fill="url(#kiya-collar-full)"/>
        <path d="M 54,76 Q 36,100 44,130 L 52,126 Q 44,104 60,82 Z" fill="#ab7045"/>
        <rect x="38" y="104" width="8" height="10" rx="1.5" fill="#fbbf24"/>
        <rect x="34" y="122" width="18" height="24" rx="2" fill="#78350f" stroke="#ca8a04"/>
        <path d="M 86,76 Q 104,100 96,130 L 88,126 Q 96,104 80,82 Z" fill="#ab7045"/>
        <rect x="94" y="104" width="8" height="10" rx="1.5" fill="#fbbf24"/>
        <line x1="96" y1="126" x2="114" y2="108" stroke="#ca8a04" stroke-width="3"/>
        <circle cx="114" cy="108" r="3" fill="#b45309"/>
        <rect x="66" y="52" width="8" height="16" fill="#ab7045"/>
        <ellipse cx="70" cy="44" rx="11" ry="13" fill="#ab7045"/>
        <path d="M 59,42 Q 70,26 81,42 Q 83,50 81,56 Q 70,44 59,56 Z" fill="#f59e0b"/>
        <circle cx="70" cy="28" r="2.5" fill="#dc2626"/>
        <path d="M 63,44 L 68,44 L 69,45 L 64,45 Z" fill="#09090b"/>
        <path d="M 72,44 L 77,44 L 78,45 L 73,45 Z" fill="#09090b"/>
        <path d="M 68,51 Q 70,53 72,51" stroke="#991b1b" stroke-width="1.3" fill="none"/>
      </svg>
    `;
  } else if (charId === 'ahmose') {
    return `
      <svg class="companion-svg companion-fullbody" viewBox="0 0 140 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <path d="M 50,126 Q 42,185 46,242 L 94,242 Q 98,185 90,126 Z" fill="#f8fafc" stroke="#e2e8f0"/>
        <path d="M 52,126 L 88,126 L 82,180 L 68,180 Z" fill="#059669"/>
        <rect x="46" y="242" width="16" height="5" rx="1.5" fill="#d97706"/>
        <rect x="78" y="242" width="16" height="5" rx="1.5" fill="#d97706"/>
        <path d="M 48,74 L 92,74 L 88,128 L 52,128 Z" fill="#995e34"/>
        <path d="M 60,94 Q 70,98 80,94" stroke="#78350f" stroke-width="1.5" fill="none"/>
        <line x1="50" y1="76" x2="88" y2="128" stroke="#78350f" stroke-width="3"/>
        <circle cx="70" cy="88" r="3.5" fill="#f59e0b"/>
        <line x1="70" y1="91" x2="70" y2="99" stroke="#f59e0b" stroke-width="2"/>
        <line x1="66" y1="94" x2="74" y2="94" stroke="#f59e0b" stroke-width="2"/>
        <path d="M 48,76 Q 30,104 36,134 L 46,130 Q 40,108 56,84 Z" fill="#995e34"/>
        <path d="M 92,76 Q 110,104 104,134 L 94,130 Q 100,108 84,84 Z" fill="#995e34"/>
        <rect x="65" y="54" width="10" height="22" fill="#995e34"/>
        <ellipse cx="70" cy="46" rx="11" ry="13" fill="#995e34"/>
        <path d="M 58,42 Q 70,28 82,42 Q 84,36 70,28 Q 56,36 58,42 Z" fill="#1c1917"/>
        <circle cx="62" cy="36" r="2.5" fill="#1c1917"/>
        <circle cx="70" cy="32" r="2.5" fill="#1c1917"/>
        <circle cx="78" cy="36" r="2.5" fill="#1c1917"/>
        <ellipse cx="66" cy="46" rx="1.5" ry="1.2" fill="#1c1917"/>
        <ellipse cx="74" cy="46" rx="1.5" ry="1.2" fill="#1c1917"/>
        <path d="M 66,54 Q 70,58 74,54" stroke="#451a03" stroke-width="1.6" fill="none"/>
      </svg>
    `;
  }

  return '';
};
