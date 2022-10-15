import { useRoutes } from "react-router";
import Home from "../ui/pages/home/Home";
import * as RouteNames from './route_names';

export default function Router() {
  return useRoutes([
    {
      path: RouteNames.home,
      element: <Home/>,
    }
  ])
}