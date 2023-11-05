/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  GetUsersSuccess,
  LoginSuccess,
  SignUp,
  SignUpSuccess,
} from '@/models/services';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/',
  }),
  tagTypes: ['User'],
  endpoints: (build) => ({
    registerUser: build.mutation<SignUpSuccess, Partial<SignUp>>({
      query(data) {
        return {
          url: `register`,
          method: 'POST',
          body: data,
        };
      },
    }),
    loginUser: build.mutation<LoginSuccess, Partial<SignUp>>({
      query(data) {
        return {
          url: `login`,
          method: 'POST',
          body: data,
        };
      },
    }),
    getUsers: build.query<GetUsersSuccess, number>({
      query: (page = 1) => `/users?page=${page}`,
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUsersQuery,
} = authApi;

export const {
  endpoints: { registerUser },
} = authApi;
