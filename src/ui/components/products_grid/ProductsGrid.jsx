import Grid from "@mui/material/Grid";
import ProductCard from "../product_card/ProductCard";
import './ProductsGrid.css';

export default function ProductsGrid({ products }) {
  return (
    <Grid container spacing={"2.4rem"}>
    {
      products.map((product, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))
    }
    </Grid>
  )
}