import { useState } from 'react';
import styles from './ImgSelector.module.css';

export default function ImgSelector({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgList = [ ...images ];

  function createImages(items) {
    const images = [];
    for (let i = 0; i < items.length; i++) {
      images.push(
        <img
          key={i}
          className={currentIndex === i ? styles.imgBtnSelected : styles.imgBtn}
          onClick={() => setCurrentIndex(i)}
          src={imgList[i]}
          alt="product"
        />
      );
    }
    return images;
  }

  return (
    <div className={styles.imgSelector}>
      <img className={styles.selectedImg} src={images[currentIndex]} alt="display item to buy" />
      <div className={styles.imgBtns}>
        <div className={styles.imgBtnsChild}>
        { createImages(images) }
        </div>
      </div>
    </div>
  );
}