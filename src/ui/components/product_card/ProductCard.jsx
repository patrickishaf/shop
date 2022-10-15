import styles from './ProductCard.module.css';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';

export default function ProductCard({ product }) {

  return (
    <div className={styles.productCard}>
      <div className={styles.hoverOverlay}></div>
      <img className={styles.img} src={product.img} alt="product for sale on shopping website online" />
      <div className={styles.details}>
        <p className={styles.name}>{product.name}</p>
        <div className={styles.priceRow}>
          <div>
            <AvatarGroup>
            {
              product.colors.map((color, index) => (
                <Avatar key={index} sx={{ bgcolor: color, height: '1.6rem', width: '1.6rem' }}>
                  <div></div>
                </Avatar>
              ))
            }
            </AvatarGroup>
          </div>
          <p className={styles.price}>{product.price}</p>
        </div>
      </div>
    </div>
  )
}