import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import Router from "./navigation/router";
import FloatingCart from "./ui/components/floating_cart/FloatingCart";
import { fetchProducts } from "./features/products/slice";
import { fetchCartFromServer } from "./store/CartSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCartFromServer());
  }, []);

  return (
    <BrowserRouter>
      <FloatingCart />
      <Router/>
    </BrowserRouter>
  );
}
