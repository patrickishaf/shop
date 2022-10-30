import styles from './Cart.module.css';
import CartItem from './cart_item/CartItem';
import data from './data';

export default function Cart() {
  return (
    <div className={styles.cartWrap}>
      <p className={styles.header}>Cart</p>
      <div className={styles.tableHeader}>
        <p className={styles.product}>Product</p>
        <p className={styles.price}>Price</p>
        <p className={styles.quantity}>Quantity</p>
        <p className={styles.totalPrice}>Total Price</p>
      </div>
      {
        data.map((item, index) => (
          <CartItem key={index} item={item} />
        ))
      }
    </div>
  )
}