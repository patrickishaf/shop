import { useId, useState } from 'react';
import StarSelect from '../star_select/StarSelect';
import styles from './AddReview.module.css';
import Button from '@mui/material/Button';

export default function AddReview() {
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function clearTextFields() {
    setReview('');
    setName('');
    setEmail('');
  }

  return (
    <div className={styles.addReviewForm}>
      <p className={styles.header}>Add Review</p>
      <div className={styles.subtitleWrap}>
        <p className={styles.subtitle}>Your review about this product: </p>
        <StarSelect count={0} />
      </div>
      <textarea onChange={(e)=>setReview(e.target.value)} type="text" placeholder='Review *' id={styles.reviewInput} className={styles.input} value={review} />
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name *' className={styles.input} value={name} />
      <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email *' className={styles.input} value={email} />
      <div className={styles.buttonWrap}>
        <Button onClick={clearTextFields} variant='outlined' style={{ border: 'solid 1px rgba(145, 158, 171, 0.32)', borderRadius: '8px'}}>
          <p className={styles.cancelButtonText}>Cancel</p>
        </Button>
        <Button variant='contained' style={{ backgroundColor: '#00AB55', borderRadius: '0.8rem', marginLeft: '1.2rem' }}>
          <p className={styles.postReviewText}>Post review</p>
        </Button>
      </div>
    </div>
  )
}