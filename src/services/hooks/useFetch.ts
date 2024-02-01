import axios from 'axios';
import useTokenController from '../controller/tokenController';
import {useEffect, useState} from 'react';

const ENDPOINT = 'https://tricky-puce-walkingstick.cyclic.app/api';

export default function useFetch() {
  const tokenController = useTokenController();

  useEffect(() => {
    tokenController.getToken();
  }, []);

  return {
    get: async (url: string, isSecureRoute: boolean = false) => {
      const endPoint = isSecureRoute ? url + `/${tokenController.token}` : url;

      return axios
        .get(ENDPOINT + endPoint, {validateStatus: () => true})
        .then((response) => {
          const {data} = response;
          return data;
        });
    },
    post: async (url: string, params: any, isSecureRoute: boolean = false) => {
      const requestPayload = isSecureRoute
        ? {...params, verification_token: tokenController.token}
        : params;

      return axios.post(ENDPOINT + url, requestPayload).then((response) => {
        const {data} = response;
        return data;
      });
    },
    put: async (url: string, params: any) => {
      return axios
        .put(ENDPOINT + url, {
          ...params,
          verification_token: tokenController.token,
        })
        .then((response) => {
          const {data} = response;
          return data;
        });
    },
  };
}
