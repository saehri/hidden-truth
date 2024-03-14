import {premiumStorylineCardCover} from '../../../assets/images/premiumStorylineCardCover';
import {
  RewardTypes,
  StorylineCardTypes,
  StorylineDataTypes,
} from '../../../services/utils/types';

const chapterRewards: RewardTypes[] = [
  {
    id: 'big_energy_bottle',
    label: 'Big energy bottle (+3 energy)',
    image: '',
  },
  {
    id: 'big_money_bag',
    label: 'Big money bag (+300)',
    image: '',
  },
  {
    id: 'avatar_bundle_unique_batik_24',
    label: 'Skins Batik (+3 energy)',
    image: '',
  },
];

export const imageGuesserRewardsList: Record<string, RewardTypes[]> = {
  game1: [{id: 'small_money_bag', label: 'Small money bag (+100)', image: ''}],
};

const SSPemilu24: StorylineDataTypes = {
  id: 'PEMILU-24',
  title: 'Serangan Cyber di Ibu Kota',
  background: premiumStorylineCardCover,
  types: 'specialStoryline',
  rewards: chapterRewards,
  totalChapter: 10,
  synopsis:
    'Retas konspirasi organisasi gelap yang mengganggu pemilihan umum, pecahkan teka-teki, dan ungkap kebenaran dalam game detektif yang mendebarkan ini',
  playableChapter: [
    {
      chapterName: 'Chapter 1 - The Governer',
      games: [
        {
          id: 'PEMILU24-TG-C1-1',
          type: 'TG',
          name: 'Kabar buruk',
          hasOpeningDialog: false,
          openingDialogId: 'DIALOG_PEMILU_C1G1',
          difficulty: 'easy',
          gamePosition: 1,
          chapterName: 'CH 1.1 - Kabar Buruk',
          hasTutorial: false,
          tutorialId: '',
          rewards: imageGuesserRewardsList.game1,
          synopsis: 'Gak tahu harus ngapain di sini sumpah',
        },
        {
          id: 'PEMILU24-TG-C1-2',
          type: 'TG',
          name: 'Tugas',
          gamePosition: 2,
          hasOpeningDialog: false,
          difficulty: 'easy',
          chapterName: 'CH 1.2 - Tugas',
          hasTutorial: false,
          tutorialId: '',
          rewards: imageGuesserRewardsList.game1,
          synopsis: 'Gak tahu harus ngapain di sini sumpah',
        },
        {
          id: 'PEMILU24-TG-C1-3',
          type: 'TG',
          name: 'Tugas',
          gamePosition: 3,
          hasOpeningDialog: false,
          difficulty: 'easy',
          chapterName: 'CH 1.2 - Tai',
          hasTutorial: false,
          tutorialId: '',
          rewards: imageGuesserRewardsList.game1,
          synopsis: 'Gak tahu harus ngapain di sini sumpah',
        },
      ],
    },
  ],
};

const SSCDPemilu24: StorylineCardTypes = {
  id: SSPemilu24.id,
  title: SSPemilu24.title,
  types: SSPemilu24.types,
  background: SSPemilu24.background,
  rewards: SSPemilu24.rewards,
  synopsis: SSPemilu24.synopsis,
};

export {SSPemilu24, SSCDPemilu24};
