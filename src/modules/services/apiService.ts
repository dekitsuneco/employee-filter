import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IEmployee, IJob } from '../models';

const BASE_URL = 'https://5f7998dbe402340016f9321f.mockapi.io';

const apiService = createApi({
  reducerPath: 'jobAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    fetchAllJobs: build.query<Array<IJob>, unknown>({
      query: () => ({
        url: '/jobs',
      }),
    }),
    fetchAllEmployees: build.query<Array<IEmployee>, unknown>({
      query: () => ({
        url: '/employees',
      }),
    }),
  }),
});

export { apiService };
