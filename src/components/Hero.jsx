import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import Navbar from './Navbar'
import { fadeUp, stagger, EASE } from '../lib/motion'

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
      <Navbar />
      {/* LEFT — photo */}
      <motion.div
        className={styles.photoCol}
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <img src="/images/KG.png" alt="Kunal Goyal" className={styles.photo} />
        <p className={styles.name}>Kunal Goyal</p>
      </motion.div>

      {/* RIGHT — text */}
      <motion.div
        className={styles.textCol}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div className={styles.typingBox} variants={fadeUp}>
          <span className={styles.cornerTL} />
          <span className={styles.cornerTR} />
          <span className={styles.cornerBL} />
          <span className={styles.cornerBR} />
          <span className={styles.typingText}>{displayText}</span>
          <span className={styles.cursor}>|</span>
        </motion.div>
        <motion.h1 className={styles.headline} variants={fadeUp}>
          the In-Between
        </motion.h1>
        <motion.p className={styles.sub} variants={fadeUp}>
          I design products where structure does the heavy lifting and motion does
          the storytelling — from enterprise dashboards to AI-led experiences.
        </motion.p>
      </motion.div>
    </section>
  )
}
