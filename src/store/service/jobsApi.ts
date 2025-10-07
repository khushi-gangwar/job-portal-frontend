import { Job, JobsApiResponse } from "@/libs/interfaces/job-interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";


export const JobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:5174",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token; 
        console.log("Token being sent:", token); // 👈 check in console

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
  },
  }),
  endpoints: (builder) => ({
    jobs: builder.query<JobsApiResponse, void>({
      query: () => ({
        url: "/api/Job",
        method: "GET",
      }),
    }),
  }),
});
export const { useJobsQuery } = JobsApi;
