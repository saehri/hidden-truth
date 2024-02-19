import {
  StorylineCardTypes,
  StorylineDataTypes,
  StorylineIdTypes,
  StorylineTypes,
} from '../../services/utils/types';
import {SSCDPemilu24, SSPemilu24} from './specialStoryline/SSPemilu24';

const storyVolumeCards: StorylineCardTypes[] = [SSCDPemilu24];

const storyVolumes: Record<StorylineTypes, StorylineDataTypes[]> = {
  mainStoryline: [],
  premiumStoryline: [],
  specialStoryline: [SSPemilu24],
};

function getStorylineCards() {
  return storyVolumeCards;
}

function getStorylineData(
  _id: StorylineIdTypes,
  storylineType: StorylineTypes
) {
  try {
    return storyVolumes[storylineType].filter((v) => v.storylineId === _id)[0];
  } catch (error: any) {
    console.error(error.message);
  }
}

export {getStorylineCards, getStorylineData};
