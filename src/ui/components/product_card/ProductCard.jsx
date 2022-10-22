import styles from './ProductCard.module.css';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import * as RouteNames from '../../../navigation/route_names';

export default function ProductCard({ product }) {
  const navigateTo = useNavigate();

  return (
    <div className={styles.productCard} onClick={() => navigateTo(`${RouteNames.product}/${product.id}`)}>
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