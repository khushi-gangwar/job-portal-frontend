export interface Job {
id:string,
title:string,
description:string,
location:string,
company:string,
  companyLogo: string;
  url: string;
  salary: string;
  expeirencedRequired: string;
  createdAt: string;
}
export interface JobsApiResponse {
  data: Job[];
  status: number;
  message: string;
}