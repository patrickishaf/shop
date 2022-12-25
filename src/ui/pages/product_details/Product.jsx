import { useNavigate, useParams } from 'react-router-dom';
import styles from './Product.module.css';
import { useState } from 'react';

import original from '../../../assets/product/original.svg';
import replacement from '../../../assets/product/replacement.svg';
import warranty from '../../../assets/product/warranty.svg';

import * as RouteNames from '../../../navigation/route_names';

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
import ImgSelector from '../../components/img_selector/ImgSelector';
import Warranty from '../../components/warranty/Warranty';
import ProductData from '../../components/product_data/ProductData';
import { useDispatch, useSelector } from 'react-redux';
import FetchStates from '../../../utils/fetchstates';
import { useEffect } from 'react';
import { fetchProducts } from '../../../features/products/slice';
import { addToCart, fetchCart } from '../../../features/cart/slice';
import Notification from '../../../features/app/notification';

const colors = ['#D0F2FF', '#54D62C', '#00AB55', '#FFC107', '#1890FF', '#04297A'];

export default function Product() {
  const navigateTo = useNavigate();
  const { id: index } = useParams();
  const [size, setSize] = useState(10);
  const [quantity, setQuantity] = useState(1);

  const { status, products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const warrantyItems = [
    { icon: original, title: '100% Original', desc: 'Chocolate bar candy canes ice cream toffee cookie halvah.' },
    { icon: replacement, title: '10 Day Replacement', desc: 'Marshmallow biscuit donut dragée fruitcake wafer.' },
    { icon: warranty, title: '1 Year Warranty', desc: 'Cotton candy gingerbread cake I love sugar sweet.' },
  ];

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

  function addThisProductToCart() {
    console.log('product to be added =>', {
      productID: products[index].id,
      quantity,
    });
    dispatch(addToCart({
      productID: products[index].id,
      quantity,
    }));
    dispatch(fetchCart());
  }

  function buyThisProductNow() {
    addThisProductToCart();
    navigateTo(RouteNames.checkout)
  }

  useEffect(() => {
    if (status !== FetchStates.complete) {
      dispatch(fetchProducts());
    }
  }, [status]);

  useEffect(() => {
    const notif = new Notification('success', 'you did it successfully', 2000);
    console.log('notif =>', notif);
  }, []);

  return (
    (status === FetchStates.complete &&  products) && <div className={styles.product}>
      <div className={styles.summaryWrapper}>
        <div className={styles.imgSelector}>
          <ImgSelector images={products[index].assets.map(asset => asset.url)}/>
        </div>
        <div className={styles.summary}>
          <p className={styles.sale}>{products[index].is.sold_out ? 'out of stock' : 'sale'}</p>
          <p className={styles.arrival}>new arrival</p>
          <p className={styles.fullName}>{products[index].name}</p>
          <Rating ratingCount={products[index].extra_fields.stars ?? 4} reviewCount={products[index].extra_fields.reviews ? products[index].extra_fields.reviews.length : '11.7k'}/>
          <p className={styles.price}>
            <span className={styles.canceled}>
              <s>{products[index].price.formatted_with_symbol}</s>
            </span>
            {products[index].discountPrice}
          </p>
          <hr className={styles.divider} />
          <div className={styles.picker}>
            <p className={styles.text}>Color</p>
            <div className={styles.colorCheckboxes}>
            {
              colors.map((color, index) => (
                <div key={index}>
                  <ColorCheckbox color={color} />
                </div>
              ))
            }
            </div>
          </div>
          { products[index].categories.includes('clothing') && (<div className={styles.picker}>
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
          </div>)}
          {products[index].categories.includes('clothing') && (<div className={styles.sizeChartLinkWrap}>
            <p className={styles.sizeChartLink}>Size chart</p>
          </div>)}
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
            <p className={styles.available}>{'Available: ' + products[index].inventory.available}</p>
          </div>
          <hr className={styles.divider} />
          <div className={styles.buttonRow}>
            <Button onClick={() => addThisProductToCart()} sx={{...btn, ...cartBtn}} variant='contained' startIcon={<AddShoppingCartIcon/>}>Add to cart</Button>
            <div className={styles.buttonSpacer}/>
            <Button onClick={() => buyThisProductNow()} sx={{...btn, ...buyBtn}} variant='contained'>Buy now</Button>
          </div>
        </div>
      </div>
      <div className={styles.warrantyWrapper}>
      {
        warrantyItems.map((item, index) => (
          <Warranty key={index} icon={item.icon} title={item.title} desc={item.desc} />
        ))
      }
      </div>
      <ProductData />
    </div>
  )
}