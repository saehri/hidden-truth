import {premiumStorylineCardCover} from '../../../assets/images/premiumStorylineCardCover';
import {
  RewardTypes,
  StorylineCardTypes,
  StorylineDataTypes,
} from '../../../services/utils/types';

const chapterRewards: RewardTypes[] = [];

export const imageGuesserRewardsList: Record<string, RewardTypes[]> = {
  game1: [],
};
export const reportDisinformationRewardsList: Record<string, RewardTypes[]> = {
  game1: [],
};

const SSPemilu24: StorylineDataTypes = {
  id: 'PEMILU-24',
  title: 'Kerusuhan di Pusat Kota',
  background: premiumStorylineCardCover,
  types: 'specialStoryline',
  rewards: chapterRewards,
  totalChapter: 10,
  synopsis:
    'Retas konspirasi organisasi gelap yang mengganggu pemilihan umum, pecahkan teka-teki, dan ungkap kebenaran dalam game detektif yang mendebarkan ini',
  playableChapter: [
    {
      gameName: 'Chapter 1 - Kasus Pertama',
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
          name: 'Disinformasi 1',
          hasOpeningDialog: true,
          difficulty: 'hard',
          gamePosition: 4,
          gameName: 'CH 1.5 - DISINFORMASI 1',
          rewards: imageGuesserRewardsList.game1,
          synopsis:
            'CATATAN: Disinformasi di sosial media biasanya berupa postingan yang berisi klaim tanpa bukti dan/atau sumber terpecaya.',
          isFinalGame: true,
        },
      ],
    },
    {
      gameName: 'Chapter 2 - Kasus Kedua',
      chapterId: 'PEMILU24-2',
      games: [
        {
          id: 'PEMILU24-TG-C2-1',
          type: 'TG',
          name: 'Berita Kerusuhan',
          hasOpeningDialog: false,
          difficulty: 'medium',
          gamePosition: 5,
          gameName: 'CH 2.1 - BERITA KERUSUHAN',
          rewards: imageGuesserRewardsList.game1,
          synopsis: '',
          isFinalGame: false,
        },
        {
          id: 'PEMILU24-TG-C2-2',
          type: 'TG',
          name: 'Berita Kerusuhan',
          hasOpeningDialog: false,
          difficulty: 'easy',
          gamePosition: 6,
          gameName: 'CH 2.2 - BERITA KERUSUHAN',
          rewards: imageGuesserRewardsList.game1,
          synopsis: '',
          isFinalGame: false,
        },
        {
          id: 'PEMILU24-RD-C2-3',
          type: 'RD',
          name: 'Berita Kerusuhan',
          hasOpeningDialog: false,
          difficulty: 'easy',
          gamePosition: 7,
          gameName: 'CH 2.3 - BERITA KERUSUHAN',
          rewards: imageGuesserRewardsList.game1,
          synopsis: '',
          isFinalGame: false,
        },
        {
          id: 'PEMILU24-TG-C2-4',
          type: 'TG',
          name: 'Berita Kerusuhan',
          hasOpeningDialog: false,
          difficulty: 'hard',
          gamePosition: 8,
          gameName: 'CH 2.4 - BERITA KERUSUHAN',
          rewards: reportDisinformationRewardsList.game1,
          synopsis: '',
          isFinalGame: false,
        },
        {
          id: 'PEMILU24-RD-C2-5',
          type: 'RD',
          name: 'Berita Kerusuhan',
          hasOpeningDialog: true,
          difficulty: 'medium',
          gamePosition: 9,
          gameName: 'CH 2.5 - BERITA KERUSUHAN',
          rewards: imageGuesserRewardsList.game1,
          synopsis: '',
          isFinalGame: true,
        },
      ],
    },
    {
      gameName: 'more coming soon',
      chapterId: 'PEMILU24-3',
      games: [],
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
