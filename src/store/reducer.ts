import { combineReducers } from "@reduxjs/toolkit";
import { AuthApi } from "./service/authApi";
import { JobsApi } from "./service/jobsApi";
import authSlice from "./slice/authSlice";
import { companiesApi } from "./service/companyApi";
export const storeReducer = combineReducers({
  user: authSlice,
  [AuthApi.reducerPath]: AuthApi.reducer,
  [JobsApi.reducerPath]: JobsApi.reducer,
  [companiesApi.reducerPath]:companiesApi.reducer
});
