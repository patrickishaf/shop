import styles from './PageSelector.module.css';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';

export default function PageSelector({ numberOfPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  function reduceCurrentPage() {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((value) => value-1);
  }

  function increaseCurrentPage() {
    if (currentPage === numberOfPages) {
      return;
    }
    setCurrentPage((value) => value+1);
  }

  return (
    <div className={styles.pageSelector}>
      <IconButton onClick={reduceCurrentPage}>
        <KeyboardArrowLeftIcon/>
      </IconButton>
      <div className={styles.pageBtnRow}>
      {
        [1,2,3,4,5].map((item, index) => (
          <div key={index} onClick={()=>setCurrentPage(item)} className={item === currentPage ? styles.pageBtnSelected : styles.pageBtn}>{item}</div>
        ))
      }
      </div>
      <IconButton onClick={increaseCurrentPage}>
        <KeyboardArrowRightIcon/>
      </IconButton>
    </div>
  )
}