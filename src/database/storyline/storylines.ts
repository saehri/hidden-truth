import {
  StorylineCardTypes,
  StorylineDataTypes,
  StorylineIdTypes,
} from '../../services/utils/types';
import {SSCDPemilu24, SSPemilu24} from './specialStoryline/SSPemilu24';

export {getStorylineCards, getStorylineData};

const storylinesCard: StorylineCardTypes[] = [SSCDPemilu24];
const storylinesData: StorylineDataTypes[] = [SSPemilu24];

/* NOTE:
storylinesCard != storylinesData
storylinesCard only return all of the data needed to render the storylie card in storyline selection slider
storylinesData return the storylinesCard data an also list of playabe games for the storyline and more.
*/

// @function: return storylines card
function getStorylineCards(
  selectedStorylineCategory: string
): StorylineCardTypes[] {
  return storylinesCard.filter(
    (card) => card.types === selectedStorylineCategory
  );
}

// @function: take storyline id (string) and return storyline data (object)
function getStorylineData(_id: StorylineIdTypes): StorylineDataTypes {
  return storylinesData.filter((storyline) => storyline.id === _id)[0];
}
