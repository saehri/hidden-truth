interface ImageGuesserGameDataTypes {
  id: string;
  imageLink: string;
  answer: string;
}

type GameStateTypes = 'start' | 'paused' | 'completed' | 'over' | 'preparation';

export type {ImageGuesserGameDataTypes, GameStateTypes};
