/* @types defines the game state types. used to determine the game state */
export type GameStateTypes =
  | 'start'
  | 'paused'
  | 'completed'
  | 'over'
  | 'preparation';

/* @types defines the avaliable game types */
export type GameTypes = 'tg';
/* 
  tg -> tebak gambar
*/

export type StoryVolumeIdTypes = 'pemilu24';

export type StoryVolumeTypes =
  | 'specialVolumes'
  | 'mainVolumes'
  | 'premiumVolumes';

/* @types defines the game story volume chapters data structure */
export type ChpaterGamesTypes = {
  chapterName: string;
  games: {gameId: string; gameType: GameTypes; gameName: string}[];
};

/* @types defines the game story volume data structure */
export interface StoryVolumeCardTypes
  extends React.HTMLAttributes<HTMLButtonElement> {
  storyVolumeId: StoryVolumeIdTypes;
  storyVolumeTitle: string;
  storyVolumeCardBackground: string;
  storyVolumeType: StoryVolumeTypes;
}

export interface GameStoryVolumeTypes extends StoryVolumeCardTypes {
  storyVolumeBackground: string;
  playableChapter: ChpaterGamesTypes[];
}

/* @types defines the types of image gueser data stuctures */
export type ImageGuesserGameDataTypes = {
  id: string;
  imageLink: string;
  answer: string;
};
