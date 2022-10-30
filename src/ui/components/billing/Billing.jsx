import styles from './Billing.module.css';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import AddIcon from '@mui/icons-material/Add';
import addresses from './addresses';
import { useState } from 'react';
import NewAddress from '../new_address/NewAddress';


export default function Billing({ onClickBack, onDone }) {
  const [showModal, setShowModal] = useState(false);

  const deleteBtn = {
    borderColor: 'rgba(145, 158, 171, 0.32)',
    color: '#212B36',
    textTransform: 'capitalize',
    marginRight: '0.8rem',
    borderRadius: '0.8rem',
    fontWeight: 700,
    fontSize: '1.3rem'
  }

  const deliverBtn = {
    borderColor: 'rgba(101, 0, 201, 0.48)',
    color: '#6500C9',
    textTransform: 'none',
    marginRight: '0.8rem',
    borderRadius: '0.8rem',
    fontWeight: 700,
    fontSize: '1.3rem'
  }

  const backBtn = {
    color: '#212B36',
    textTransform: 'none',
    fontSize: '1.4rem',
    fontWeight: 700,
  }

  const newAddressBtn = {
    color: '#6500C9',
    textTransform: 'none',
    fontSize: '1.4rem',
    fontWeight: 700,
  }

  return (
    <div className={styles.billing}>
      { showModal && <NewAddress dismissHandler={()=>setShowModal(false)} /> }
      <div className={styles.addressList}>
      {
        addresses.map((address, index) => (
          <div className={styles.addressCard} key={index}>
            <p className={styles.name}>
              {address.name}
              <span className={styles.place}>
                {`(${address.place})`}
              </span> 
              {
                address.default === true && (<span className={styles.default}>Default</span>)
              } 
            </p>
            <p className={styles.address}>{address.address}</p>
            <div className={styles.actions}>
              <p className={styles.phone}>{address.phone}</p>
              <div className={styles.btnRow}>
                {
                  !address.default && <Button style={deleteBtn} variant='outlined'>Delete</Button>
                }
                <Button style={deliverBtn} variant='outlined' onClick={onDone}>Deliver to this Address</Button>
              </div>
              
            </div>
          </div>
        ))
      }
      </div>
      <div className={styles.bottomBtns}>
        <Button style={backBtn} startIcon={<KeyboardArrowLeft/>} onClick={onClickBack}>Back</Button>
        <Button style={newAddressBtn} startIcon={<AddIcon/>} onClick={()=>setShowModal(true)}>Add new address</Button>
      </div>
    </div>
  )
}