import styles from './CartItem.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';

export default function CartItem({ item }) {
  const { img, name, size, color, price, quantity, available, totalPrice } = item;

  function decrementQty() {}

  function incrementQty() {}

  return (
    <div className={styles.cartItem}>
      <div className={styles.product}>
        <img src={img} alt="product being purchased in the cart" className={styles.img} />
        <div className={styles.desc}>
          <p className={styles.name}>{name}</p>
          <div className={styles.attrs}>
            <p className={styles.item}>size: <span className={styles.value}>{size}</span></p>
            <p className={styles.item}>color: <span className={styles.value}>{color}</span></p>
          </div>
        </div>
      </div>
      <div className={styles.price}>
        <p><span className={styles.mobileTag}>price:</span>{`$${price}`}</p>
      </div>
      <div className={styles.quantity}>
        <div className={styles.ctrlWrap}>
          <div className={styles.ctrl}>
            <IconButton onClick={decrementQty} sx={{ width: '16px', height: '16px '}} variant='text'><RemoveIcon/></IconButton>
            <p>{quantity}</p>
            <IconButton onClick={incrementQty} sx={{ width: '16px', height: '16px '}} variant='text'><AddIcon/></IconButton>
          </div>
          <p className={styles.available}>{`available: ${available}`}</p>
        </div>
      </div>
      <div className={styles.totalPrice}>
        <p><span className={styles.mobileTag}>total:</span>{`$${totalPrice}`}</p>
      </div>
    </div>
  )
}