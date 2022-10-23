import { useState } from 'react';
import Description from './description/Description';
import styles from './ProductData.module.css';
import Reviews from './reviews/Reviews';

export default function ProductData() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const components = [
    <Description/>,
    <Reviews/>
  ]

  return (
    <div className={styles.productData}>
      <div className={styles.tabHeader}>
        <p 
          className={currentIndex === 0 ? styles.titleActive : styles.title}
          onClick={()=>setCurrentIndex(0)}
          >
          Description
        </p>
        <p
          className={currentIndex === 1 ? styles.titleActive : styles.title}
          onClick={()=>setCurrentIndex(1)}
          >
          Review
        </p>
      </div>
      <div className={styles.tabContent}>
      { components[currentIndex] }
      </div>
    </div>
  );
}