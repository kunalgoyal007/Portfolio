import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import styles from './SelectedWork.module.css'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const PROJECTS = [
  {
    id: 1,
    image: '/images/selectedimage1.jpg',
    title: 'Where Personal Development Meets Organizational Innovation',
    tag: 'Product Design',
    href: '/seletecdwork1.html',
  },
  {
    id: 2,
    image: '/images/selectedimage2.jpg',
    title: 'An Immersive Ecommerce Experience Inspired by Indian Artistry',
    tag: 'UX Design',
    href: '/selectedwork2.html',
  },
  {
    id: 3,
    image: '/images/selectedimage3.jpg',
    title: 'Designing an Immersive Editorial Platform for Music Discovery & Storytelling',
    tag: 'UI Design',
    href: '/selectedwork3.html',
  },
  {
    id: 4,
    image: '/images/selectedimage4.jpg',
    title: 'Enterprise Dashboard Redesign — Simplifying Complex Workflows',
    tag: 'Enterprise UX',
    href: '/selectedwork4.html',
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

function ProjectCard({ project }) {
  const ref = useRef(null)

  // Track this card's progress through the viewport: 0 as it enters from the
  // bottom, 1 once it has settled near the top third of the screen.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.35'],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  })

  const y = useTransform(progress, [0, 1], [80, 0])
  const scale = useTransform(progress, [0, 1], [0.92, 1])
  const opacity = useTransform(progress, [0, 0.6], [0, 1])

  const CardTag = project.href ? motion.a : motion.div
  const linkProps = project.href
    ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.div ref={ref} style={{ y, scale, opacity }}>
      <CardTag
        className={styles.card}
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        {...linkProps}
      >
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
      </CardTag>
    </motion.div>
  )
}

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
        <motion.div
          className={styles.leftCol}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.h2 className={styles.heading} variants={fadeUp}>
            Selected Work
          </motion.h2>
          <motion.p className={styles.description} variants={fadeUp}>
            Two and a half years of asking &ldquo;why does this exist?&rdquo; before
            &ldquo;how should it look?&rdquo; — a few of the projects that made me a
            sharper designer.
          </motion.p>
        </motion.div>

        {/* RIGHT — cards */}
        <div className={styles.rightCol}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
