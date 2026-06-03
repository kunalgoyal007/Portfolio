import styles from './Experience.module.css'

const JOBS = [
  {
    company: 'Coreshield Technologies',
    role: 'UI/UX Designer',
    period: 'May 2025 – Present',
  },
  {
    company: 'AV Technosys',
    role: 'UI/UX Designer',
    period: 'August 2025 – May 2025',
  },
  {
    company: 'Futurembbs',
    role: 'UI/UX Designer Intern',
    period: 'March 2024 – May 2024',
  },
  {
    company: 'Progshee technology',
    role: 'UI/UX Designer Intern',
    period: 'August 2023 – December 2023',
  },
]

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Experience (2.5 years)</h2>

        <div className={styles.list}>
          {JOBS.map((job, i) => (
            <div key={i} className={styles.row}>
              <span className={styles.company}>{job.company}</span>
              <div className={styles.meta}>
                <span className={styles.role}>{job.role}</span>
                <span className={styles.period}>{job.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
