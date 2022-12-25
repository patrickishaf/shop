import styles from './ProductCard.module.css';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import * as RouteNames from '../../../navigation/route_names';
import { useSelector } from 'react-redux';


const colors = ['#D0F2FF', '#54D62C'];

export default function ProductCard({ index }) {
  const navigateTo = useNavigate();
  const { products } = useSelector(state => state.products);

  return (
    <div className={styles.productCard} onClick={() => navigateTo(`${RouteNames.product}/${index}`)}>
      <div className={styles.hoverOverlay}></div>
      <img className={styles.img} src={products[index].image.url} alt="product for sale on shopping website online" />
      <div className={styles.details}>
        <p className={styles.name}>{products[index].name}</p>
        <div className={styles.priceRow}>
          <div>
            <AvatarGroup>
            {
              colors.map((color, index) => (
                <Avatar key={index} sx={{ bgcolor: color, height: '1.6rem', width: '1.6rem' }}>
                  <div></div>
                </Avatar>
              ))
            }
            </AvatarGroup>
          </div>
          <p className={styles.price}>{products[index].price.formatted_with_symbol}</p>
        </div>
      </div>
    </div>
  )
}