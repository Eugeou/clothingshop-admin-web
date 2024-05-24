"use client";
import axios, { AxiosResponse } from 'axios';
import envConfig from '@/src/config';
import { UserProps } from '@/src/types';

const UsersUrl = envConfig.NEXT_PUBLIC_API_ENDPOINT + '/customers';
const accessToken = localStorage.getItem('access_token');

export const GetAllUsers = async (): Promise<UserProps[]> => {
  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: UsersUrl,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        
      }
    };

    const response: AxiosResponse<UserProps[]> = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
