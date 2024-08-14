import styles from './ProductCard.module.css';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import * as RouteNames from '../../../navigation/route_names';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProductWithIndex } from '../../../features/products/slice';
import uuid from 'react-uuid';


const colors = ['#D0F2FF', '#54D62C'];

export default function ProductCard({ index }) {
  const navigateTo = useNavigate();
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  function onClickProduct() {
    dispatch(setSelectedProductWithIndex(index));
    navigateTo(`${RouteNames.product}/${index}`);
  }

  return (
    <div className={styles.productCard} onClick={onClickProduct}>
      <div className={styles.hoverOverlay}></div>
      <img className={styles.img} src={products[index].image.url} alt="product for sale on shopping website online" />
      <div className={styles.details}>
        <p className={styles.name}>{products[index].name}</p>
        <div className={styles.priceRow}>
          <div>
            <AvatarGroup>
            {
              colors.map((color) => (
                <Avatar key={uuid()} sx={{ bgcolor: color, height: '1.6rem', width: '1.6rem' }}>
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