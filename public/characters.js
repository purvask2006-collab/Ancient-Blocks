// Sacred Patterns - Character Design Bible & Full-Body SVG Renderer
// 6 Humanoid Companions: Amara & Vikram (India), Yuki & Kenji (Japan), Kiya & Ahmose (Egypt)

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

// Full-body SVG Generator for each companion
window.getCompanionSVG = function(charId, pose = 'idle') {
  const c = window.SACRED_CHARACTERS[charId] || window.SACRED_CHARACTERS.amara;
  
  if (charId === 'amara') {
    return `
      <svg class="companion-svg" viewBox="0 0 140 260" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="amara-robe" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#d97706"/>
            <stop offset="60%" stop-color="#b45309"/>
            <stop offset="100%" stop-color="#1e1b4b"/>
          </linearGradient>
          <linearGradient id="amara-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#fde047"/>
            <stop offset="100%" stop-color="#d97706"/>
          </linearGradient>
        </defs>
        <!-- Shadow -->
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <!-- Robe Body -->
        <path d="M 52,100 Q 36,160 30,245 L 110,245 Q 104,160 88,100 Z" fill="url(#amara-robe)"/>
        <!-- Pleat Drapery & Indigo Pallu -->
        <path d="M 55,100 C 62,140 50,190 44,245 L 68,245 C 72,190 74,140 68,100 Z" fill="#b45309" opacity="0.6"/>
        <path d="M 72,100 C 82,130 98,180 106,245 L 88,245 C 80,180 72,135 68,100 Z" fill="#1e1b4b" opacity="0.8"/>
        <!-- Golden Trim -->
        <path d="M 30,242 L 110,242 L 110,245 L 30,245 Z" fill="url(#amara-gold)"/>
        <path d="M 48,105 Q 68,140 102,235" stroke="url(#amara-gold)" stroke-width="2.5" fill="none"/>
        <!-- Feet / Sandalwood toes -->
        <ellipse cx="58" cy="246" rx="6" ry="3" fill="#b47b4d"/>
        <ellipse cx="82" cy="246" rx="6" ry="3" fill="#b47b4d"/>
        <!-- Torso & Blouse -->
        <path d="M 54,75 L 86,75 L 88,105 L 52,105 Z" fill="#1e1b4b"/>
        <!-- Neck & Torso skin -->
        <path d="M 64,55 L 76,55 L 78,80 L 62,80 Z" fill="#b47b4d"/>
        <circle cx="70" cy="74" r="2.5" fill="#f59e0b"/>
        <!-- Brass Armlets & Left Arm (Offering Bowl) -->
        <path d="M 54,78 Q 38,100 46,128 L 54,124 Q 48,104 60,82 Z" fill="#b47b4d"/>
        <rect x="42" y="96" width="6" height="5" rx="1.5" fill="url(#amara-gold)"/>
        <!-- Small Copper Bowl -->
        <ellipse cx="48" cy="130" rx="9" ry="4" fill="#ca8a04"/>
        <path d="M 39,130 Q 48,142 57,130 Z" fill="#b45309"/>
        <!-- Right Arm (Measuring Cord) -->
        <path d="M 86,78 Q 102,100 94,132 L 86,128 Q 92,104 80,82 Z" fill="#b47b4d"/>
        <rect x="92" y="96" width="6" height="5" rx="1.5" fill="url(#amara-gold)"/>
        <!-- Sacred Measuring Cord & Sandalwood Palm -->
        <path d="M 90,132 Q 95,165 92,195 Q 98,220 94,235" stroke="#fef08a" stroke-width="2" stroke-dasharray="3 2" fill="none"/>
        <circle cx="90" cy="132" r="3" fill="#c2410c"/>
        <!-- Head -->
        <ellipse cx="70" cy="46" rx="12" ry="14" fill="#b47b4d"/>
        <!-- Hair Bun & Ornament -->
        <circle cx="70" cy="28" r="9" fill="#18181b"/>
        <circle cx="70" cy="28" r="3" fill="url(#amara-gold)"/>
        <path d="M 58,40 Q 70,30 82,40 Q 84,52 82,58 Q 70,38 58,58 Z" fill="#18181b"/>
        <!-- Face Features -->
        <circle cx="70" cy="42" r="1.5" fill="#c2410c"/><!-- Bindi -->
        <ellipse cx="66" cy="46" rx="1.5" ry="1" fill="#27272a"/>
        <ellipse cx="74" cy="46" rx="1.5" ry="1" fill="#27272a"/>
        <path d="M 68,52 Q 70,54 72,52" stroke="#991b1b" stroke-width="1.2" fill="none"/>
      </svg>
    `;
  } else if (charId === 'vikram') {
    return `
      <svg class="companion-svg" viewBox="0 0 140 260" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vikram-turban" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#c2410c"/>
          </linearGradient>
        </defs>
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <!-- Terracotta Dhoti -->
        <path d="M 52,140 Q 40,195 44,244 L 96,244 Q 100,195 88,140 Z" fill="#c2410c"/>
        <path d="M 66,140 L 68,244 L 72,244 L 74,140 Z" fill="#9a3412"/>
        <!-- Sandaled feet -->
        <rect x="46" y="244" width="14" height="5" rx="2" fill="#78350f"/>
        <rect x="80" y="244" width="14" height="5" rx="2" fill="#78350f"/>
        <!-- Cream Kurta -->
        <path d="M 50,78 L 90,78 L 94,152 L 46,152 Z" fill="#fef3c7"/>
        <path d="M 68,78 L 68,125" stroke="#d97706" stroke-width="1.5"/>
        <!-- Leather Tool Belt -->
        <rect x="46" y="132" width="48" height="9" rx="2" fill="#78350f"/>
        <rect x="66" y="130" width="8" height="13" rx="2" fill="#d97706"/>
        <!-- Hanging Bronze Plumb Bob -->
        <path d="M 56,141 L 56,165 L 53,172 L 59,172 Z" fill="#b45309"/>
        <!-- Arms -->
        <!-- Left arm with blueprint roll -->
        <path d="M 50,82 Q 32,106 38,136 L 46,132 Q 40,110 58,86 Z" fill="#a36d40"/>
        <rect x="30" y="120" width="14" height="26" rx="3" fill="#fde68a" stroke="#d97706" transform="rotate(-25 35 130)"/>
        <!-- Right arm holding folding measuring rule -->
        <path d="M 90,82 Q 108,106 102,136 L 94,132 Q 98,110 82,86 Z" fill="#a36d40"/>
        <path d="M 98,125 L 112,110 L 116,114 L 102,129 Z" fill="#ca8a04"/>
        <!-- Head and Neck -->
        <rect x="65" y="58" width="10" height="22" fill="#a36d40"/>
        <ellipse cx="70" cy="50" rx="11" ry="13" fill="#a36d40"/>
        <!-- Turban with Emerald Pin -->
        <path d="M 56,44 Q 70,22 84,44 Q 92,30 70,20 Q 48,30 56,44 Z" fill="url(#vikram-turban)"/>
        <circle cx="70" cy="30" r="3.5" fill="#10b981"/>
        <!-- Face Features -->
        <ellipse cx="66" cy="50" rx="1.5" ry="1" fill="#1c1917"/>
        <ellipse cx="74" cy="50" rx="1.5" ry="1" fill="#1c1917"/>
        <path d="M 67,56 Q 70,58 73,56" stroke="#451a03" stroke-width="1.5" fill="none"/>
      </svg>
    `;
  } else if (charId === 'yuki') {
    return `
      <svg class="companion-svg" viewBox="0 0 140 260" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <!-- Red Hakama -->
        <path d="M 52,108 Q 36,170 30,244 L 110,244 Q 104,170 88,108 Z" fill="#dc2626"/>
        <path d="M 68,108 L 68,244" stroke="#991b1b" stroke-width="2"/>
        <path d="M 50,118 L 46,244" stroke="#991b1b" stroke-width="1.5"/>
        <path d="M 90,118 L 94,244" stroke="#991b1b" stroke-width="1.5"/>
        <!-- White Tabi & Wooden Geta Sandals -->
        <rect x="46" y="244" width="14" height="4" fill="#ffffff"/>
        <rect x="46" y="247" width="14" height="4" rx="1" fill="#78350f"/>
        <rect x="80" y="244" width="14" height="4" fill="#ffffff"/>
        <rect x="80" y="247" width="14" height="4" rx="1" fill="#78350f"/>
        <!-- White Haori Kimono -->
        <path d="M 50,70 L 90,70 L 92,112 L 48,112 Z" fill="#ffffff" stroke="#e2e8f0"/>
        <!-- Red Obi Sash -->
        <rect x="48" y="104" width="44" height="8" fill="#b91c1c"/>
        <!-- Left Arm holding Silver Suzu Bell -->
        <path d="M 48,72 Q 26,95 34,124 L 44,120 Q 36,98 52,78 Z" fill="#ffffff" stroke="#e2e8f0"/>
        <circle cx="34" cy="126" r="4.5" fill="#cbd5e1" stroke="#64748b"/>
        <path d="M 34,130 L 32,142" stroke="#dc2626" stroke-width="2"/>
        <!-- Right Arm holding Gohei Ritual Wand -->
        <path d="M 92,72 Q 114,95 106,124 L 96,120 Q 104,98 88,78 Z" fill="#ffffff" stroke="#e2e8f0"/>
        <line x1="106" y1="124" x2="118" y2="86" stroke="#ca8a04" stroke-width="2.5"/>
        <!-- Zigzag paper shide -->
        <path d="M 118,86 L 124,92 L 118,98 L 126,104" stroke="#ffffff" stroke-width="3" fill="none"/>
        <!-- Long Black Hair trailing -->
        <path d="M 52,42 Q 40,80 44,140 Q 42,90 56,54 Z" fill="#18181b"/>
        <path d="M 88,42 Q 100,80 96,140 Q 98,90 84,54 Z" fill="#18181b"/>
        <rect x="68" y="90" width="4" height="6" fill="#dc2626"/><!-- Hair tie cord -->
        <!-- Head & Neck -->
        <rect x="66" y="54" width="8" height="18" fill="#fde8d0"/>
        <ellipse cx="70" cy="46" rx="11" ry="13" fill="#fde8d0"/>
        <path d="M 58,42 Q 70,30 82,42 Q 84,54 80,60 Q 70,36 60,60 Z" fill="#18181b"/>
        <!-- Eyes & gentle smile -->
        <ellipse cx="66" cy="46" rx="1.5" ry="1" fill="#18181b"/>
        <ellipse cx="74" cy="46" rx="1.5" ry="1" fill="#18181b"/>
        <path d="M 68,52 Q 70,54 72,52" stroke="#e11d48" stroke-width="1.2" fill="none"/>
      </svg>
    `;
  } else if (charId === 'kenji') {
    return `
      <svg class="companion-svg" viewBox="0 0 140 260" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <!-- Deep Blue Hakama -->
        <path d="M 50,116 Q 36,175 32,244 L 108,244 Q 104,175 90,116 Z" fill="#1e3a8a"/>
        <path d="M 70,116 L 70,244" stroke="#172554" stroke-width="2"/>
        <!-- Wooden Geta Sandals -->
        <rect x="46" y="244" width="15" height="7" rx="1" fill="#78350f"/>
        <rect x="79" y="244" width="15" height="7" rx="1" fill="#78350f"/>
        <!-- Pale Indigo Haori over White Kimono Top -->
        <path d="M 48,74 L 92,74 L 96,120 L 44,120 Z" fill="#93c5fd"/>
        <path d="M 62,74 L 70,105 L 78,74" fill="#ffffff"/>
        <!-- Dark Obi Sash with Wooden Shaku Ruler -->
        <rect x="46" y="112" width="48" height="9" fill="#1e293b"/>
        <rect x="78" y="104" width="6" height="24" rx="1" fill="#d97706" stroke="#78350f"/>
        <!-- Arms with Cloth Wrist Wraps -->
        <path d="M 48,76 Q 32,102 38,132 L 48,128 Q 42,106 58,82 Z" fill="#93c5fd"/>
        <rect x="36" y="118" width="10" height="12" rx="2" fill="#ffffff" stroke="#cbd5e1"/>
        <path d="M 92,76 Q 108,102 102,132 L 92,128 Q 98,106 82,82 Z" fill="#93c5fd"/>
        <rect x="94" y="118" width="10" height="12" rx="2" fill="#ffffff" stroke="#cbd5e1"/>
        <!-- Head, Neck, Headband -->
        <rect x="65" y="56" width="10" height="20" fill="#ebd0b5"/>
        <ellipse cx="70" cy="48" rx="11" ry="13" fill="#ebd0b5"/>
        <path d="M 58,40 Q 70,30 82,40 Q 82,54 80,58 Q 70,36 60,58 Z" fill="#18181b"/>
        <rect x="58" y="42" width="24" height="4" fill="#ffffff"/><!-- Headband -->
        <!-- Disciplined Eyes & Mouth -->
        <line x1="64" y1="48" x2="68" y2="48" stroke="#18181b" stroke-width="1.8"/>
        <line x1="72" y1="48" x2="76" y2="48" stroke="#18181b" stroke-width="1.8"/>
        <line x1="68" y1="54" x2="72" y2="54" stroke="#451a03" stroke-width="1.4"/>
      </svg>
    `;
  } else if (charId === 'kiya') {
    return `
      <svg class="companion-svg" viewBox="0 0 140 260" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="kiya-gown" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1d4ed8"/>
            <stop offset="100%" stop-color="#1e3a8a"/>
          </linearGradient>
          <linearGradient id="kiya-collar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f59e0b"/>
            <stop offset="35%" stop-color="#06b6d4"/>
            <stop offset="70%" stop-color="#dc2626"/>
            <stop offset="100%" stop-color="#f59e0b"/>
          </linearGradient>
        </defs>
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <!-- Lapis Lazuli Sheath Gown -->
        <path d="M 56,100 Q 48,170 42,245 L 98,245 Q 92,170 84,100 Z" fill="url(#kiya-gown)"/>
        <!-- Feet in Gold Sandals -->
        <rect x="48" y="245" width="14" height="4" rx="1.5" fill="#f59e0b"/>
        <rect x="78" y="245" width="14" height="4" rx="1.5" fill="#f59e0b"/>
        <!-- Torso -->
        <path d="M 56,76 L 84,76 L 86,102 L 54,102 Z" fill="url(#kiya-gown)"/>
        <!-- Broad Jeweled Wesekh Collar -->
        <path d="M 52,70 Q 70,88 88,70 Q 84,54 70,54 Q 56,54 52,70 Z" fill="url(#kiya-collar)"/>
        <!-- Arms with Wide Gold Cuffs -->
        <!-- Left arm with wax tablet -->
        <path d="M 54,76 Q 36,100 44,130 L 52,126 Q 44,104 60,82 Z" fill="#ab7045"/>
        <rect x="38" y="104" width="8" height="10" rx="1.5" fill="#fbbf24"/>
        <rect x="34" y="122" width="18" height="24" rx="2" fill="#78350f" stroke="#ca8a04"/>
        <!-- Right arm with Bronze Merkhet Sighting Tool -->
        <path d="M 86,76 Q 104,100 96,130 L 88,126 Q 96,104 80,82 Z" fill="#ab7045"/>
        <rect x="94" y="104" width="8" height="10" rx="1.5" fill="#fbbf24"/>
        <line x1="96" y1="126" x2="114" y2="108" stroke="#ca8a04" stroke-width="3"/>
        <circle cx="114" cy="108" r="3" fill="#b45309"/>
        <!-- Head, Neck, Gold-Beaded Net Cap -->
        <rect x="66" y="52" width="8" height="16" fill="#ab7045"/>
        <ellipse cx="70" cy="44" rx="11" ry="13" fill="#ab7045"/>
        <!-- Gold beaded netting cap over smooth-shaven head -->
        <path d="M 59,42 Q 70,26 81,42 Q 83,50 81,56 Q 70,44 59,56 Z" fill="#f59e0b"/>
        <circle cx="70" cy="28" r="2.5" fill="#dc2626"/>
        <!-- Kohl-lined Eyes -->
        <path d="M 63,44 L 68,44 L 69,45 L 64,45 Z" fill="#09090b"/>
        <path d="M 72,44 L 77,44 L 78,45 L 73,45 Z" fill="#09090b"/>
        <path d="M 68,51 Q 70,53 72,51" stroke="#991b1b" stroke-width="1.3" fill="none"/>
      </svg>
    `;
  } else if (charId === 'ahmose') {
    return `
      <svg class="companion-svg" viewBox="0 0 140 260" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="70" cy="250" rx="36" ry="7" fill="rgba(0,0,0,0.22)"/>
        <!-- White Linen Shendyt Kilt -->
        <path d="M 50,126 Q 42,185 46,242 L 94,242 Q 98,185 90,126 Z" fill="#f8fafc" stroke="#e2e8f0"/>
        <!-- Deep Green Lotus Sash -->
        <path d="M 52,126 L 88,126 L 82,180 L 68,180 Z" fill="#059669"/>
        <!-- Woven Reed Papyrus Sandals -->
        <rect x="46" y="242" width="16" height="5" rx="1.5" fill="#d97706"/>
        <rect x="78" y="242" width="16" height="5" rx="1.5" fill="#d97706"/>
        <!-- Bare Chest (Athletic, sun-tanned) -->
        <path d="M 48,74 L 92,74 L 88,128 L 52,128 Z" fill="#995e34"/>
        <path d="M 60,94 Q 70,98 80,94" stroke="#78350f" stroke-width="1.5" fill="none"/>
        <!-- Leather Tool Harness across chest -->
        <line x1="50" y1="76" x2="88" y2="128" stroke="#78350f" stroke-width="3"/>
        <!-- Golden Ankh Pendant -->
        <circle cx="70" cy="88" r="3.5" fill="#f59e0b"/>
        <line x1="70" y1="91" x2="70" y2="99" stroke="#f59e0b" stroke-width="2"/>
        <line x1="66" y1="94" x2="74" y2="94" stroke="#f59e0b" stroke-width="2"/>
        <!-- Arms -->
        <path d="M 48,76 Q 30,104 36,134 L 46,130 Q 40,108 56,84 Z" fill="#995e34"/>
        <path d="M 92,76 Q 110,104 104,134 L 94,130 Q 100,108 84,84 Z" fill="#995e34"/>
        <!-- Head, Neck, Close-cropped curly hair -->
        <rect x="65" y="54" width="10" height="22" fill="#995e34"/>
        <ellipse cx="70" cy="46" rx="11" ry="13" fill="#995e34"/>
        <path d="M 58,42 Q 70,28 82,42 Q 84,36 70,28 Q 56,36 58,42 Z" fill="#1c1917"/>
        <circle cx="62" cy="36" r="2.5" fill="#1c1917"/>
        <circle cx="70" cy="32" r="2.5" fill="#1c1917"/>
        <circle cx="78" cy="36" r="2.5" fill="#1c1917"/>
        <!-- Friendly Warm Eyes & Smile -->
        <ellipse cx="66" cy="46" rx="1.5" ry="1.2" fill="#1c1917"/>
        <ellipse cx="74" cy="46" rx="1.5" ry="1.2" fill="#1c1917"/>
        <path d="M 66,54 Q 70,58 74,54" stroke="#451a03" stroke-width="1.6" fill="none"/>
      </svg>
    `;
  }
  return '';
};
