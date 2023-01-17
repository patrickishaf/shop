import styles from './SideCartItem.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function SideCartItem({ index }) {
  const { cart } = useSelector(state => state.cart);
  const [cartItem, setCartItem] = useState(undefined);

  useEffect(() => {
    setCartItem(cart.line_items[index])
  }, [cart]);

  return (cart && cartItem) && (
    <div className={styles.sideCartItem}>
      <img src={cartItem.image.url} className={styles.img} alt="product" />
      <div className={styles.details}>
        <p className={styles.name}>{cartItem.name}</p>
        <p className={styles.color}><span className={styles.key}>color:</span>Red</p>
        <p className={styles.size}><span className={styles.key}>quantity:</span>{cartItem.quantity}</p>
        <p className={styles.price}><span className={styles.key}>price:</span>{cartItem.price.formatted_with_symbol}</p>
      </div>
      <div className={styles.deleteButton}>
        <IconButton>
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </div>
  )
}