import styles from './PaymentOptions.module.css';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import paypal from '../../../../assets/checkout/paypal.svg';
import mastercard from '../../../../assets/checkout/mastercard.svg';
import visa from '../../../../assets/checkout/visa.svg';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const cards = [
  { name: 'Jane Doe', number: 1111222233334444, cvv: 123, expiryDate: 11/22 },
  { name: 'John Doe', number: 1111222233334444, cvv: 123, expiryDate: 11/22 },
  { name: 'Jane Flow', number: 1111222233334444, cvv: 123, expiryDate: 11/22 },
  { name: 'Jake Slow', number: 1111222233334444, cvv: 123, expiryDate: 11/22 },
]

export default function PaymentOptions() {
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [selectedCard, setSelectedCard] = useState(0);

  const selectID = 'select-id';
  const selectLabelID = 'select-label-id';

  const newCardBtn = {
    color: '#6500C9',
    textTransform: 'none',
    fontSize: '1.4rem',
    fontWeight: 700,
    marginTop: '2.4rem'
  }

  const menuItemStyle = {
    height: '4.8rem',
    fontSize: '1.4rem',
  }

  function onSelectPayment(index) {
    setPaymentMethod(index);
  }

  function onSelectCard(event) {
    setSelectedCard(event.target.value);
  }

  function returnMaskedCardName(card) {
    return `**** **** **** ${card.number.toString().slice(12, 17)} - ${card.name}`;
  }

  return (
    <div className={styles.paymentOptions}>
      <p className={styles.header}>Payment options</p>
      <div className={paymentMethod === 0 ? styles.paymentMethodSelected : styles.paymentMethod}>
        <Checkbox size='large' checked={paymentMethod === 0} onChange={(_) => onSelectPayment(0)} />
        <div className={styles.detailSection}>
          <p className={styles.type}>Pay with Paypal</p>
          <p className={styles.desc}>Delivered on Monday, August 12</p>
        </div>
        <img className={styles.trailing} src={paypal} alt="paypal payment method pay with paypal" />
      </div>
      <div className={paymentMethod === 1 ? styles.paymentMethodSelected : styles.paymentMethod}>
        <div className={styles.creditCardSelect}>
          <div className={styles.creditCardSelectHeader}>
            <Checkbox size='large' checked={paymentMethod === 1} onChange={(_) => onSelectPayment(1)} />
            <div className={styles.detailSection}>
              <p className={styles.type}>Credit / Debit Card</p>
              <p className={styles.desc}>We support Mastercard, Visa, Discover and Stripe.</p>
            </div>
            <div className={styles.trailing}>
              <img src={mastercard} alt="mastercard card payment method pay with mastercard card" />
              <img src={visa} alt="visa card payment method pay with visa card" />
            </div>
          </div>
        <div className={styles.cardSelectContainer}>
          <FormControl fullWidth>
            <InputLabel id={selectLabelID}>Card</InputLabel>
            <Select
              labelId={selectLabelID}
              id={selectID}
              label="label"
              value={selectedCard}
              displayEmpty
              onChange={onSelectCard}
              style={{ fontSize: '1.4rem' }}>
              {
                cards.map((card, index) => (
                  <MenuItem key={index} style={menuItemStyle} value={index}>{returnMaskedCardName(card)}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
        <Button style={newCardBtn} startIcon={<AddIcon/>}>Add new card</Button>
        </div>
      </div>
      <div className={paymentMethod === 2 ? styles.paymentMethodSelected : styles.paymentMethod}>
        <Checkbox size='large' checked={paymentMethod === 2} onChange={(_) => onSelectPayment(2)} />
        <div className={styles.detailSection}>
          <p className={styles.type}>Cash on Delivery</p>
          <p className={styles.desc}>Pay with cash when your order is delivered.</p>
        </div>
      </div>
    </div>
  )
}