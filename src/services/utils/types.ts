/* @types defines the game state types. used to determine the game state */
export type GameStateTypes =
  | 'start'
  | 'paused'
  | 'completed'
  | 'over'
  | 'preparation';

/* @types defines the avaliable game types */
export type GameTypes = 'TG';
/* 
  tg -> tebak gambar
*/

export type StorylineIdTypes = 'PEMILU-24';

export type StorylineTypes =
  | 'specialStoryline'
  | 'mainStoryline'
  | 'premiumStoryline';

/* @types defines the game storyline chapters data structure */
export type StorylineChapterTypes = {
  chapterName: string;
  games: {gameId: string; gameType: GameTypes; gameName: string}[];
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

/* @types defines the types of image guesser data stuctures */
export type ImageGuesserGameDataTypes = {
  id: string;
  imageLink: string;
  answer: string;
};
