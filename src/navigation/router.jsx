import { useRoutes } from "react-router";
import Checkout from "../ui/pages/checkout/Checkout";
import Home from "../ui/pages/home/Home";
import Product from "../ui/pages/product_details/Product";
import * as RouteNames from './route_names';

export default function Router() {
  return useRoutes([
    {
      path: RouteNames.home,
      element: <Home/>,
    },
    {
      path: RouteNames.product + '/:id',
      element: <Product/>
    },
    {
      path: RouteNames.checkout,
      element: <Checkout/>
    }
  ])
}