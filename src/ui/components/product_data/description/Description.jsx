import styles from './Description.module.css';

export default function Description() {
  return (
    <div className={styles.description}>
    <p className={styles.header}>Specification</p>
    <p className={styles.desc}>Leather panels. Laces. Rounded toe. Rubber sole.</p>
    <p className={styles.header}>Material and washing instructions</p>
    <p className={styles.desc}>
    Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued
    </p>
    </div>
  )
}