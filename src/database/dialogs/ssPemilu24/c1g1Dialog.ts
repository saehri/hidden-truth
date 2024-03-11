import {DialogSequenceTypes, DialogTypes} from '..';

const MRDEFACTO_IMAGE =
  'https://utfs.io/f/1d31e60b-4f2b-473a-8e05-0ffbca3fc951-tpwgpb.webp';
const TELEPHONE_IMAGE = '';

const MRDEFACTO_NO_SPEAK: DialogTypes = {
  name: 'Mr Defacto',
  hasMultiDialogChoice: false,
  image: MRDEFACTO_IMAGE,
  isSpeaking: false,
  isUser: false,
};
const PLAYER_NO_SPEAK: DialogTypes = {
  name: 'username',
  image: '/avatar/player/female/regular/female avatar default.webp',
  isSpeaking: false,
  isUser: true,
  hasMultiDialogChoice: false,
};

const sequence1: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'username, apakah kamu sudah mendengar mengenai kejadian di Jakarta baru - baru ini?',
      nextSequence: 'sequence2',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence2: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '/avatar/player/female/regular/female avatar default.webp',
    isUser: true,
    isSpeaking: true,
    hasMultiDialogChoice: true,
    dialogChoices: [
      {
        text: 'Belum, Sir. Memangnya apa yang sedang terjadi di sana?',
        nextSequence: 'sequence3a',
      },
      {text: 'Kasus keributan itu ya?', nextSequence: 'sequence3b'},
    ],
  },
];

const sequence3a: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Ada kasus keributan di sana. Orang - orang dari dua kubu pendukung pasangan calon presiden saling baku hantam di jalanan.',
      nextSequence: 'sequence4',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence3b: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Benar. Kasusnya makin parah. Orang - orang dari dua kubu pendukung pasangan calon presiden saling baku hantam di jalanan.',
      nextSequence: 'sequence4',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence4: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '/avatar/player/female/regular/female avatar default.webp',
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: true,
    dialogChoice: {
      text: 'Wah, menyeramkan sekali. Apakah sudah diketahui kenapa mereka sampai melakukan hal seperti itu?',
      nextSequence: 'sequence5',
    },
  },
];

const sequence5: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Untuk saat ini penyebabnya belum jelas. Tapi, dugaan paling kuat keributan ini dipicu oleh  berita hoax di sosial media.',
      nextSequence: 'sequence6',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence6: DialogTypes[] = [
  {
    name: 'Telepon',
    image: TELEPHONE_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Kring.. kring! (Bunyi suara telepon)',
      nextSequence: 'sequence7',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence7: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Sebentar, saya mau mengangkat telpon dulu.',
      nextSequence: 'sequence8',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence8: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '/avatar/player/female/regular/female avatar default.webp',
    hasMultiDialogChoice: true,
    isSpeaking: true,
    isUser: true,
    dialogChoices: [
      {
        text: 'Oh, silakan Sir!',
        nextSequence: 'sequence9a',
      },
      {
        text: 'Okey dokey! :3',
        nextSequence: 'sequence9b',
      },
    ],
  },
];

const sequence9a: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Tunggu sebentar ya.',
      isEnding: true,
      nextSequence: 'end',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence9b: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: '(side eye)',
      isEnding: true,
      nextSequence: 'end',
    },
  },
  PLAYER_NO_SPEAK,
];

const c1g1Dialog: DialogSequenceTypes = {
  dialogId: 'PEMILU24-SK-C1-1',
  dialogSequences: {
    sequence1,
    sequence2,
    sequence3a,
    sequence3b,
    sequence4,
    sequence5,
    sequence6,
    sequence7,
    sequence8,
    sequence9a,
    sequence9b,
  },
};

export default c1g1Dialog;
