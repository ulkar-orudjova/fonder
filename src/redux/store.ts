import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './slices/productSlice'
import  modalSlice  from './slices/modalSlice'

export const store = configureStore({
  reducer: {
    productSlice: productSlice,
    modalSlice: modalSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch