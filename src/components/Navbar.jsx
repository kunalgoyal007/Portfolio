import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="/images/as1.png" alt="Portfolio 2026" className={styles.left} />
      <a
        href="https://drive.google.com/file/d/19NOEwRvvDMYd383Qso-3zwTxENYVMsvs/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/topleftbar.png" alt="Resume" className={styles.right} />
      </a>
    </nav>
  )
}
