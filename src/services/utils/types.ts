/* @types defines the game state types. used to determine the game state */
export type GameStateTypes =
  | 'start'
  | 'paused'
  | 'completed'
  | 'gameOver'
  | 'preparation';

/* @types defines the avaliable game types */
export type GameTypes = 'TG' | 'SK' | 'TO' | 'MC' | 'RD' | 'TN';
/* 
  TG -> Tebak Gambar,
  SK -> Susun Kata
  TK -> Tebak Orang
  MC -> Multiple Choice
  RD -> Report Disinformation
  TN - Tebak Nada
*/

export type StorylineIdTypes = 'PEMILU-24';

export type StorylineTypes = 'specialStoryline' | 'mainStoryline';

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
  difficulty: string;
  requester: string;
  respondent: string;
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

/* @types defines the types of guess the person game data stuctures */
export type GuessThePersonGameDataTypes = {
  id: string;
  suspects: {id: number; image: string}[];
  convictsId: number[];
  clue: string;
  difficulty: GameDifficultyTypes;
};

/* @types defines the types of guess the multi choice game data stuctures */
export type MultipleChoiceGameDataTypes = {
  question: string;
  correctQcId: number;
  qc: {choiceId: number; answer: string}[];
};

/* @types defines the types of guess the reporting disinformation game data stuctures */
export type DisinformationTypes = [
  {id: 1; label: 'Manipulasi video/gambar'},
  {id: 2; label: 'Impersonasi'},
  {id: 3; label: 'Berita bohong'},
  {id: 4; label: 'Sumber berita tidak terpercaya'}
];

export type DisinformationInfoTypes = [
  {id: 1; label: 'Manipulasi video/gambar'; reason?: string},
  {id: 2; label: 'Impersonasi'; reason?: string},
  {id: 3; label: 'Berita bohong'; reason?: string},
  {id: 4; label: 'Sumber berita tidak terpercaya'; reason?: string}
];

export type ReportDisinformationGameDataTypes = {
  postId: number;
  postCaption: string;
  postAuthor: {
    authorName: string;
    authorUsername: string;
    authorProfileImage: string;
    followerCount: number;
    followingCount: number;
    authorBio: string;
  };
  postUploadedTime: string;
  isDisinformation: boolean;
  disinformationCategory?: string; //The disinformation category this post lies on.
  hasMedia: boolean;
  mediaLink?: string;
  disinformationCategoryInfo: DisinformationInfoTypes;
};

/* @types defines the form state */
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
