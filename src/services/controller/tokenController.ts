import {create} from 'zustand';

const TOKEN_STORAGE_KEY = 'VERIF_TOKEN';

const initialState = {
  token: localStorage.getItem(TOKEN_STORAGE_KEY),
};

const tokenStore = create(() => initialState);

export default function useTokenController() {
  const {token} = tokenStore();

  return {
    token,
    saveToken: (token: string) => {
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
    },
    removeToken: () => {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
    },
    getToken() {
      const token = localStorage.getItem(TOKEN_STORAGE_KEY);
      tokenStore.setState({token});
      return token;
    },
  };
}
