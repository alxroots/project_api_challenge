// service/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://private-anon-f6fd01d85a-blissrecruitmentapi.apiary-mock.com/',
});

export default api;
export {};
