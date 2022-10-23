import styles from './ProgressBar.module.css';

export default function ProgressBar({ percentage }) {
  return (
    <div className={styles.bg}>
      <div className={styles.indicator} style={{ width: percentage < 100 ? `${percentage}%` : '100%' }}></div>
    </div>
  )
}