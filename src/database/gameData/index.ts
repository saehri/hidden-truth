import {GameTypes, StorylineIdTypes} from '../../services/utils/types';
import pemilu24ArrangeLettersData from './arrangeLetters.ts/pemilu24ArrangeLetterData';
import pemilu24ImageGuesserData from './imageGuesser/pemilu24ImageGuesserData';

const gameDataByCategory: Record<
  GameTypes,
  Record<StorylineIdTypes, Record<string, any>>
> = {
  TG: {
    'PEMILU-24': pemilu24ImageGuesserData,
  },
  SK: {
    'PEMILU-24': pemilu24ArrangeLettersData,
  },
};

function getGameData({
  gameId,
  gameType,
  storylineId,
}: {
  gameType: GameTypes;
  gameId: string;
  storylineId: StorylineIdTypes;
}) {
  return gameDataByCategory[gameType][storylineId][gameId];
}

export {getGameData};
