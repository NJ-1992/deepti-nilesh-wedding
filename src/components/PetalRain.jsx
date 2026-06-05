import { useEffect, useRef } from 'react'
import './PetalRain.css'

const PETALS = ['🌸', '🌺', '🌹', '✿', '❀']

export default function PetalRain() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let count = 0
    const MAX = 18

    const spawnPetal = () => {
      if (count >= MAX) return
      count++
      const petal = document.createElement('div')
      petal.className = 'petal'
      petal.textContent = PETALS[Math.floor(Math.random() * PETALS.length)]
      petal.style.cssText = `
        left: ${Math.random() * 100}vw;
        font-size: ${0.8 + Math.random() * 1.4}rem;
        animation-duration: ${6 + Math.random() * 8}s;
        animation-delay: ${Math.random() * 4}s;
        opacity: ${0.4 + Math.random() * 0.4};
      `
      container.appendChild(petal)
      petal.addEventListener('animationend', () => {
        petal.remove()
        count--
      })
    }

    const id = setInterval(spawnPetal, 800)
    // Initial burst
    for (let i = 0; i < 8; i++) setTimeout(spawnPetal, i * 200)
    return () => clearInterval(id)
  }, [])

  return <div ref={containerRef} className="petal-container" aria-hidden="true" />
}
