import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const TYPING_WORDS = ['Designing', 'Building', 'Crafting']

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = TYPING_WORDS[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1))
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1600)
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1))
        if (displayText.length - 1 === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length)
        }
      }
    }, isDeleting ? 60 : 100)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex])

  return (
    <section className={styles.hero}>
      {/* LEFT — photo */}
      <div className={styles.photoCol}>
        <img src="/images/KG.png" alt="Kunal Goyal" className={styles.photo} />
        <p className={styles.name}>Kunal Goyal</p>
      </div>

      {/* RIGHT — text */}
      <div className={styles.textCol}>
        <div className={styles.typingBox}>
          <span className={styles.cornerTL} />
          <span className={styles.cornerTR} />
          <span className={styles.cornerBL} />
          <span className={styles.cornerBR} />
          <span className={styles.typingText}>{displayText}</span>
          <span className={styles.cursor}>|</span>
        </div>
        <h1 className={styles.headline}>the In-Between</h1>
        <p className={styles.sub}>
          I design products where structure does the heavy lifting and motion does
          the storytelling — from enterprise dashboards to AI-led experiences.
        </p>
      </div>
    </section>
  )
}
