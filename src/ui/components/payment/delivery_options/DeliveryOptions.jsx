import { useState } from 'react';
import styles from './DeliveryOptions.module.css';
import Checkbox from '@mui/material/Checkbox';

export default function DeliveryOptions() {
  const [deliveryType, setDeliveryType] = useState(0);

  function onClickCheckbox(index) {
    setDeliveryType(index);
  }

  return (
    <div className={styles.deliveryOptions}>
      <p className={styles.header}>Delivery options</p>
      <div className={styles.deliveryTypes}>
        <div className={deliveryType === 0 ? styles.deliveryOptionSelected : styles.deliveryOption}>
          <Checkbox size='large' checked={deliveryType === 0} onChange={(_) => onClickCheckbox(0)} />
          <div className={styles.detailSection}>
            <p className={styles.type}>Standard delivery (Free)</p>
            <p className={styles.date}>Delivered on Monday, August 12</p>
          </div>
        </div>
        <div className={deliveryType === 1 ? styles.deliveryOptionSelected : styles.deliveryOption}>
          <Checkbox size='large' checked={deliveryType === 1} onChange={(_) => onClickCheckbox(1)} />
          <div className={styles.detailSection}>
            <p className={styles.type}>Fast delivery ($2.00)</p>
            <p className={styles.date}>Delivered on Monday, August 5</p>
          </div>
        </div>
      </div>
    </div>
  )
}