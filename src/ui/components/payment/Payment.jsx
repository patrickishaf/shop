import styles from './Payment.module.css';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import PaymentOptions from './payment_options/PaymentOptions';
import DeliveryOptions from './delivery_options/DeliveryOptions';

export default function Payment({ onClickBack }) {
  const [deliveryType, setDeliveryType] = useState(0);

  const backButton = {
    color: '#212B36',
    textTransform: 'none',
    fontSize: '1.4rem',
    fontWeight: 700,
    marginTop: '2.4rem'
  }

  function onClickCheckbox(index) {
    setDeliveryType(index);
  }

  return (
    <div>
      <DeliveryOptions />
      <PaymentOptions />
      <Button style={backButton} startIcon={<KeyboardArrowLeft/>} onClick={onClickBack}>Back</Button>
    </div>
  )
}