import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
interface IUserState {
  isLoading: boolean
  token: string | null
  error: string | null
}

const initialState: IUserState = {
  isLoading: false,
  token: null,
  error: null,
}
export const signIn = createAsyncThunk(
  "user/signIn",
  async (
    paramaters: {
      email: string
      password: string
    },
    thunkAPI
  ) => {
    const { data } = await axios.post(`http://123.56.149.216:8080/auth/login`, {
      email: paramaters.email,
      password: paramaters.password,
    })
    return data.token
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null
      state.error = null
      state.isLoading = false
    },
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.isLoading = true
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.token = action.payload
    },
    [signIn.rejected.type]: (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    },
  },
})
export default userSlice.reducer
