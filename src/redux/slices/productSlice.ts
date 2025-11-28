import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IProduct } from '../../Modules/Solutions/Models/ShopModel'

export interface IProductState {
  cart: IProduct[];
  cartCount: number;
}

const initialState: IProductState = {
 cart:[],
 cartCount: 0,
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    calculateCartCount: (state) => {
        //@ts-ignore
        state.cartCount = state.cart
        .map((item) =>item.quantity)
         //@ts-ignore
        .reduce((acc, curr) => acc + curr, 0);
    },
    addToCart: (state, action: PayloadAction<IProduct>) =>{
        const existing = state.cart.find(
            (item) => item._id === action.payload._id
        );
        if(existing){
            state.cart = state.cart.filter(item =>{
                if(item._id === existing._id && item.quantity){
                    return {...item, quantity: item.quantity ++}
                }else{
                    return item
                }
            })
        }else{
            state.cart = [...state.cart, {...action.payload, quantity: 1}];
        }
    },
    removeFromCart: (state, action:PayloadAction<string>) =>{
        state.cart = state.cart.filter((item) => item._id !== action.payload);
    }
  },
});


export const {addToCart, removeFromCart} = productSlice.actions

export default productSlice.reducer