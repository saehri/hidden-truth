import {ImageGuesserGameDataTypes} from '../../../services/utils/types';
import {imageGuesserRewardsList} from '../../storyline/specialStoryline/SSPemilu24';

const pemilu24ImageGuesserData: Record<string, ImageGuesserGameDataTypes> = {
  'PEMILU24-TG-C1-1': {
    data: {
      imageLink:
        'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      answer: 'fish',
      clue: '',
    },
    rewards: imageGuesserRewardsList.game1,
    hasTutorial: false,
  },
  'PEMILU24-TG-C2-1': {
    data: {
      imageLink:
        'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      answer: 'fish',
      clue: '',
    },
    rewards: imageGuesserRewardsList.game1,
    hasTutorial: true,
  },
  'PEMILU24-TG-C3-1': {
    data: {
      imageLink:
        'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      answer: 'fish',
      clue: '',
    },
    rewards: imageGuesserRewardsList.game1,
    hasTutorial: true,
  },
};

export default pemilu24ImageGuesserData;
