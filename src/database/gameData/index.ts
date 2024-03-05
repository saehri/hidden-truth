import {GameTypes, StorylineIdTypes} from '../../services/utils/types';
import pemilu24GuessThePersonData from './guessThePerson/pemilu24GuessThePerson';
import pemilu24ImageGuesserData from './imageGuesser/pemilu24ImageGuesserData';
import pemilu24MultipleChoiceGameData from './multipleChoice/pemilu24MultipleChoiceGameData';
import pemilu24ReportDisinformationGameData from './reportDisinformation/pemilu24ReportDisinformationGameData';

const gameDataByCategory: Record<
  GameTypes,
  Record<StorylineIdTypes, Record<string, any>>
> = {
  TG: {
    'PEMILU-24': pemilu24ImageGuesserData,
  },
  TO: {
    'PEMILU-24': pemilu24GuessThePersonData,
  },
  MC: {
    'PEMILU-24': pemilu24MultipleChoiceGameData,
  },
  RD: {
    'PEMILU-24': pemilu24ReportDisinformationGameData,
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
