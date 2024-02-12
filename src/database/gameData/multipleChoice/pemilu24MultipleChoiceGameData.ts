import {MultipleChoiceGameDataTypes} from '../../../services/utils/types';

const pemilu24MultipleChoiceGameData: Record<
  string,
  MultipleChoiceGameDataTypes[]
> = {
  'PEMILU24-MC-C1-2': [
    {
      question: 'Yang mana yang bener?',
      correctQcId: 1,
      qc: [
        {choiceId: 1, answer: 'bener'},
        {choiceId: 2, answer: 'salah'},
        {choiceId: 3, answer: 'salah'},
        {choiceId: 4, answer: 'salah'},
      ],
    },
    {
      question: 'Yang mana yang bener?',
      correctQcId: 4,
      qc: [
        {choiceId: 1, answer: 'salah'},
        {choiceId: 2, answer: 'salah'},
        {choiceId: 3, answer: 'salah'},
        {choiceId: 4, answer: 'bener'},
      ],
    },
    {
      question: 'Yang mana yang bener?',
      correctQcId: 4,
      qc: [
        {choiceId: 1, answer: 'salah'},
        {choiceId: 2, answer: 'salah'},
        {choiceId: 3, answer: 'salah'},
        {choiceId: 4, answer: 'bener'},
      ],
    },
    {
      question: 'Yang mana yang bener?',
      correctQcId: 2,
      qc: [
        {choiceId: 1, answer: 'salah'},
        {choiceId: 2, answer: 'bener'},
        {choiceId: 3, answer: 'salah'},
        {choiceId: 4, answer: 'salah'},
      ],
    },
  ],
};

export default pemilu24MultipleChoiceGameData;
