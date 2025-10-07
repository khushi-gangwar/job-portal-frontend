import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./service/authApi";
import { JobsApi } from "./service/jobsApi";
import { storeReducer } from "./reducer";
import Companies from "@/pages/companies/companies";
import { companiesApi } from "./service/companyApi";


export const store = configureStore({
 // reducer: storeReducer — defines all your state slices.
  reducer: storeReducer,
 
  //these automatically handle caching, request deduplication, and data fetching logic provided by RTK Query.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware, JobsApi.middleware,companiesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
