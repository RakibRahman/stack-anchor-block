import { configureStore } from '@reduxjs/toolkit';

import { authApi } from 'services/auth';

import userSliceInfo from './userSlice';
// ...

const store = configureStore({
  reducer: {
    user: userSliceInfo,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
