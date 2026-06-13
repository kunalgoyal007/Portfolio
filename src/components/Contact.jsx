import styles from './Contact.module.css'

const LINKS = [
  { label: 'Email', href: 'mailto:kgoyal0302@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kunal-goyal-164594216/' },
  { label: 'Twitter', href: 'https://x.com/kunalgoyal8005' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1acSycE2hhrvozAKcQuHHystvRLhn9btQ/view?usp=sharing' },
  { label: 'Whatsapp', href: 'https://wa.me/918005733551' },
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
