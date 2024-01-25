import {StorylineIdTypes, StorylineTypes} from '../../services/utils/types';
import SSPemilu24DialogList from './ssPemilu24';

/* TYPES */
export type DialogChoiceTypes = {
  text: string;
  nextSequence?: string;
  isEnding?: boolean;
};

export type DialogTypes = {
  name: string;
  isUser?: boolean;
  image: string;
  isSpeaking: boolean;
  hasMultiDialogChoice: boolean;
  dialogChoices?: DialogChoiceTypes[];
  dialogChoice?: DialogChoiceTypes;
};

export type DialogSequenceTypes = {
  dialogId: string;
  dialogSequences: Record<string, DialogTypes[]>;
};

const dialogData: Record<
  StorylineTypes,
  Record<StorylineIdTypes, DialogSequenceTypes[]>
> = {
  specialStoryline: {
    'PEMILU-24': SSPemilu24DialogList,
  },
  mainStoryline: {'PEMILU-24': SSPemilu24DialogList},
  premiumStoryline: {'PEMILU-24': SSPemilu24DialogList},
};

export function getDialog(
  storylineType: StorylineTypes,
  StorylineId: StorylineIdTypes,
  dialogId: string
) {
  return dialogData[storylineType][StorylineId].filter(
    (d) => d.dialogId === dialogId
  )[0];
}
