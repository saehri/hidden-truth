import {create} from 'zustand';
import useFetch from '../hooks/useFetch';
import {CharacterTypes} from '../utils/types';

const initialState: Record<'character', CharacterTypes> = {
  character: {
    userId: '011',
    name: 'James Harlow',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    currentAvatar: {
      avatar_id: 'df-male',
      avatar_image:
        'https://utfs.io/f/1d31e60b-4f2b-473a-8e05-0ffbca3fc951-tpwgpb.webp',
      avatar_thumbs: '',
      avatar_name: 'df male',
      obtained_at: new Date().toISOString(),
      rarity: 'common',
    },
    money: 300,
    energy: {current: 10, isFilling: false},
    currentRank: 'nobody',
    inventory: {
      avatar: [],
      consumable: [],
    },
    hiddenItems: [],
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
    reduceEnergy: async (amount: number) => {
      try {
        const currentEnergy = character?.energy.current as number;
        if (currentEnergy - amount > -1) {
          const newEnergyAmount = currentEnergy - amount;
          const editedCharacterData = {
            ...character,
            energy: {current: newEnergyAmount, isFilling: newEnergyAmount < 10},
          };

          characterStore.setState({
            character: editedCharacterData as CharacterTypes,
          });
        } else throw new Error('Your energy cannot go lower than 0');
      } catch (error: any) {
        console.error(error.message);
      }
    },
    addEnergy: async (amount: number) => {
      try {
        const currentEnergy = character?.energy.current as number;
        if (currentEnergy + amount > -1) {
          const newEnergyAmount = currentEnergy + amount;
          const editedCharacterData = {
            ...character,
            energy: {current: newEnergyAmount, isFilling: newEnergyAmount < 10},
          };

          characterStore.setState({
            character: editedCharacterData as CharacterTypes,
          });
        } else throw new Error('Your energy cannot go lower than 0');
      } catch (error: any) {
        console.error(error.message);
      }
    },
  };
}
