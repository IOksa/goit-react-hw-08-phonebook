import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,

  error: null,
  isLoading: false,
};

const handlePending =(state)=>{
  state.isLoading = true;
};

const handleFulfilled =(state, action)=>{
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;

    state.error = null;
    state.isLoading = false;
};

const handleRejected=(state, action)=>{
  state.error=action.payload;
  state.isLoading = false;
}
const handleLogOutFulfilled = (state)=>{
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
};

const handleRefreshUserPending=(state)=>{
    state.isRefreshing = true;
};

const handleRefreshUserFulfilled = (state, action)=>{
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
};

const handleRefreshUserRejected = (state)=>{
    state.isRefreshing = false;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(register.pending, handlePending)
    .addCase(register.fulfilled, handleFulfilled)
    .addCase(register.rejected, handleRejected)
    .addCase(logIn.pending, handlePending)
    .addCase(logIn.fulfilled, handleFulfilled)
    .addCase(logIn.rejected, handleRejected)
    .addCase(logOut.fulfilled, handleLogOutFulfilled)
    .addCase(refreshUser.pending, handleRefreshUserPending)
    .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
    .addCase(refreshUser.rejected, handleRefreshUserRejected)
  },
});

export const { clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;