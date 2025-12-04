import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  SetProductCountEnum,
  type IProduct,
  type IProductParams,
} from "../../Modules/Solutions/Models/ShopModel";

export interface IProductState {
  cart: IProduct[];
  cartCount: number;
  totalPrice: number;
}

//localStorage

const getInitialCart = (): IProduct[] => {
  const savedCart = localStorage.getItem("shopCart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialCart = getInitialCart();

const initialState: IProductState = {
  cart: initialCart,
  cartCount: initialCart.reduce((acc, curr) => acc + (curr.quantity || 0), 0),
  totalPrice: initialCart.reduce(
    (acc, curr) => acc + curr.price * (curr.quantity || 0),
    0
  ),
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    calculateCartCount: (state) => {
      state.cartCount = state.cart.reduce(
        (acc, curr) => acc + (curr.quantity || 0),
        0
      );
    },
    calculateCartTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce(
        (acc, curr) => acc + curr.price * (curr.quantity || 0),
        0
      );
      localStorage.setItem("shopCart", JSON.stringify(state.cart));
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existing) {
        state.cart = state.cart.filter((item) => {
          if (item._id === existing._id && item.quantity) {
            return { ...item, quantity: item.quantity++ };
          } else {
            return item;
          }
        });
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
    },
    setProductCount: (state, action: PayloadAction<IProductParams>) => {
      const findedProduct = state.cart.find(
        (item) => item._id === action.payload.productId
      );
      switch (action.payload.countType) {
        case SetProductCountEnum.INCREMENT:
          state.cart = state.cart.filter((item) => {
            if (item._id === findedProduct?._id && item.quantity) {
              return { ...item, quantity: item.quantity++ };
            } else {
              return item;
            }
          });
          break;
        case SetProductCountEnum.DECREMENT:
          state.cart = state.cart.filter((item) => {
            if (
              item._id === findedProduct?._id &&
              item.quantity &&
              item.quantity > 1
            ) {
              return { ...item, quantity: item.quantity-- };
            } else {
              return item;
            }
          });
          break;
        default:
          console.log("Error");
      }
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
    },
    clearCart: (state) => {
      state.cart = [];
      productSlice.caseReducers.calculateCartCount(state);
      productSlice.caseReducers.calculateCartTotalPrice(state);
    },
  },
});

export const { addToCart, removeFromCart, setProductCount, clearCart } =
  productSlice.actions;

export default productSlice.reducer;
