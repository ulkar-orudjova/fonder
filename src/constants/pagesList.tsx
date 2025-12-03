import type { ReactNode } from "react";
import NotFound from "../Modules/Additionals/View/NotFound";
import Home from "../Modules/Home/View/Home";
import Shop from "../Modules/Solutions/View/Shop";
import Work from "../Modules/Work/View/Work";
import ShopDetails from "../Modules/Solutions/View/ShopDetails";
import Cart from "../Modules/Cart/View/Cart";
import Successful from "../Modules/Cart/View/Successful";

interface IPages {
  id: string;
  name: string;
  path: string;
  element: ReactNode;
  is_visible: boolean;
}

const pages: IPages[] = [
  {
    id: "home",
    name: "Home",
    path: "/",
    element: <Home />,
    is_visible: true,
  },
  {
    id: "shop",
    name: "Shop",
    path: "/shop",
    element: <Shop />,
    is_visible: true,
  },
  {
    id: "shop-details",
    name: "Shop Details",
    path: "/shop-details/:id",
    element: <ShopDetails />,
    is_visible: true,
  },
  {
    id: "work",
    name: "Work",
    path: "/work",
    element: <Work />,
    is_visible: true,
  },
  {
    id: "cart",
    name: "Cart",
    path: "/cart",
    element: <Cart />,
    is_visible: true,
  },
  {
    id: "success",
    name: "Successful",
    path: "/success",
    element: <Successful/>,
    is_visible: true,
  },
  {
    id: "not-found",
    name: "Not Found",
    path: "*",
    element: <NotFound />,
    is_visible: true,
  },
];

export default pages;
