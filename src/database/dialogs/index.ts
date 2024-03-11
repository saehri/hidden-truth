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
  isUser: boolean;
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

export function getDialog() {
  return SSPemilu24DialogList;
}
