import { BrowserRouter } from "react-router-dom";
import Router from "./navigation/router";
import FloatingCart from "./ui/components/floating_cart/FloatingCart";

export default function App() {
  return (
    <BrowserRouter>
      <FloatingCart />
      <Router/>
    </BrowserRouter>
  );
}
