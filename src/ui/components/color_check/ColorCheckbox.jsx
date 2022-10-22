import { useState } from 'react';
import styles from './ColorCheckbox.module.css';
import check from '../../../assets/product/check.svg';

export default function ColorCheckbox({ color }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={checked ? styles.checkboxChecked : styles.checkbox} style={{backgroundColor: color, boxShadow: checked ? `0.4rem 0.4rem 0.8rem 0px ${color}` : 'none'}} onClick={()=>{setChecked(!checked)}}>
    { checked && <img src={check} alt="select color of product" /> }
    </div>
  )
}