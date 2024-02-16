import {
  StorylineCardTypes,
  StorylineDataTypes,
} from '../../../services/utils/types';

const SSPemilu24: StorylineDataTypes = {
  storylineId: 'PEMILU-24',
  storylineTitle: 'BADAI DISINFORMASI PEMILU',
  storylineDetailPageCoverImage: '',
  storylineType: 'specialStoryline',
  playableChapter: [
    {
      chapterName: 'Chapter 1 - The Governer',
      games: [
        {
          gameId: 'PEMILU24-SK-C1-1',
          gameType: 'SK',
          gameName: 'Kabar buruk',
          hasOpeningDialog: true,
          location: 'Defacto Office',
        },
        {
          gameId: 'PEMILU24-MC-C1-2',
          gameType: 'MC',
          gameName: 'Panggilan tugas',
          hasOpeningDialog: false,
          location: 'Defacto Office',
        },
        {
          gameId: 'PEMILU24-TO-C1-3',
          gameType: 'TO',
          gameName: 'Mengidentifikasi orang bising',
          hasOpeningDialog: false,
          location: 'Kantor Gubernur Jakarta',
        },
      ],
    },
    {
      chapterName: 'Chapter 2 - Tikus Berdasi',
      games: [
        {
          gameId: 'PEMILU24-RD-C2-1',
          gameType: 'RD',
          gameName: 'Tikus yang tidur',
          hasOpeningDialog: false,
          location: 'Jakarta timur',
        },
        {
          gameId: 'PEMILU24-TG-C2-2',
          gameType: 'TG',
          gameName: 'Tikus gendut',
          hasOpeningDialog: false,
          location: 'Jakarta utara',
        },
      ],
    },
    {
      chapterName: 'Chapter 3 - Masalah Besar',
      games: [
        {
          gameId: 'PEMILU24-TN-C3-1',
          gameType: 'TN',
          gameName: 'Tikus yang tidur',
          hasOpeningDialog: false,
          location: 'Jakarta timur',
        },
        {
          gameId: 'PEMILU24-TG-C3-2',
          gameType: 'TG',
          gameName: 'Tikus gendut',
          hasOpeningDialog: true,
          location: 'Jakarta utara',
        },
      ],
    },
    {
      chapterName: 'Chapter 4 - Penjara',
      games: [
        {
          gameId: 'PEMILU24-TG-C4-1',
          gameType: 'TG',
          gameName: 'Tikus yang tidur',
          hasOpeningDialog: false,
          location: 'Jakarta timur',
        },
        {
          gameId: 'PEMILU24-TG-C4-2',
          gameType: 'TG',
          gameName: 'Tikus gendut',
          hasOpeningDialog: true,
          location: 'Jakarta utara',
        },
      ],
    },
  ],
};

const SSCDPemilu24: StorylineCardTypes = {
  storylineId: SSPemilu24.storylineId,
  storylineTitle: SSPemilu24.storylineTitle,
  storylineType: SSPemilu24.storylineType,
  storylineCardBackground: SSPemilu24.storylineCardBackground,
};

export {SSPemilu24, SSCDPemilu24};
