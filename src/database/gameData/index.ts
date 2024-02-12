import {GameTypes, StorylineIdTypes} from '../../services/utils/types';
import pemilu24ArrangeLettersData from './arrangeLetters/pemilu24ArrangeLetterData';
import pemilu24GuessThePersonData from './guessThePerson/pemilu24GuessThePerson';
import pemilu24ImageGuesserData from './imageGuesser/pemilu24ImageGuesserData';
import pemilu24MultipleChoiceGameData from './multipleChoice/pemilu24MultipleChoiceGameData';

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
  TO: {
    'PEMILU-24': pemilu24GuessThePersonData,
  },
  MC: {
    'PEMILU-24': pemilu24MultipleChoiceGameData,
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
