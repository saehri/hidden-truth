import {create} from 'zustand';
import useFetch from '../hooks/useFetch';
import {CharacterTypes} from '../utils/types';

const initialState = {
  character: undefined,
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

          return response;
        } else {
          console.log(params);
          throw new Error(response.message);
        }
      } catch (error: any) {
        console.error(error.response.data);
      }
    },
    getCharacter: async (id: string) => {
      try {
        if (character) {
          return character;
        }

        const response = await fetch.get('/character/' + id, true);

        if (response.success) {
          characterStore.setState({character: response.data});

          return response.data;
        } else {
          throw new Error(response.message);
        }
      } catch (error: any) {
        console.error(error.response.data);
      }
    },
  };
}
