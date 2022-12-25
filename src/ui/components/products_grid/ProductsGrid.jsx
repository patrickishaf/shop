import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import ProductCard from "../product_card/ProductCard";
import './ProductsGrid.css';

export default function ProductsGrid() {
  const { status, products } = useSelector(state => state.products);

  return (
    <Grid container spacing={"2.4rem"}>
    {
      status === 'complete' && products.map((product, index) => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          <ProductCard index={index} />
        </Grid>
      ))
    }
    </Grid>
  )
}