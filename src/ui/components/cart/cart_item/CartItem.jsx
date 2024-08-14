/* eslint-disable react-hooks/exhaustive-deps */
import styles from './CartItem.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProductQuantity } from '../../../../store/CartSlice';

class CallbackQueue {
  currentTimeoutID;
  callback;

  addCallback(callback) {
    this.callback = callback;
    this.startExecution();
  }

  startExecution() {
    if (this.currentTimeoutID) {
      clearTimeout(this.currentTimeoutID);
    }
    this.currentTimeoutID = setTimeout(() => {
      this.callback();
      this.currentTimeoutID = null;
    }, 10000);
  }
}

export default function CartItem({ index }) {
  const { cart } = useSelector(state => state.cart);
  const { products } = useSelector(state => state.products);
  const [quantity, setQuantity] = useState(0);
  const [numberOfUnitsAvailable, setNumberOfUnitsAvailable] = useState(0);
  const [currentCartItem, setCurrentCartItem] = useState();
  const dispatch = useDispatch();
  const callbackQueue = new CallbackQueue();

  function decrementQty() {
    // TODO: Show a toast that ask the user if they want to remove the item from the cart
    if (quantity === 1) return;
    setQuantity(quantity - 1)
  }

  function incrementQty() {
    // TODO: Show a toast that notifies a user that they can not exceed the max number of units available
    if (quantity === numberOfUnitsAvailable) return;
    setQuantity((prev) => prev + 1);
  }

  function dispatchQttyChange(itemID, newQuantity) {
    dispatch(changeProductQuantity({ itemID, quantity: newQuantity }));
  }

  useEffect(() => {
    if (products) {
      setNumberOfUnitsAvailable(products.find(product => product.id === cart.line_items[index].product_id).inventory.available);
    }
  }, [products]);

  useEffect(() => {
    if (quantity && currentCartItem && quantity === currentCartItem.quantity) return;
    if (quantity && currentCartItem) {
      callbackQueue.addCallback(() => dispatchQttyChange(currentCartItem.id, quantity));
    }
  }, [quantity]);

  useEffect(() => {
    setCurrentCartItem(cart.line_items[index]);
    setQuantity(cart.line_items[index].quantity);
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
            <p>{quantity}</p>
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