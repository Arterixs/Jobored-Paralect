import { Vacancies } from 'types/interface/server';
import { METHOD_VACANSIES } from 'utils/constants/server-api';
import { $api } from './axios';

export const sendReqVacansy = async (params: string) => {
  try {
    const response = await $api.get<Vacancies>(`${METHOD_VACANSIES}?published=1&count=4${params}`);
    return response.data;
  } catch (err) {
    throw Error('Bad Request');
  }
};
