import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './index';

interface UserInfo {
  token: string | null;
  email: string | null;
  id?: string | null | number;
}

const initialState: UserInfo = {
  token: null,
  email: null,
  id: null,
};

export const userSlice = createSlice({
  name: 'userInfo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      const { email, token } = action.payload;
      state.email = email;
      state.token = token;
    },

    resetUserInfo: () => initialState,
  },
});

export const { setUserInfo, resetUserInfo } = userSlice.actions;

export const userInfo = (state: RootState) => state.user;

export default userSlice.reducer;
