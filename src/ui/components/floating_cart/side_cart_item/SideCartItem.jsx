import styles from './SideCartItem.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';

export default function SideCartItem({ item }) {
  const { img, name, color, size, quantity, available, price, } = item;
  return (
    <div className={styles.sideCartItem}>
      <img src={img} className={styles.img} alt="product" />
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.color}><span className={styles.key}>color:</span>{color}</p>
        <p className={styles.size}><span className={styles.key}>size:</span>{size}</p>
        <p className={styles.price}><span className={styles.key}>price:</span>{price}</p>
      </div>
      <div className={styles.deleteButton}>
        <IconButton>
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </div>
  )
}