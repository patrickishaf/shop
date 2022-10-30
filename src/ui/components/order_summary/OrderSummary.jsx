import Button from '@mui/material/Button';
import { useState } from 'react';
import styles from './OrderSummary.module.css';

export default function OrderSummary() {
  const [voucher, setVoucher] = useState('');
  
  function redeemVoucher(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.orderSummary}>
      <p className={styles.header}>Order Summary</p>
      <div className={styles.dataRow}>
        <p className={styles.prop}>Sub Total</p>
        <p className={styles.value}>$5.79</p>
      </div>
      <div className={styles.dataRow}>
        <p className={styles.prop}>Discount</p>
        <p className={styles.value}>-</p>
      </div>
      <div className={styles.dataRow}>
        <p className={styles.prop}>Shipping</p>
        <p className={styles.value}>-</p>
      </div>
      <hr noshade />
      <div className={styles.totalRow}>
        <p className={styles.prop}>Total</p>
        <p className={styles.value}>$207.21</p>
      </div>
      <p className={styles.hint}>(VAT included if applicable)</p>
      <div className={styles.voucher}>
        <form onSubmit={redeemVoucher}>
          <input onChange={(e)=>setVoucher(e.target.value)} value={voucher} type="text" placeholder='Discount codes / Gifts' />
          <Button style={{ textTransform: 'none', fontSize: '1.4rem', color: '#6500C9', padding: '0.6rem 1.5rem' }} variant='text'>Apply</Button>
        </form>
      </div>
    </div>
  );
}