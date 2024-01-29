import {useAtom} from 'jotai';
import {RESET, atomWithStorage} from 'jotai/utils';
import crypty from '../API/crypty';

export type UserTypes = {
  _id: string;
  username: string;
  email: string;
  age: number | null;
  gender: string | null;
  is_new_user: boolean;
  created_at: string;
};

export const USER_STORAGE_KEY = 'u_d4t4_1mp0rt3n';

// PROLOG LOCAL STORAGE FUNCTION
const userController = atomWithStorage(
  USER_STORAGE_KEY,
  {},
  {
    getItem(key) {
      const storedValue = localStorage.getItem(key);

      try {
        return JSON.parse(crypty.decrypt(storedValue));
      } catch {
        return undefined;
      }
    },
    setItem(STORAGE_KEY, value: UserTypes | {}) {
      let oldData = {};

      try {
        const data = localStorage.getItem(STORAGE_KEY);
        oldData = JSON.parse(crypty.decrypt(data));
      } catch (error) {
        oldData = {};
      }

      const newData = {...oldData, ...value};
      const hashedData = crypty.encrypt(newData);

      localStorage.setItem(USER_STORAGE_KEY, hashedData);
    },
    removeItem(key) {
      localStorage.removeItem(key);
    },
  },
  {getOnInit: true}
);

const useUserController = () => {
  const [data, setData] = useAtom(userController);

  function reset() {
    setData(RESET);
  }

  return {
    data,
    setData,
    reset,
  };
};

export function getUserData() {
  const storedValue = localStorage.getItem(USER_STORAGE_KEY);

  try {
    return JSON.parse(crypty.decrypt(storedValue));
  } catch {
    return undefined;
  }
}

export default useUserController;
