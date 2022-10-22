import styles from './Warranty.module.css';

export default function Warranty({ icon, title, desc }) {
  return (
    <div className={styles.warranty}>
      <div className={styles.imgWrap}>
        <img src={icon} alt="warranty" />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}