import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
interface IProductDetailState {
  isLoading: boolean
  data: any
  error: string | null
}

const initialState: IProductDetailState = {
  isLoading: true,
  data: null,
  error: null,
}
export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`
    )
    return data
  }
)

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      state.isLoading = true
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    [getProductDetail.rejected.type]: (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    },
  },
})
export default productDetailSlice.reducer
