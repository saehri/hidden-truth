/* @types defines the game state types. used to determine the game state */
export type GameStateTypes =
  | 'start'
  | 'paused'
  | 'completed'
  | 'over'
  | 'preparation';

/* @types defines the avaliable game types */
export type GameTypes = 'TG' | 'SK' | 'TO';
/* 
  TG -> Tebak Gambar,
  SK -> Susun Kata
  TK -> Tebak Orang
*/

export type StorylineIdTypes = 'PEMILU-24';

export type StorylineTypes =
  | 'specialStoryline'
  | 'mainStoryline'
  | 'premiumStoryline';

/* @types defines the game storyline chapters data structure */
export type StorylineChapterTypes = {
  chapterName: string;
  games: {
    gameId: string;
    gameType: GameTypes;
    gameName: string;
    location: string;
    hasOpeningDialog: boolean;
    openingDialogId?: string;
  }[];
};

/* @types defines the game storyline episode data structure */
export interface StorylineCardTypes
  extends React.HTMLAttributes<HTMLButtonElement> {
  storylineId: StorylineIdTypes;
  storylineTitle: string;
  storylineCardBackground?: string;
  storylineType: StorylineTypes;
}

export interface StorylineDataTypes extends StorylineCardTypes {
  storylineDetailPageCoverImage: string;
  playableChapter: StorylineChapterTypes[];
}

type GameDifficultyTypes = 'easy' | 'medium' | 'hard';

/* @types defines the types of image guesser data stuctures */
export type ImageGuesserGameDataTypes = {
  id: string;
  imageLink: string;
  answer: string;
};

/* @types defines the types of arrange letter game data stuctures */
export type ArrangeLettersGameDataTypes = {
  id: string;
  scrambledLetters: string[];
  answer: string;
  clue?: string;
  difficulty: GameDifficultyTypes;
};

export type GuessThePersonGameDataTypes = {
  id: string;
  suspects: {id: number; image: string}[];
  convictsId: number[];
  clue: string;
  difficulty: GameDifficultyTypes;
};

export type FormStateTypes = 'idle' | 'process' | 'error' | 'done';

/*  */
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
  avatar_thumbs: string;
  rarity: ItemRarityTypes;
  obtained_at: string; // Date ISO string
};

export type CharacterTypes = {
  user_id: string; // This is the _id of the user
  character_name: string; // This is the character name
  created_at: string; // Date ISO string
  current_avatar: AvatarTypes; // Current used character
  current_rank: DetectiveRankTypes; // Nobody | Junior Detektif | Senior Detektif | .etc
  current_energy: number;
  played_games: []; // string[] -> string is gameId
  played_chapters: []; // string[] -> string is chapterId
  inventory: {
    consumable: ConsumableTypes[];
    avatar: AvatarTypes[];
  };
};

export type UserTypes = {
  _id: string;
  username: string;
  email: {
    valid: boolean;
    value: string;
  };
  age: number | null;
  gender: string | null;
  is_new_user: boolean;
  created_at: string;
};
