import { motion } from 'framer-motion'
import styles from './Contact.module.css'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const LINKS = [
  { label: 'Email', href: 'mailto:kgoyal0302@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kunal-goyal-164594216/' },
  { label: 'Twitter', href: 'https://x.com/kunalgoyal8005' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/19NOEwRvvDMYd383Qso-3zwTxENYVMsvs/view?usp=sharing' },
  { label: 'Whatsapp', href: 'https://wa.me/918005733551' },
]

export default function Contact() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.box}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <motion.h2 className={styles.heading} variants={fadeUp}>
          Let's Work Together
        </motion.h2>
        <div className={styles.links}>
          {LINKS.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className={styles.link}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
