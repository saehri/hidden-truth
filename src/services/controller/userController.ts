import {create} from 'zustand';
import useFetch from '../hooks/useFetch';
import useTokenController from './tokenController';
import {toast} from 'react-toastify';

import {UserTypes} from '../utils/types';

const USER_LOCAL_STORAGE_KEY = 'USER_DATA';

const initialState = {
  user: JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY) ?? '{}'),
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
          toast.success(response.message);

          userStore.setState({
            user: response.data,
          });

          localStorage.setItem(
            USER_LOCAL_STORAGE_KEY,
            JSON.stringify(response.data)
          );
          tokenController.saveToken(response.verification_token);

          return response;
        } else {
          toast.error(response.message);

          throw new Error(response.message);
        }
      } catch (error: any) {
        console.error(error.response.data);
      }
    },
    signUp: async (params: {
      username: string;
      password: string;
      email: string;
    }) => {
      try {
        const response = await fetch.post('/auth/signup', params);
        toast.success(response.message);

        return response;
      } catch (error: any) {
        toast.error(error.message);

        console.error(error.response.data);
      }
    },
    getUserFromStorage: () => {
      return localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    },
    edit: async (params: any) => {
      try {
        const response = await fetch.put('/user/' + user?._id, params);

        console.log(response);

        if (response.success) {
          userStore.setState({user: response.data});

          localStorage.setItem(
            USER_LOCAL_STORAGE_KEY,
            JSON.stringify(response.data)
          );

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
