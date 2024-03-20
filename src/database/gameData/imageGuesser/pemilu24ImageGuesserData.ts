import {ImageGuesserGameDataTypes} from '../../../services/utils/types';
import {imageGuesserRewardsList} from '../../storyline/specialStoryline/SSPemilu24';

const pemilu24ImageGuesserData: Record<string, ImageGuesserGameDataTypes> = {
  'PEMILU24-TG-C1-1': {
    data: {
      imageLink:
        'https://www.dropbox.com/scl/fi/y5knv5wa9o99iaos6hyw3/soal1.webp?rlkey=87z69mxtqn32eoy5z717cyofq&raw=1',
      answer: 'surat suara',
      clue: 'Dipakai Saat Pemilu',
    },
    rewards: imageGuesserRewardsList.game1,
    hasTutorial: true,
  },
  'PEMILU24-TG-C1-2': {
    data: {
      imageLink:
        'https://www.dropbox.com/scl/fi/g2ox174i3smfp9f3q83m5/soal11-2.webp?rlkey=epwv0tdo4asz1tytje09k0xlb&raw=1',
      answer: 'pemimpin',
      clue: '',
    },
    rewards: imageGuesserRewardsList.game1,
    hasTutorial: false,
  },
  'PEMILU24-TG-C1-3': {
    data: {
      imageLink:
        'https://www.dropbox.com/scl/fi/2iv1p27ybm3lb2l52jbmm/soal6.webp?rlkey=tmonu844l2330wq7uwoi6r1gf&raw=1',
      answer: 'senam otak',
      clue: '',
    },
    rewards: imageGuesserRewardsList.game1,
    hasTutorial: false,
  },
  'PEMILU24-TG-C1-4': {
    data: {
      imageLink:
        'https://www.dropbox.com/scl/fi/1p4sim8l1c6bg0rea9g0w/soal8.webp?rlkey=vof85aoj5kjhjm9tel0ozr58g&raw=1',
      answer: 'berita palsu',
      clue: 'Bahasa Indonesia',
    },
    rewards: imageGuesserRewardsList.game1,
    hasTutorial: false,
  },
  'PEMILU24-TG-C2-1': {
    data: {
      imageLink:
        'https://www.dropbox.com/scl/fi/6iwmdaunlisbi9ku4lj9a/soal4.webp?rlkey=7hv4pescr6pmn9qznnuuvtzjv&raw=1',
      answer: 'demokrasi',
      clue: 'O => K',
    },
    rewards: imageGuesserRewardsList.game1,
    hasTutorial: false,
  },
  'PEMILU24-TG-C2-2': {
    data: {
      imageLink:
        'https://www.dropbox.com/scl/fi/9bc5ocz2t8nvfh9rsuoy1/soal9.webp?rlkey=33wjsnojyufbtx9d8owopyqwp&raw=1',
      answer: 'daur ulang',
      clue: 'Repeat, Reuse, Recycle',
    },
    rewards: imageGuesserRewardsList.game1,
    hasTutorial: false,
  },
  'PEMILU24-TG-C2-4': {
    data: {
      imageLink:
        'https://www.dropbox.com/scl/fi/6oep1lrdxj1n95c7bi4vm/soal13.webp?rlkey=pq8n530kmbi273bbh2k5496tw&raw=1',
      answer: 'tanah air indonesia',
      clue: '3 Kata',
    },
    rewards: imageGuesserRewardsList.game1,
    hasTutorial: false,
  },
};

export default pemilu24ImageGuesserData;
