import { CatalogJobs } from 'types/interface/server';
import { METHOD_JOB } from 'utils/constants/server-api';
import { $api } from './axios';

export const sendReqJobs = async () => {
  try {
    const response = await $api.get<CatalogJobs[]>(`${METHOD_JOB}/`);
    return response.data;
  } catch (err) {
    throw Error('Bad Request');
  }
};
