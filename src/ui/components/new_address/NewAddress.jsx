import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { createPortal } from 'react-dom';
import styles from './NewAddress.module.css';

export default function NewAddress({ dismissHandler }) {
  const deliverBtn = {
    marginRight: '1.2rem',
    textTransform: 'none',
    backgroundColor: '#6500C9',
    borderRadius: '0.8rem',
    fontSize: '1.4rem',
    fontWeight: 700,
  }

  const cancelBtn = {
    color: '#212B36',
    textTransform: 'none',
    borderRadius: '0.8rem',
    border: 'solid 1px rgba(145, 158, 171, 0.32)',
    fontSize: '1.4rem',
    fontWeight: 700,
  }

  function onDismiss() {
    dismissHandler();
  }

  return createPortal(
    <div className={styles.background}>
      <div className={styles.surface} onClick={onDismiss}></div>
      <div className={styles.modal} onClick={null}>
        <div className={styles.form}>
          <p className={styles.header}>Add new address</p>
          <div className={styles.radioGroup}>
            <div className={styles.radioPair}>
              <input type="radio" name="place" id="home" value="home" />
              <label htmlFor="home">Home</label>
            </div>
            <div className={styles.radioPair}>
              <input type="radio" name="place" id="office" value="office" />
              <label htmlFor="office">Office</label>
            </div>
          </div>
          <div className={styles.inputRow}>
            <input className={styles.textInput} type="text" placeholder='Full name' />
            <input className={styles.textInput} type="text" placeholder='Phone' />
          </div>
          <input className={styles.textInput} type="text" placeholder="Address" />
          <div className={styles.inputRow}>
            <input className={styles.textInput} type="text" placeholder='Town / City' />
            <input className={styles.textInput} type="text" placeholder='State' />
            <input className={styles.textInput} type="text" placeholder='Zip / Postal Code' />
          </div>
          <input className={styles.textInput} type="text" placeholder="Country" />
          <FormGroup>
            <FormControlLabel control={<Checkbox style={{ fontSize: '1.4rem'}} />} label="Use this address as default." />
          </FormGroup>
        </div>
        <hr />
        <div className={styles.btnRow}>
          <Button variant='contained' style={deliverBtn}>Deliver to this Address</Button>
          <Button variant='outlined' style={cancelBtn} onClick={onDismiss}>Cancel</Button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}