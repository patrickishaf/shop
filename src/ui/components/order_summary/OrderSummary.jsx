/* eslint-disable react-hooks/exhaustive-deps */
import Button from '@mui/material/Button';
import { useState } from 'react';
import styles from './OrderSummary.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FetchStates from '../../../utils/fetchstates';
import { fetchCartFromServer } from '../../../store/CartSlice';

export default function OrderSummary() {
  const [voucher, setVoucher] = useState('');
  const { cart, status } = useSelector(state => state.cart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  
  function redeemVoucher(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (status !== FetchStates.complete) {
      dispatch(fetchCartFromServer());
    }
  }, [status]);

  useEffect(() => {
    if (cart && cart.subtotal) {
      setTotal(cart.subtotal.formatted_with_symbol);
    }
  }, [cart]);

  return cart && (
    <div className={styles.orderSummary}>
      <p className={styles.header}>Order Summary</p>
      <div className={styles.dataRow}>
        <p className={styles.prop}>Sub Total</p>
        <p className={styles.value}>{cart && cart.subtotal && cart.subtotal.formatted_with_symbol}</p>
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
        <p className={styles.value}>{total}</p>
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