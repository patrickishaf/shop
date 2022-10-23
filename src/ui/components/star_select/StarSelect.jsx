import styles from './StarSelect.module.css';
import star from '../../../assets/product/star.svg';
import disabled from '../../../assets/product/star-disabled.svg';
import { useState } from 'react';

export default function StarSelect() {
  const [numberOfStars, setNumberOfStars] = useState(0);

  function createStars(number) {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i > number ) {
        stars.push(<img key={i} className={styles.starImg} src={disabled} alt="product img" onClick={()=>setNumberOfStars(i)} />);
      } else {
        stars.push(<img key={i} className={styles.starImg} src={star} alt="product img" onClick={()=>setNumberOfStars(i)} />);
      }
    }
    return stars;
  }

  return (
    <div className={styles.rating}>
    {
      createStars(numberOfStars)
    }
    </div>
  )
}