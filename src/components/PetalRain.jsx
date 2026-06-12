import { useEffect, useRef } from 'react'

// ---- Emoji sets ------------------------------------------------------------
const FLOWERS  = ['🌸', '🌺', '🌹', '🌷', '💮', '🌼']
const SPECIALS = ['🕊️', '💕', '✨', '🎀', '💐', '🤍', '❤️']

function pickEmoji() {
  return Math.random() < 0.72
    ? FLOWERS [Math.floor(Math.random() * FLOWERS.length)]
    : SPECIALS[Math.floor(Math.random() * SPECIALS.length)]
}

// ---- Utility ---------------------------------------------------------------
function rand(min, max)    { return min + Math.random() * (max - min) }
function randInt(min, max) { return Math.floor(rand(min, max + 1))    }

// ---- Three depth layers ----------------------------------------------------
//  layer 0 → far  : small, blurry, slow, low opacity
//  layer 1 → mid  : normal
//  layer 2 → near : large, crisp, fast, vivid
const LAYERS = [
  { minFs: 0.55, maxFs: 0.95, minOp: 0.20, maxOp: 0.40, blur: 1.8, spd: 0.60 },
  { minFs: 0.95, maxFs: 1.55, minOp: 0.40, maxOp: 0.65, blur: 0.0, spd: 1.00 },
  { minFs: 1.55, maxFs: 2.50, minOp: 0.60, maxOp: 0.85, blur: 0.0, spd: 1.40 },
]

// ---- CSS injected once into <head> -----------------------------------------
const STYLES = `
.pr-root {
  position : fixed;
  inset     : 0;
  z-index   : 9999;
  overflow  : hidden;
  pointer-events : none;
}

.pr-petal {
  position   : absolute;
  top        : -3.5rem;
  line-height: 1;
  user-select: none;
  will-change: transform, opacity;
  animation  : pr-fall linear forwards;
}

/* Standard falling petal */
@keyframes pr-fall {
  0%   { transform: translateY(0)     translateX(0)           rotate(var(--r0));               opacity: 0;                       }
  6%   { opacity: var(--op);                                                                                                      }
  22%  { transform: translateY(22vh)  translateX(var(--x1))   rotate(calc(var(--r0) +  40deg));                                  }
  40%  { transform: translateY(40vh)  translateX(var(--x2))   rotate(calc(var(--r0) +  95deg));                                  }
  58%  { transform: translateY(58vh)  translateX(var(--x3))   rotate(calc(var(--r0) + 155deg));                                  }
  76%  { transform: translateY(76vh)  translateX(var(--x4))   rotate(calc(var(--r0) + 205deg)); opacity: var(--op);              }
  90%  { transform: translateY(90vh)  translateX(var(--x5))   rotate(calc(var(--r0) + 235deg)); opacity: calc(var(--op) * 0.45); }
  100% { transform: translateY(114vh) translateX(var(--x5))   rotate(var(--r1));                opacity: 0;                       }
}

/* Slow-drifting foreground petal (class added by JS) */
.pr-drift {
  animation-name: pr-drift-fall;
  animation-timing-function: ease-in-out;
}
@keyframes pr-drift-fall {
  0%   { transform: translateY(0)     translateX(0)           rotate(var(--r0)) scale(1);    opacity: 0;                       }
  8%   { opacity: var(--op);                                                                                                    }
  30%  { transform: translateY(28vh)  translateX(var(--x1))   rotate(calc(var(--r0) + 20deg)) scale(1.05);                     }
  55%  { transform: translateY(52vh)  translateX(var(--x2))   rotate(calc(var(--r0) + 50deg)) scale(0.95);                     }
  80%  { transform: translateY(78vh)  translateX(var(--x3))   rotate(calc(var(--r0) + 80deg)) scale(1.02); opacity: var(--op); }
  95%  { opacity: calc(var(--op) * 0.3);                                                                                       }
  100% { transform: translateY(112vh) translateX(var(--x3))   rotate(var(--r1)) scale(1);     opacity: 0;                     }
}

@media (prefers-reduced-motion: reduce) {
  .pr-petal { display: none; }
}
`

let injected = false

// ---- Component -------------------------------------------------------------
export default function PetalRain() {
  const ref = useRef(null)

  useEffect(() => {
    // Inject styles exactly once per page load
    if (!injected) {
      const tag = document.createElement('style')
      tag.textContent = STYLES
      document.head.appendChild(tag)
      injected = true
    }

    const root = ref.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let count = 0
    const MAX = 35

    function spawnPetal() {
      if (count >= MAX) return
      count++

      // ~15% chance of a slow foreground drift petal
      const isDrift  = Math.random() < 0.15
      const layerIdx = isDrift ? 2 : randInt(0, 2)
      const layer    = LAYERS[layerIdx]

      const el = document.createElement('span')
      el.className = isDrift ? 'pr-petal pr-drift' : 'pr-petal'
      el.textContent = pickEmoji()

      // Wind sway path
      const amp = rand(35, 110)
      const x1  =  rand(-amp,       amp)
      const x2  = -x1  * rand(0.4,  1.3)
      const x3  =  rand(-amp,       amp)
      const x4  = -x3  * rand(0.3,  0.8)
      const x5  =  rand(-amp * 0.4, amp * 0.4)

      const r0  = rand(0, 360)
      const r1  = r0 + rand(-260, 260)
      const dur = (isDrift ? rand(14, 22) : rand(8, 17)) / layer.spd
      const op  = rand(layer.minOp, layer.maxOp)
      const fs  = rand(layer.minFs, layer.maxFs)

      // Single combined filter — blur + shadow in one string
      const shadow = 'drop-shadow(0 2px 5px rgba(190,80,110,0.20))'
      const filter = layer.blur > 0
        ? 'blur(' + layer.blur.toFixed(1) + 'px) ' + shadow
        : shadow

      el.style.cssText = [
        'left:'                + rand(-3, 103)    + 'vw',
        'font-size:'           + fs               + 'rem',
        'animation-duration:'  + dur.toFixed(2)   + 's',
        'animation-delay:'     + rand(0, 5)       + 's',
        'filter:'              + filter,
        '--op:'                + op.toFixed(3),
        '--r0:'                + r0.toFixed(1)    + 'deg',
        '--r1:'                + r1.toFixed(1)    + 'deg',
        '--x1:'                + x1.toFixed(1)    + 'px',
        '--x2:'                + x2.toFixed(1)    + 'px',
        '--x3:'                + x3.toFixed(1)    + 'px',
        '--x4:'                + x4.toFixed(1)    + 'px',
        '--x5:'                + x5.toFixed(1)    + 'px',
      ].join(';')

      root.appendChild(el)
      el.addEventListener('animationend', function() {
        el.remove()
        count--
      }, { once: true })
    }

    // Staggered burst on mount so the page feels alive immediately
    for (let i = 0; i < 16; i++) {
      setTimeout(spawnPetal, i * 110)
    }

    const timer = setInterval(spawnPetal, 520)
    return function() { clearInterval(timer) }
  }, [])

  return <div ref={ref} className="pr-root" aria-hidden="true" />
}
