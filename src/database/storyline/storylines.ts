import {
  StorylineCardTypes,
  StorylineDataTypes,
  StorylineIdTypes,
  StorylineTypes,
} from '../../services/utils/types';
import {SSCDPemilu24, SSPemilu24} from './specialStoryline/SSPemilu24';

const storyVolumeCards: Record<StorylineTypes, StorylineCardTypes[]> = {
  specialStoryline: [SSCDPemilu24],
  mainStoryline: [],
  premiumStoryline: [],
};

const storyVolumes: Record<StorylineTypes, StorylineDataTypes[]> = {
  mainStoryline: [],
  premiumStoryline: [],
  specialStoryline: [SSPemilu24],
};

function getStorylineCards(storylineType: StorylineTypes) {
  return storyVolumeCards[storylineType];
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
