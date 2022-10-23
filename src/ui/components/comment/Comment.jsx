import Stars from '../stars/Stars';
import styles from './Comment.module.css';
import original from '../../../assets/product/original.svg';
import { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';

export default function Comment({ item }) {
  const { avatar, name, date, stars, verified, comment } = item;
  const [ isHelpful, setIsHelpful ] = useState(false);

  function toggleIsHelpful(e) {
    setIsHelpful((value) => !value);
  }

  function IsHelpful() {
    return (
      <div className={styles.survey}>
        <Button onClick={toggleIsHelpful} startIcon={<DoneIcon style={{ color: '#212B36' }} />}>
          <p className={styles.trailingText}>Helpful(234)</p>
        </Button>
      </div>
    )
  }

  function HelpfulnessSurvey () {
    return (
      <div className={styles.survey}>
        <p className={styles.surveyLeading}>Was this review helpful to you?</p>
        <Button onClick={toggleIsHelpful} startIcon={<ThumbUpIcon style={{ color: '#212B36' }}/>}>
          <p className={styles.trailingText}>Thank(234)</p>
        </Button>
      </div>
    )
  }

  return (
    <div className={styles.comment}>
      <div className={styles.leading}>
        <img className={styles.avatar} src={avatar} alt="comment commenter" />
        <div className={styles.userDetails}>
          <p className={styles.name}>{name}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
      <div className={styles.commentDetails}>
        <Stars count={stars} />
        { 
          verified && <div className={styles.verifiedPurchase}>
            <img src={original} className={styles.verifiedImg} alt="verified customer purchase" />
            <p className={styles.verifiedText}>Verified purchase</p>
          </div>
        }
        <p className={styles.commentText}>{comment}</p>
        {
          isHelpful ? <IsHelpful /> : <HelpfulnessSurvey />
        }
      </div>
    </div>
  );
}