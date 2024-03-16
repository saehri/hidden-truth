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
      chapterId: 'PEMILU-24-1',
      games: [
        {
          id: 'PEMILU24-TG-C1-1',
          type: 'TG',
          name: 'Kabar buruk',
          hasOpeningDialog: false,
          difficulty: 'easy',
          gamePosition: 0,
          chapterName: 'CH 1.1 - Kabar Buruk',
          rewards: imageGuesserRewardsList.game1,
          synopsis: 'Gak tahu harus ngapain di sini sumpah',
          isFinalGame: true,
        },
        {
          id: 'PEMILU24-RD-C1-2',
          type: 'RD',
          name: 'Orang Aneh',
          hasOpeningDialog: false,
          difficulty: 'easy',
          gamePosition: 0,
          chapterName: 'CH 1.2 - Orang Aneh',
          rewards: imageGuesserRewardsList.game1,
          synopsis: 'Gak tahu harus ngapain di sini sumpah',
          isFinalGame: true,
        },
      ],
    },
    {
      chapterName: 'Chapter 2 - The Case',
      chapterId: 'PEMILU-24-2',
      games: [
        {
          id: 'PEMILU24-TG-C2-1',
          type: 'TG',
          name: 'Orang Aneh',
          hasOpeningDialog: false,
          difficulty: 'medium',
          gamePosition: 1,
          chapterName: 'CH 1.1 - Kabar Buruk',
          rewards: imageGuesserRewardsList.game1,
          synopsis: 'Gak tahu harus ngapain di sini sumpah',
          isFinalGame: true,
        },
      ],
    },
    {
      chapterName: 'Chapter 3 - Tawuran',
      chapterId: 'PEMILU-24-3',
      games: [
        {
          id: 'PEMILU24-TG-C3-1',
          type: 'TG',
          name: 'Organisasi',
          hasOpeningDialog: false,
          difficulty: 'medium',
          gamePosition: 2,
          chapterName: 'CH 1.1 - Kabar Buruk',
          rewards: imageGuesserRewardsList.game1,
          synopsis: 'Gak tahu harus ngapain di sini sumpah',
          isFinalGame: true,
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
