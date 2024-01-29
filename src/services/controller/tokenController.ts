import {useAtom} from 'jotai';
import {RESET, atomWithStorage} from 'jotai/utils';

export const TOKEN_STORAGE_KEY = 'v3r1f_t0k3n';

// PROLOG LOCAL STORAGE FUNCTION
const tokenController = atomWithStorage(
  TOKEN_STORAGE_KEY,
  '',
  {
    // @ts-ignore
    getItem(key, initialValue) {
      try {
        const storedValue = localStorage.getItem(key);
        return storedValue;
      } catch (error) {
        return initialValue;
      }
    },
    setItem(TOKEN_STORAGE_KEY, value: string) {
      localStorage.setItem(TOKEN_STORAGE_KEY, value);
    },
    removeItem(key) {
      localStorage.removeItem(key);
    },
  },
  {getOnInit: true}
);

const useTokenController = () => {
  const [data, setData] = useAtom(tokenController);

  function reset() {
    setData(RESET);
  }

  return {
    data,
    setData,
    reset,
  };
};

export function getVerificationToken() {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export default useTokenController;
