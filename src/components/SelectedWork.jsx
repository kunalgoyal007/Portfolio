import styles from './SelectedWork.module.css'

const PROJECTS = [
  {
    id: 1,
    image: '/images/selectedimage1.jpg',
    title: 'Where Personal Development Meets Organizational Innovation',
    tag: 'Product Design',
  },
  {
    id: 2,
    image: '/images/selectedimage2.jpg',
    title: 'An Immersive Ecommerce Experience Inspired by Indian Artistry',
    tag: 'UX Design',
  },
  {
    id: 3,
    image: '/images/selectedimage3.jpg',
    title: 'Designing an Immersive Editorial Platform for Music Discovery & Storytelling',
    tag: 'UI Design',
  },
  {
    id: 4,
    image: '/images/selectedimage3.jpg',
    title: 'Enterprise Dashboard Redesign — Simplifying Complex Workflows',
    tag: 'Enterprise UX',
  },
]

const MARQUEE_ITEMS = [
  'Kunal Goyal',
  'UI UX Designer',
  'Product Designer',
  'Enterprise UX',
  'Workflow Design',
  '0→1 Product Design',
  'Motion Design',
  'Design Systems',
]

export default function SelectedWork() {
  return (
    <section className={styles.section}>
      {/* ── Infinite marquee strip ── */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item}
              <span className={styles.dot}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div className={styles.content}>
        {/* LEFT — sticky title col */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>Selected Work</h2>
          <p className={styles.description}>
            Two and a half years of asking &ldquo;why does this exist?&rdquo; before
            &ldquo;how should it look?&rdquo; — a few of the projects that made me a
            sharper designer.
          </p>
        </div>

        {/* RIGHT — cards */}
        <div className={styles.rightCol}>
          {PROJECTS.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.classList.add(styles.imagePlaceholder)
                  }}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.tag}>{project.tag}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
