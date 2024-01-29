import crypty from '../API/crypty';
import {getUserData} from './userController';
import {getVerificationToken} from './tokenController';

export const CHARACTER_STORAGE_KEY = 'chr_d4t4';
const API_URL = 'https://tricky-puce-walkingstick.cyclic.app/api';

function getStoredCharData() {
  const storedValue = localStorage.getItem(CHARACTER_STORAGE_KEY);
  let decriptedData;

  // The data stored in user storage is decrypted
  try {
    decriptedData = JSON.parse(crypty.decrypt(storedValue));
  } catch {
    decriptedData = undefined;
  }

  return decriptedData;
}

const useCharacterController = () => {
  const userData = getUserData();
  const verificationToken = getVerificationToken();

  return {
    getItem: async () => {
      const decriptedData = getStoredCharData();

      if (decriptedData) {
        return decriptedData;
      } else {
        // Get the character data from server if it does not exits
        const response = await fetch(
          API_URL + `/character/${userData._id}/${verificationToken}`
        ).then((res) => res.json());

        if (response.success) {
          localStorage.setItem(
            CHARACTER_STORAGE_KEY,
            crypty.encrypt(JSON.stringify(response.data))
          );

          return getStoredCharData();
        }
      }
    },
    setItem(data: CharacterTypes) {
      localStorage.setItem(
        CHARACTER_STORAGE_KEY,
        crypty.encrypt(JSON.stringify(data))
      );
    },
    editItem(payload: any) {
      console.log(payload);
    },
  };
};

export default useCharacterController;

export type ItemTypeTypes = 'energy' | 'money';
export type ItemRarityTypes =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';
export type ItemNameTypes = '';

export type DetectiveRankTypes = 'nobody';

export type ConsumableTypes = {
  type: ItemTypeTypes;
  name: ItemNameTypes;
  rarity: ItemRarityTypes;
  quantity: number;
};

export type AvatarId = 'df-female' | 'df-male';

export type AvatarTypes = {
  avatar_id: AvatarId;
  avatar_name: string;
  avatar_image: string;
  rarity: ItemRarityTypes;
  obtained_at: string; // Date ISO string
};

export type CharacterTypes = {
  user_id: string; // This is the _id of the user
  character_name: string; // This is the character name
  created_at: string; // Date ISO string
  avatar: {
    now_used: AvatarTypes; // Current used character
  };
  current_rank: DetectiveRankTypes; // Nobody | Junior Detektif | Senior Detektif | .etc
  current_energy: number;
  played_games: []; // string[] -> string is gameId
  played_chapters: []; // string[] -> string is chapterId
  inventory: {
    consumable: ConsumableTypes[];
    avatar: AvatarTypes[];
  };
};
