import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the initial state using that type and export the type as well.
export type UserState = {
  currentUser: null | { [key: string]: any } // Adjust this to your needs
  test: { a: number }
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  test: { a: 1 },
}

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action: PayloadAction<null | { [key: string]: any }>) {
      // Adjust this to your needs
      state.currentUser = action.payload
    },
  },
})

export const { setCurrentUser } = userSlice.actions

export const userReducer = userSlice.reducer
