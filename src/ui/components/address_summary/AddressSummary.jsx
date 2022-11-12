import styles from './AddressSummary.module.css';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

export default function AddressSummary() {
  return (
    <div className={styles.addressSummary}>
      <div className={styles.titleRow}>
        <p className={styles.title}>Address</p>
        <Button style={{ color: '#6500C9', fontSize: '1.3rem', fontWeight: 700, lineHeight: '2.2rem', textTransform: 'none' }} startIcon={<EditIcon/>}>Edit</Button>
      </div>
      <div className={styles.detailRow}>
        <p className={styles.name}>Manuel Cooper <span className={styles.addressType}>(Home)</span></p>
        <p className={styles.address}>840 South Summerhouse Ave. Livingston, NJ 07039</p>
        <p className={styles.phone}>(512)588-7852</p>
      </div>
    </div>
  );
}