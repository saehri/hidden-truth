import {create} from 'zustand';
import useFetch from '../hooks/useFetch';
import {CharacterTypes} from '../utils/types';
import {prtLucy} from '../../assets/images/prtLucy';

const initialState: Record<'character', CharacterTypes> = {
  character: {
    userId: '011',
    name: 'Lucy',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    currentAvatar: {
      avatar_id: 'df-female',
      avatar_image: prtLucy,
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

const STORAGE_KEY = 'CHAR';

const characterStore = create<{character?: CharacterTypes}>(
  () => JSON.parse(localStorage.getItem(STORAGE_KEY)!) || '{}'
);

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
    reduceEnergy: (amount: number) => {
      try {
        const currentEnergy = character?.energy?.current as number;
        if (currentEnergy - amount > -1) {
          const newEnergyAmount = currentEnergy - amount;
          const editedCharacterData = {
            ...character,
            energy: {current: newEnergyAmount, isFilling: newEnergyAmount < 10},
          };

          characterStore.setState({
            character: editedCharacterData as CharacterTypes,
          });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
        } else throw new Error('Your energy cannot go lower than 0');
      } catch (error: any) {
        console.error(error.message);
      }
    },
    addEnergy: (amount: number) => {
      try {
        const currentEnergy = character?.energy.current as number;
        if (currentEnergy + amount >= 11) {
          const editedCharacterData = {
            ...character,
            energy: {current: 10, isFilling: false},
          };

          characterStore.setState({
            character: editedCharacterData as CharacterTypes,
          });

          return;
        }

        if (currentEnergy + amount > -1) {
          const newEnergyAmount = currentEnergy + amount;
          const editedCharacterData = {
            ...character,
            energy: {current: newEnergyAmount, isFilling: newEnergyAmount < 10},
          };

          characterStore.setState({
            character: editedCharacterData as CharacterTypes,
          });
          localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
        } else throw new Error('Your energy cannot go lower than 0');
      } catch (error: any) {
        console.error(error.message);
      }
    },
    store: () => {
      // if data is undefined
      if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(initialState.character)
        );
        characterStore.setState({
          character: JSON.parse(localStorage.getItem(STORAGE_KEY)!),
        });
      } else {
        characterStore.setState({
          character: JSON.parse(localStorage.getItem(STORAGE_KEY)!),
        });
      }
    },
    sync: () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
    },
  };
}
