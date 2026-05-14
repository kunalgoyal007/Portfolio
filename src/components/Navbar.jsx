import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="/images/as1.png" alt="Portfolio 2026" className={styles.left} />
      <img src="/images/topleftbar.png" alt="Nav actions" className={styles.right} />
    </nav>
  )
}
