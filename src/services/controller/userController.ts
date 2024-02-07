import {create} from 'zustand';
import useFetch from '../hooks/useFetch';
import useTokenController from './tokenController';

import {UserTypes} from '../utils/types';

const SESSION_STORAGE_KEY = 'ud4t4';

const initialState = {
  user: JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY)! || '{}'),
};

const userStore = create<{user?: UserTypes}>(() => initialState);

export default function useUserController() {
  const {user} = userStore();
  const fetch = useFetch();
  const tokenController = useTokenController();

  return {
    user,
    signIn: async (params: {username: string; password: string}) => {
      try {
        const response = await fetch.post('/auth/signin', params);

        if (response.success) {
          userStore.setState({
            user: response.data,
          });

          sessionStorage.setItem(
            SESSION_STORAGE_KEY,
            JSON.stringify(response.data)
          );

          tokenController.saveToken(response.verification_token);
          return response;
        } else {
          throw new Error(response.message);
        }
      } catch (error: any) {
        console.error(error.response.data);
        return {message: error.response.data.message, success: false};
      }
    },
    signUp: async (params: {
      username: string;
      password: string;
      email: string;
    }) => {
      try {
        const response = await fetch.post('/auth/signup', params);

        return response;
      } catch (error: any) {
        console.error(error.response.data);
        return {message: error.response.data.message, success: false};
      }
    },
    getUserDataFromSessionStorage: () => {
      return sessionStorage.getItem(SESSION_STORAGE_KEY);
    },
    edit: async (params: any) => {
      try {
        const response = await fetch.put('/user/' + user?._id, params);

        if (response.success) {
          userStore.setState({user: response.data});

          return response;
        } else {
          throw new Error(response.message);
        }
      } catch (error: any) {
        console.error(error.response.data);
      }
    },
  };
}
