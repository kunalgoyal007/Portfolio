import styles from './Contact.module.css'

const LINKS = [
  { label: 'Email', href: 'mailto:kgoyal0302@gmail.com' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Resume', href: '#' },
  { label: 'Whatsapp', href: '#' },
]

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h2 className={styles.heading}>Let's Work Together</h2>
        <div className={styles.links}>
          {LINKS.map((link, i) => (
            <a key={i} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
