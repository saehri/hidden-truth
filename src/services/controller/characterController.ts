import {create} from 'zustand';
import useFetch from '../hooks/useFetch';
import {CharacterTypes} from '../utils/types';
import {toast} from 'react-toastify';
import useUserController from './userController';

const CHARACTER_STORAGE_KEY = 'CHAR_DATA';

const initialState = {
  character: JSON.parse(localStorage.getItem(CHARACTER_STORAGE_KEY) ?? '{}'),
};

const characterStore = create<{character?: CharacterTypes}>(() => initialState);

export default function useCharacterController() {
  const {character} = characterStore();
  const fetch = useFetch();

  return {
    character,
    create: async (params: CharacterTypes) => {
      try {
        const response = await fetch.post('/character', params, true);

        if (response.success) {
          characterStore.setState({character: response.data});
          toast.success(response.message);

          localStorage.setItem(
            CHARACTER_STORAGE_KEY,
            JSON.stringify(response.data)
          );

          return response;
        } else {
          console.log(params);
          toast.error(response.message);
          throw new Error(response.message);
        }
      } catch (error: any) {
        console.error(error.response.data);
      }
    },
    getCharacter: async (id: string) => {
      try {
        const characterInStorage = JSON.parse(
          localStorage.getItem(CHARACTER_STORAGE_KEY) as string
        );
        if (characterInStorage) {
          characterStore.setState({character: characterInStorage});
          return characterInStorage;
        }

        const response = await fetch.get('/character/' + id, true);

        if (response.success) {
          characterStore.setState({character: response.data});
          localStorage.setItem(
            CHARACTER_STORAGE_KEY,
            JSON.stringify(response.data)
          );

          return response.data;
        } else {
          throw new Error(response.message);
        }
      } catch (error: any) {
        toast.error(error.response.data);

        console.error(error.response.data);
      }
    },
  };
}
