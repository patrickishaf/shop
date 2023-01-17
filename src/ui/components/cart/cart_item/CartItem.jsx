import styles from './CartItem.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function CartItem({ index }) {
  const { cart } = useSelector(state => state.cart);
  const { products } = useSelector(state => state.products);
  const [quantity, setQuantity] = useState();
  const [numberOfUnitsAvailable, setNumberOfUnitsAvailable] = useState(0);
  const [currentCartItem, setCurrentCartItem] = useState();

  function decrementQty() {
    if (quantity === 1) return;
    setQuantity(quantity - 1)
  }

  function incrementQty() {
    setQuantity(quantity + 1)
  }

  useEffect(() => {
    if (products) {
      setNumberOfUnitsAvailable(products.find(product => product.id === cart.line_items[index].product_id).inventory.available);
    }
  }, [products]);

  useEffect(() => {
    // console.log(cart.line_items[index]);
    setCurrentCartItem(cart.line_items[index]);
  }, [cart]);

  return (currentCartItem && cart && products) && (
    <div className={styles.cartItem}>
      <div className={styles.product}>
        <img src={currentCartItem.image.url} alt="product being purchased in the cart" className={styles.img} />
        <div className={styles.desc}>
          <p className={styles.name}>{currentCartItem.name}</p>
          <div className={styles.attrs}>
            <p className={styles.item}>size: <span className={styles.value}>size</span></p>
            <p className={styles.item}>color: <span className={styles.value}>Red</span></p>
          </div>
        </div>
      </div>
      <div className={styles.price}>
        <p><span className={styles.mobileTag}>price:</span>{currentCartItem.price.formatted_with_symbol}</p>
      </div>
      <div className={styles.quantity}>
        <div className={styles.ctrlWrap}>
          <div className={styles.ctrl}>
            <IconButton onClick={decrementQty} sx={{ width: '16px', height: '16px '}} variant='text'><RemoveIcon/></IconButton>
            <p>{currentCartItem.quantity}</p>
            <IconButton onClick={incrementQty} sx={{ width: '16px', height: '16px '}} variant='text'><AddIcon/></IconButton>
          </div>
          <p className={styles.available}>{`available: ${numberOfUnitsAvailable}`}</p>
        </div>
      </div>
      <div className={styles.totalPrice}>
        <p><span className={styles.mobileTag}>total:</span>{currentCartItem.line_total.formatted_with_symbol}</p>
      </div>
    </div>
  )
}