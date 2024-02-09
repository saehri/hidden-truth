import {GuessThePersonGameDataTypes} from '../../../services/utils/types';

const pemilu24GuessThePersonData: Record<string, GuessThePersonGameDataTypes> =
  {
    'PEMILU24-TO-C1-3': {
      id: 'PEMILU-TO-C1-3',
      suspects: [
        {id: 6, image: ''},
        {id: 3, image: ''},
        {id: 2, image: ''},
        {id: 1, image: ''},
        {id: 5, image: ''},
        {id: 4, image: ''},
      ],
      convictsId: [1, 3, 5],
      clue: '1, 3, 5',
      difficulty: 'medium',
    },
  };

export default pemilu24GuessThePersonData;
