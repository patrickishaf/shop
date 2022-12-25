import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';
import CartItem from './cart_item/CartItem';
import data from './data';

import { home } from '../../../navigation/route_names';
import { useSelector } from 'react-redux';

export default function Cart() {
  const { cart } = useSelector(state => state.cart);

  const navigateTo = useNavigate();
  const backButton = {
    color: '#212B36',
    textTransform: 'none',
    fontSize: '1.4rem',
    fontWeight: 700,
    marginTop: '2.4rem'
  }

  return (cart && cart.line_items) && (
    <div>
      <div className={styles.cartWrap}>
        <p className={styles.header}>Cart</p>
        <div className={styles.tableHeader}>
          <p className={styles.product}>Product</p>
          <p className={styles.price}>Price</p>
          <p className={styles.quantity}>Quantity</p>
          <p className={styles.totalPrice}>Total Price</p>
        </div>
        {
          cart.line_items.map((item, index) => (
            <CartItem key={item.id} index={index} />
          ))
        }
      </div>
      <Button style={backButton} startIcon={<KeyboardArrowLeft/>} onClick={()=>navigateTo(home)}>Continue Shopping</Button>
    </div>
  )
}