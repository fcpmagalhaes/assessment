import { AxiosPromise } from 'axios';
import api from './api';

export const fetchCompany = (): AxiosPromise<any> => api.get('/companies');

export const fetchNumbers = (): AxiosPromise<any> => api.get(`/phone_numbers`);


                   
      