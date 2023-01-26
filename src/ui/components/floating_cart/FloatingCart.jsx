import styles from './FloatingCart.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import SideCartItem from './side_cart_item/SideCartItem';
import * as RouteNames from '../../../navigation/route_names';
import { useSelector } from 'react-redux';

export default function FloatingCart() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigateTo = useNavigate();
  const { cart } = useSelector(state => state.cart);

  function openCheckoutPage() {
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

  function CollapsedCart() {
    return cart && cart.total_items > 0 && (
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
            <Button onClick={openCheckoutPage} variant="contained" sx={{ ...cartBtn, ...checkoutBtn }}>
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