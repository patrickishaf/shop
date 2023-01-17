import AppBar from "../../components/appbar/AppBar";
import ProductsGrid from "../../components/products_grid/ProductsGrid";
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <AppBar/>
      <div className={styles.home}>
        <ProductsGrid />
      </div>
    </div>
  );
}