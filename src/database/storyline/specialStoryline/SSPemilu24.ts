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
export const reportDisinformationRewardsList: Record<string, RewardTypes[]> = {
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
      gameName: 'Chapter 1 - The Governer',
      chapterId: 'PEMILU-24-1',
      games: [
        {
          id: 'PEMILU24-TG-C1-1',
          type: 'TG',
          name: 'Berita Kerusuhan',
          hasOpeningDialog: true,
          difficulty: 'easy',
          gamePosition: 0,
          gameName: 'CH 1.1 - BERITA KERUSUHAN',
          rewards: imageGuesserRewardsList.game1,
          synopsis:
            'Kabar kerusuhan di pusat kota mulai menyebar luas. Mr Defacto dan timnya sedang membicarakan kerusuhan tersebut namun harus terhenti karena Mr Defacto mendapat telepon dari seseorang.',
          isFinalGame: false,
        },
        {
          id: 'PEMILU24-TG-C1-2',
          type: 'TG',
          name: 'Telepon dari Wali Kota',
          hasOpeningDialog: true,
          difficulty: 'easy',
          gamePosition: 1,
          gameName: 'CH 1.2 - WALI KOTA',
          rewards: imageGuesserRewardsList.game1,
          synopsis:
            'Mr Defacto mendapatkan tugas dari Wali Kota untuk melakukan penyelidikan terhadap kerusuhan yang terjadi di pusat kota.',
          isFinalGame: false,
        },
        {
          id: 'PEMILU24-TG-C1-3',
          type: 'TG',
          name: 'Tugas Dimulai',
          hasOpeningDialog: false,
          difficulty: 'medium',
          gamePosition: 2,
          gameName: 'CH 1.3 - TUGAS DIMULAI',
          rewards: imageGuesserRewardsList.game1,
          synopsis: '',
          isFinalGame: false,
        },
        {
          id: 'PEMILU24-TG-C1-4',
          type: 'TG',
          name: 'Tugas Pertama',
          hasOpeningDialog: true,
          difficulty: 'easy',
          gamePosition: 3,
          gameName: 'CH 1.4 - TUGAS PERTAMA',
          rewards: imageGuesserRewardsList.game1,
          synopsis:
            'Catatan: Disinformasi adalah penyebaran informasi yang salah atau tidak akurat dengan sengaja',
          isFinalGame: false,
        },
        {
          id: 'PEMILU24-RD-C1-5',
          type: 'RD',
          name: 'Sang Peniru',
          hasOpeningDialog: false,
          difficulty: 'hard',
          gamePosition: 4,
          gameName: 'CH 1.5 - SANG PENIRU',
          rewards: imageGuesserRewardsList.game1,
          synopsis: '',
          isFinalGame: false,
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
