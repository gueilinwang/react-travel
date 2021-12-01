import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
interface IProductSearchState {
  isLoading: boolean
  data: any
  error: string | null
  pagination: any
}

const initialState: IProductSearchState = {
  isLoading: true,
  data: null,
  error: null,
  pagination: null,
}
export const getProductSearch = createAsyncThunk(
  "productSearch/getProductSearch",
  async (
    paramaters: {
      keyword: string
      nextPage: number | string
      pageSize: number | string
    },
    thunkAPI
  ) => {
    let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`
    if (paramaters.keyword) {
      url += `&keyword=${paramaters.keyword}`
    }
    const respoense = await axios.get(url)
    return {
      data: respoense.data,
      pagination: JSON.parse(respoense.headers["x-pagination"]),
    }
  }
)

const productSearchSlice = createSlice({
  name: "productSearch",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductSearch.pending.type]: (state) => {
      state.isLoading = true
    },
    [getProductSearch.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.data = action.payload.data
      state.pagination = action.payload.pagination
    },
    [getProductSearch.rejected.type]: (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    },
  },
})
export default productSearchSlice.reducer
