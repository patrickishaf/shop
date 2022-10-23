import styles from './Comments.module.css';
import comment1 from '../../../assets/product/comment1.svg';
import comment2 from '../../../assets/product/comment2.svg';
import comment3 from '../../../assets/product/comment3.svg';
import comment4 from '../../../assets/product/comment4.svg';
import Comment from '../comment/Comment';
import PageSelector from '../page_selector/PageSelector';

export default function Comments() {
  const comments = [
    {
      avatar: comment1,
      name: 'Ashish Asharaful',
      comment: 'Good Looking.........',
      stars: 5,
      verified: true,
      date: '14 Nov 2020'
    },
    {
      avatar: comment2,
      name: 'Farokh Hashemi',
      comment: 'Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the ',
      stars: 4,
      verified: true,
      date: '14 Nov 2020'
    },
    {
      avatar: comment3,
      name: 'Ashish Asharaful',
      comment: 'Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the ',
      stars: 3,
      verified: false,
      date: '14 Nov 2020'
    },
    {
      avatar: comment4,
      name: 'Ashish Asharaful',
      comment: 'Very nice ! On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the ',
      stars: 3,
      verified: true,
      date: '14 Nov 2020'
    },
  ]

  return (
    <div className={styles.comments}>
      {
        comments.map((comment, index) => (
          <Comment key={index} item={comment} />
        ))
      }
      <div className={styles.pageSelectorWrap}>
        <PageSelector />
      </div>
    </div>
  )
}