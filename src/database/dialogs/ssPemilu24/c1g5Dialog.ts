import {DialogSequenceTypes, DialogTypes} from '..';
import {prtDefacto} from '../../../assets/images/prtDefacto';

// IMAGES
const MRDEFACTO_IMAGE = prtDefacto;

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
      text: 'Sebelumnya, username apakah kamu sudah tahu disinformasi itu apa?',
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
    hasMultiDialogChoice: true,
    dialogChoices: [
      {text: 'Tentu, Sir', nextSequence: 'sequence7a'},
      {text: 'Tidak, Sir', nextSequence: 'sequence3'},
    ],
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
      text: 'Aish.. Kamu ini bagaimana sih',
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
      text: 'Disinformasi adalah penyebaran informasi yang salah atau tidak akurat dengan sengaja, biasanya dilakukan untuk mempengaruhi opini publik, merusak reputasi, atau menciptakan kebingungan. Hal ini sering kali dilakukan dengan tujuan politik, ideologis, atau ekonomi.',
      nextSequence: 'sequence5',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence5: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Sampai sini sudah paham?',
      nextSequence: 'sequence6',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence6: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '',
    isUser: true,
    isSpeaking: true,
    hasMultiDialogChoice: true,
    dialogChoices: [
      {
        text: 'Siap, saya sudah paham.',
        nextSequence: 'sequence7a',
      },
      {
        text: 'Siap, saya belum paham hehehe.',
        nextSequence: 'sequence7b',
      },
    ],
  },
];

const sequence7a: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Baguslah. Sekarang tolog jelaskan kembali apa yang dimaksuk dengan "disinformasi"!',
      nextSequence: 'sequence8',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence7b: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Hadeuuhh... Aku akan menjelaskannya sekali lagi.',
      nextSequence: 'sequence4',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence8: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '',
    isUser: true,
    isSpeaking: true,
    hasMultiDialogChoice: true,
    dialogChoices: [
      {
        text: 'Disinformasi adalah penyebaran informasi yang salah atau tidak akurat dengan sengaja',
        nextSequence: 'sequence9a',
      },
      {
        text: 'Disinformasi adalah penyebaran informasi yang salah atau tidak akurat dengan tidak sengaja',
        nextSequence: 'sequence9b',
      },
    ],
  },
];

const sequence9a: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Mantap, kamu memang benar - benar bisa diandalkan, username',
      nextSequence: 'sequence10',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence9b: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Aish.. Kamu ini bagaimana sih, katanya sudah paham.',
      nextSequence: 'sequence7b',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence10: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Jadi, tunggu apa lagi. Tolong selesaikan tugas pertamamu segera.',
      nextSequence: 'sequence11',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence11: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '',
    isUser: true,
    isSpeaking: true,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Siap, Sir. Saya akan mulai bekerja segera.',
      isEnding: true,
      nextSequence: 'end',
    },
  },
];

const c1g5Dialog: DialogSequenceTypes = {
  dialogId: 'PEMILU24-RD-C1-5',
  dialogSequences: {
    sequence1,
    sequence2,
    sequence3,
    sequence4,
    sequence5,
    sequence6,
    sequence7a,
    sequence7b,
    sequence8,
    sequence9a,
    sequence9b,
    sequence10,
    sequence11,
  },
};

export default c1g5Dialog;
