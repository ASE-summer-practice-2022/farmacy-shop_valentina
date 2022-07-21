import { createContext } from "react";

import CartStore from "./CartStore";
import ProductStore from "./ProductStore";
import UserStore from "./UserStore";

const RootContext = createContext({
  productStore: new ProductStore(),
  userStore: new UserStore(),
  cartStore: new CartStore(),
});

export default RootContext;
