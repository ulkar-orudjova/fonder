import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
  isContactModalOpen: boolean;
}

const initialState: ModalState = {
  isContactModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setIsContactModalOpen: (state, action) => {
      state.isContactModalOpen = action.payload;
    },
   
  },
});

export const { setIsContactModalOpen } = modalSlice.actions;

export default modalSlice.reducer;