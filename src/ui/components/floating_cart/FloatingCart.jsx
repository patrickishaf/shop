import styles from './FloatingCart.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import shoe3 from '../../../assets/products/shoe3.svg';
import shoe6 from '../../../assets/products/shoe6.svg';
import shoe7 from '../../../assets/products/shoe7.svg';

import SideCartItem from './side_cart_item/SideCartItem';
import * as RouteNames from '../../../navigation/route_names';
import { useSelector } from 'react-redux';

export default function FloatingCart() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigateTo = useNavigate();
  const { cart } = useSelector(state => state.cart);

  const cartItems = [
    {
      img: shoe3,
      name: 'Red Lipstick',
      color: 'White',
      size: 9,
      quantity: 1,
      available: 2,
      price: 69.07,
    },
    {
      img: shoe6,
      name: 'Red Lipstick',
      color: 'White',
      size: 9,
      quantity: 1,
      available: 2,
      price: 69.07,
    },
    {
      img: shoe7,
      name: 'Red Lipstick',
      color: 'White',
      size: 9,
      quantity: 1,
      available: 2,
      price: 69.07,
    },
  ];

  function onClickViewCart() {
    setIsExpanded(false);
    navigateTo(RouteNames.checkout);
  }

  const cartBtn = {
    textTransform: 'none', height: '4.8rem', width: '100%', fontSize: '1.5rem',
    fontWeight: 700, lineHeight: '2.6rem', borderRadius: '0.8rem', color: '#212B36',
    margin: (window.innerWidth > 430) ? '1.6rem' : 0, mb: '0.4rem', mt: '0.4rem'
  }

  const checkoutBtn = {
    bgcolor: '#FFC107',
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function CollapsedCart() {
    return cart && (
      <div className={styles.floatingCartButtton} onClick={()=>setIsExpanded(true)}>
        <Badge badgeContent={cart.total_items} color="error" max={9}>
          <ShoppingCartIcon style={{ height: '2.4rem', width: '2.4rem' }} />
        </Badge>
      </div>
    )
  }

  function ExpandedCart() {
    return cart && (
      <div className={styles.expandedCartWrap}>
        <div className={styles.closingArea} onClick={()=>setIsExpanded(false)} />
        <div className={styles.expandedCart}>
          <div className={styles.header}>
            <p className={styles.title}>Cart</p>
          </div>
          {
            cart.line_items.map((item, index) => (
              <SideCartItem key={item.id} item={item} index={index} />
            ))
          }
          <div className={styles.btnWrap}>
            <Button onClick={onClickViewCart} sx={cartBtn}>
              <p className={styles.viewCartText}>View Cart</p>
            </Button>
          </div>
          <div className={styles.btnWrap}>
            <Button variant="contained" sx={{ ...cartBtn, ...checkoutBtn }}>
              <p className={styles.checkoutText}>Checkout</p>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return createPortal(
    isExpanded ? <ExpandedCart/> : <CollapsedCart />,
    document.getElementById('portal')
  )
}