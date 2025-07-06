import { LoginFormInterface, RegisterFormInterface } from "@/libs/interfaces/auth-interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5174" }),
  endpoints: (builder) => ({
    register: builder.mutation<any, RegisterFormInterface>({
      query: (body) => ({
        url: "/api/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<any, LoginFormInterface>({
      query: (body) => ({
        url: "/api/login",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useLoginMutation,useRegisterMutation } = AuthApi;
