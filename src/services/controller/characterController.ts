import {create} from 'zustand';
import useFetch from '../hooks/useFetch';
import {CharacterTypes} from '../utils/types';

const initialState: Record<'character', CharacterTypes> = {
  character: {
    character_name: 'James Harlow',
    created_at: '203949',
    current_avatar: {
      avatar_id: 'df-male',
      avatar_image: '',
      avatar_thumbs: '',
      avatar_name: 'df male',
      obtained_at: new Date().toISOString(),
      rarity: 'common',
    },
    current_energy: 10,
    current_rank: 'nobody',
    inventory: {
      avatar: [],
      consumable: [],
    },
    played_chapters: [],
    played_games: [],
    user_id: '011',
  },
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
