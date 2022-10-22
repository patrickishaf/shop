import styles from './Rating.module.css';
import star from '../../../assets/product/star.svg';
import disabled from '../../../assets/product/star-disabled.svg';

export default function Rating({ ratingCount, reviewCount}) {

  function createStars(number) {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i > number ) {
        stars.push(<img key={i} src={disabled} alt="product img" />);
      } else {
        stars.push(<img key={i} src={star} alt="product img" />);
      }
    }
    return stars;
  }

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>
      {
        createStars(ratingCount)
      }
      </div>
      <p className={styles.reviewCount}>{`(${reviewCount}reviews)`}</p>
    </div>
  );
}