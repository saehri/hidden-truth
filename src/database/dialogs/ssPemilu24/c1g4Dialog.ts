import {DialogSequenceTypes, DialogTypes} from '..';

// IMAGES
const MRDEFACTO_IMAGE =
  'https://utfs.io/f/1d31e60b-4f2b-473a-8e05-0ffbca3fc951-tpwgpb.webp';

// ======================

// ABSTRACTIONS
const MRDEFACTO_NO_SPEAK: DialogTypes = {
  name: 'Mr Defacto',
  hasMultiDialogChoice: false,
  image: MRDEFACTO_IMAGE,
  isSpeaking: false,
  isUser: false,
};
const PLAYER_NO_SPEAK: DialogTypes = {
  name: 'username',
  image: '',
  isSpeaking: false,
  isUser: true,
  hasMultiDialogChoice: false,
};
// ======================

const sequence1: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Terima kasih sudah mau menunggu. username, Ada tugas mendesak yang perlu kita selesaikan segera.',
      nextSequence: 'sequence2',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence2: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '',
    isUser: true,
    isSpeaking: true,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Sama - sama, Sir. Apa yang terjadi?',
      nextSequence: 'sequence3',
    },
  },
];

const sequence3: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Seperti yang sudah kamu ketahui, sekarang sering terjadi kasus kerusuhan di pusat kota.',
      nextSequence: 'sequence4',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence4: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Kita ditugaskan oleh Pak Wali Kota untuk melakukan penyelidikan.',
      nextSequence: 'sequence5',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence5: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '',
    isUser: true,
    isSpeaking: true,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Mengerti, Sir. Apa yang harus kami lakukan?',
      nextSequence: 'sequence6',
    },
  },
];

const sequence6: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Kita perlu mulai dengan menganalisis data yang ada, memetakan area-area terduga, dan kemudian menyusun rencana untuk mencari dalang dari kerusuhan ini.',
      nextSequence: 'sequence7',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence7: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Laporan sementara dari kepolisian sana mengatakan bahwa benih kerusuhan ini datang dari sosial media.',
      nextSequence: 'sequence8',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence8: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Jadi, kita akan mulai tugas kita dari sana. Saya ingin kamu menganalisa postingan - postingan yang ada di sosial media.',
      nextSequence: 'sequence9',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence9: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Melihat dari dampak yang postingan ini bawa. Dugaan kuat postingan - postingan ini mengandung disinformasi. (Disinformasi adalah penyebaran informasi yang salah atau tidak akurat dengan sengaja).',
      isEnding: true,
      nextSequence: 'end',
    },
  },
  PLAYER_NO_SPEAK,
];

const c1g4Dialog: DialogSequenceTypes = {
  dialogId: 'PEMILU24-TG-C1-4',
  dialogSequences: {
    sequence1,
    sequence2,
    sequence3,
    sequence4,
    sequence5,
    sequence6,
    sequence7,
    sequence8,
    sequence9,
  },
};

export default c1g4Dialog;
