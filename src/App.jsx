import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Experience from './components/Experience'
import Contact from './components/Contact'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <SelectedWork />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
