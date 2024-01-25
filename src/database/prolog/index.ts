import {atomWithStorage} from 'jotai/utils';
import {StorylineIdTypes} from '../../services/utils/types';

import SSPemilu24Prolog from './SSPemilu24Prolog';
const PROLOG_STORAGE_KEY = 'WATCHED_PROLOG';

export type PrologSequenceTypes = {
  imageCover: string;
  text: string;
};

// PROLOG DATA
const prologs = [SSPemilu24Prolog];

// PROLOG READ OPERATION
export function getProlog(id: StorylineIdTypes): {
  id: StorylineIdTypes;
  prologSequences: PrologSequenceTypes[];
} {
  return prologs.filter((prolog) => prolog.id === id)[0];
}

// PROLOG LOCAL STORAGE FUNCTION
export const watchedPrologData = atomWithStorage(
  PROLOG_STORAGE_KEY,
  [],
  {
    getItem(key, initialValue) {
      const storedValue = localStorage.getItem(key);
      try {
        return JSON.parse(storedValue ?? '[]');
      } catch {
        return initialValue;
      }
    },
    setItem(STORAGE_KEY, value) {
      const currentStoredData =
        JSON.parse(localStorage.getItem(STORAGE_KEY) as string) ?? [];

      if (currentStoredData.indexOf(value) === -1)
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify([...(currentStoredData as string), value])
        );
    },
    removeItem(key) {
      localStorage.removeItem(key);
    },
  },
  {getOnInit: true}
);
