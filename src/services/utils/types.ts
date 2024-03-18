/* @types defines the game state types. used to determine the game state */
export type GameStateTypes =
  | 'start'
  | 'paused'
  | 'completed'
  | 'gameOver'
  | 'preparation';

/* @types defines the avaliable game types */
export type GameTypes = 'TG' | 'RD';
/* 
  TG -> Tebak Gambar,
  TK -> Tebak Orang
  MC -> Multiple Choice
  RD -> Report Disinformation
*/

export type StorylineIdTypes = 'PEMILU-24';

export type StorylineTypes = 'specialStoryline' | 'mainStoryline';

export type RewardTypes = {id: string; label: string; image: string};

/* @types defines the game storyline chapters data structure */
export type GameCardTypes = {
  id: string;
  type: GameTypes;
  name: string;
  gamePosition: number;
  hasOpeningDialog: boolean;
  gameName: string;
  synopsis: string;
  isFinalGame: boolean;
  rewards: RewardTypes[];
  difficulty: GameDifficultyTypes;
};

export type StorylineChapterTypes = {
  gameName: string;
  chapterId: string;
  games: GameCardTypes[];
};

/* @types defines the game storyline episode data structure */
export interface StorylineCardTypes
  extends React.HTMLAttributes<HTMLButtonElement> {
  id: StorylineIdTypes;
  title: string;
  background: string;
  types: StorylineTypes;
  synopsis: string;
  rewards: RewardTypes[];
}

export interface StorylineDataTypes extends StorylineCardTypes {
  totalChapter: number;
  playableChapter: StorylineChapterTypes[];
}

export type GameDifficultyTypes = 'easy' | 'medium' | 'hard';

/* @types defines the types of image guesser data stuctures */
export type ImageGuesserGameDataTypes = {
  data: {imageLink: string; answer: string; clue: string};
  rewards: RewardTypes[];
  hasTutorial: boolean;
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

export type RDPostTypes = {
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

export type ReportDisinformationGameDataTypes = {
  data: RDPostTypes[];
  hasTutorial: boolean;
  rewards: RewardTypes[];
  totalDisinformationCategory: number;
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
  userId: string; // This is the _id of the user
  name: string; // This is the character name
  currentAvatar: AvatarTypes; // Current used character
  currentRank: DetectiveRankTypes; // Nobody | Junior Detektif | Senior Detektif | .etc
  energy: {
    current: number;
    isFilling: boolean;
  };
  money: number;
  createdAt: string; // Date ISO string
  updatedAt: string;
  inventory: {
    consumable: ConsumableTypes[];
    avatar: AvatarTypes[];
  };
  hiddenItems: string[];
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

/* CHARACTER PROGRESS */
export type CharacterProgressTypes = {
  chardId: string;
  userId: string;
  userEmail: string;
  unlockedStoryline: {
    storylineId: StorylineIdTypes;
    gamePlayedList: string[];
    totalChapter: number;
    finishedChapterList: string[];
    finishedChapterCount: number; // We incre
  }[];
  hiddenPrologList: string[];
};
