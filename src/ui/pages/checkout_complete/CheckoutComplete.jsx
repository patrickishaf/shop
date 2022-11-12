import styles from './CheckoutComplete.module.css';
import ordercomplete from '../../../assets/checkout/ordercomplete.svg';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useNavigate } from 'react-router-dom';
import { home } from '../../../navigation/route_names';

export default function CheckoutComplete() {
  const navigateTo = useNavigate();

  const leftBtn = {
    borderColor: 'rgba(145, 158, 171, 0.32)',
    borderRadius: '0.8rem',
    color: '#212B36',
    textTransform: 'none',
    fontSize: '1.4rem',
    fontWeight: 700,
    lineHeight: '2.4rem'
  }

  const rightBtn = {
    backgroundColor: '#6500C9',
    borderRadius: '0.8rem',
    color: '#FFFFFF',
    textTransform: 'none',
    fontSize: '1.4rem',
    fontWeight: 700,
    lineHeight: '2.4rem'
  }

  function goBackToHomePage() {
    navigateTo(home);
  }

  return (
    <div className={styles.pageWrap}>
      <div className={styles.pageMain}>
        <div className={styles.pageContent}>
          <p className={styles.title}>Thank you for buying from us</p>
          <img className={styles.img} src={ordercomplete} alt="order complete" />
          <p className={styles.formalities}>Thanks for placing order <span className={styles.orderNumber}>01dc1370-3df6-11eb-b378-0242ac130002</span></p>
          <p className={styles.formalities}>We will send you a notification within 5 days when it ships.</p>
          <p className={styles.formalities}>If you have any question or queries, please contact us.</p>
          <p className={styles.formalities}>All the best.</p>
          <hr className={styles.divider} />
          <div className={styles.btnRow}>
            <Button startIcon={<KeyboardArrowLeft/>} variant='outlined' style={leftBtn} onClick={goBackToHomePage}>Continue Shopping</Button>
            <Button startIcon={<FileDownloadIcon/>} variant='contained' style={rightBtn}>Download as PDF</Button>
          </div>
        </div>
      </div>
    </div>
  );
}