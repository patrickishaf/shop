import { useParams } from 'react-router-dom';
import styles from './Product.module.css';
import { products } from '../../../data/data';
import shoe1 from '../../../assets/products/shoe1.svg';
import shoe2 from '../../../assets/products/shoe2.svg';
import shoe3 from '../../../assets/products/shoe3.svg';
import shoe4 from '../../../assets/products/shoe4.svg';
import shoe5 from '../../../assets/products/shoe5.svg';
import Rating from '../../components/rating/Rating';
import ColorCheckbox from '../../components/color_check/ColorCheckbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';
import ImgSelector from '../../components/img_selector/ImgSelector';

export default function Product() {
  const { id } = useParams();
  const currentProduct = products[id];
  const [size, setSize] = useState(10);
  const [quantity, setQuantity] = useState(1);

  function handleChange(event) {
    setSize(event.target.value);
  }

  function decrementQty() {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity-1);
  }

  function incrementQty() {
    setQuantity(quantity+1);
  }

  const btn = {
    textTransform: 'none', height: '4.8rem', width: '100%', fontSize: '1.5rem',
    fontWeight: 700, lineHeight: '2.6rem', borderRadius: '0.8rem'
  }

  const cartBtn = {
    bgcolor: '#FFC107', color: '#212B36',
    '&:hover': {
      bgcolor: 'white'
    }
  }

  const buyBtn = {
    bgcolor: '#00AB55',
    '&:hover': {
      bgcolor: 'grey'
    }
  }

  return (
    <div className={styles.product}>
      <div className={styles.summaryWrapper}>
        <div className={styles.imgSelector}>
          <ImgSelector images={[shoe1, shoe2, shoe3, shoe4, shoe5]}/>
        </div>
        <div className={styles.summary}>
          <p className={styles.sale}>{currentProduct.sale}</p>
          <p className={styles.arrival}>{currentProduct.arrival}</p>
          <p className={styles.fullName}>{currentProduct.fullName}</p>
          <Rating ratingCount={currentProduct.stars} reviewCount={currentProduct.reviewCount}/>
          <p className={styles.price}>
            <span className={styles.canceled}>
              <s>{'$' + currentProduct.normalPrice}</s>
            </span>
            {'$' + currentProduct.discountPrice}
          </p>
          <hr className={styles.divider} />
          <div className={styles.picker}>
            <p className={styles.text}>Color</p>
            <div className={styles.colorCheckboxes}>
            {
              currentProduct.colors.map((color, index) => (
                <div key={index}>
                  <ColorCheckbox color={color} />
                </div>
              ))
            }
            </div>
          </div>
          <div className={styles.picker}>
            <p className={styles.text}>Size</p>
            <FormControl sx={{ m: 1, minWidth: '190px' }} size="small">
              <Select
                labelId="choose-your-size"
                id="choose-your-size"
                value={size}
                onChange={handleChange}
                sx={{ marginRight: '0px'}}
              >
                <MenuItem key={1} value={10}>Ten</MenuItem>
                <MenuItem key={2} value={20}>Twenty</MenuItem>
                <MenuItem key={3} value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={styles.sizeChartLinkWrap}>
            <p className={styles.sizeChartLink}>Size chart</p>
          </div>
          <div className={styles.picker}>
            <p className={styles.text}>Quantity</p>
            <div className={styles.quantitySelect}>
              <div className={styles.colorCheckboxes}>
                <IconButton onClick={decrementQty} sx={{ width: '16px', height: '16px '}} variant='text'><RemoveIcon/></IconButton>
                <p>{quantity}</p>
                <IconButton onClick={incrementQty} sx={{ width: '16px', height: '16px '}} variant='text'><AddIcon/></IconButton>
              </div>
            </div>
          </div>
          <div className={styles.sizeChartLinkWrap}>
            <p className={styles.available}>{'Available: ' + currentProduct.quantity}</p>
          </div>
          <hr className={styles.divider} />
          <div className={styles.buttonRow}>
            <Button sx={{...btn, ...cartBtn}} variant='contained' startIcon={<AddShoppingCartIcon/>}>Add to cart</Button>
            <div className={styles.buttonSpacer}/>
            <Button sx={{...btn, ...buyBtn}} variant='contained'>Buy now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}