import { createSlice } from '@reduxjs/toolkit';

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    compressedImages: [],
  },
  reducers: {
    setCompressedImages: (state, action) => {
      state.compressedImages = action.payload;
    },
    removeCompressedImage: (state, action) => {
      state.compressedImages.splice(action.payload, 1);
    },
  },
});

export const { setCompressedImages, removeCompressedImage } = imagesSlice.actions;

export default imagesSlice.reducer;