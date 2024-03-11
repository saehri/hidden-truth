import {GameTypes, StorylineIdTypes} from '../../services/utils/types';
import pemilu24GuessThePersonData from './guessThePerson/pemilu24GuessThePerson';
import pemilu24ImageGuesserData from './imageGuesser/pemilu24ImageGuesserData';
import pemilu24MultipleChoiceGameData from './multipleChoice/pemilu24MultipleChoiceGameData';
import pemilu24ReportDisinformationGameData from './reportDisinformation/pemilu24ReportDisinformationGameData';

type GameDataByCategoryTypes = Record<
  GameTypes,
  Record<StorylineIdTypes, Record<string, any>>
>;

const gameDataByCategory: GameDataByCategoryTypes = {
  TG: {
    'PEMILU-24': pemilu24ImageGuesserData,
  },
  RD: {
    'PEMILU-24': pemilu24ReportDisinformationGameData,
  },
};

type GetGameDataProps = {
  gameType: GameTypes;
  gameId: string;
  storylineId: StorylineIdTypes;
};

function getGameData({gameId, gameType, storylineId}: GetGameDataProps) {
  return gameDataByCategory[gameType][storylineId][gameId];
}

export {getGameData};
