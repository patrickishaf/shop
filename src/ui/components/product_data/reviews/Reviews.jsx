import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import ProgressBar from '../../progress_bar/ProgressBar';
import Stars from '../../stars/Stars';
import styles from './Reviews.module.css';
import AddReview from '../../add_review/AddReview';
import Comments from '../../comments/Comments';

export default function Reviews() {
  const ratingData = [
    { ratingCount: 5, progress: 100, reviewCount: 35.74},
    { ratingCount: 4, progress: 80, reviewCount: 79.41},
    { ratingCount: 3, progress: 60, reviewCount: 60.69},
    { ratingCount: 2, progress: 40, reviewCount: 79.73},
    { ratingCount: 1, progress: 20, reviewCount: 52.53},
  ]
  return (
    <div className={styles.reviews}>
      <div className={styles.ratingsSummary}>
        <div className={styles.averageRating}>
          <p className={styles.averageRatingTitle}>Average rating</p>
          <h1 className={styles.ratingFraction}>4/5</h1>
          <Stars count={4} />
          <p className={styles.reviewsCount}>(8.24k reviews)</p>
        </div>
        <div className={styles.stars}>
        {
          ratingData.map((item, index) => (
            <div key={index} className={styles.progressBarWrap}>
              <p className={styles.ratingCount}>{`${item.ratingCount}Star`}</p>
              <ProgressBar percentage={item.progress} />
              <p className={styles.reviewCount}>{item.reviewCount + 'k'}</p>
            </div>
          ))
        }
        </div>
        <div className={styles.writeReview}>
          <Button style={{ border: 'solid 1px #00AB55', borderRadius: '0.8rem' }} variant='outlined' startIcon={<CreateIcon style={{ color: '#00AB55' }}/>}>
            <p className={styles.btnText}>Write Your Review</p>
          </Button>
        </div>
      </div>
      <div className={styles.addReviewWrap}>
        <AddReview />
      </div>
      <div className={styles.commentsWrap}>
        <Comments/>
      </div>
    </div>
  )
}