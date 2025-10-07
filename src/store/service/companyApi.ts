import { CompaniesApiResponse } from "@/libs/interfaces/companies-interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companiesApi=createApi({
    reducerPath:"companiesApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5174"

    }),
    endpoints:(builder)=>({
        companies:builder.query<CompaniesApiResponse,void>({
            query:()=>({
                url:"/api/Company",
                method:"GET",
            })  
        }),
    }),
});
export const {useCompaniesQuery}=companiesApi;
