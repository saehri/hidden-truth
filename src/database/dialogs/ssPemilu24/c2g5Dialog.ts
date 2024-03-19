import {DialogSequenceTypes, DialogTypes} from '..';
import {prtDefacto} from '../../../assets/images/prtDefacto';

const MRDEFACTO_IMAGE = prtDefacto;

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

const sequence1: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Aku sudah memeriksa hasil informasi yang telah kamu laporkan kepadaku dan aku menemukan beberapa petunjuk tambahan.',
      nextSequence: 'sequence2',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence2: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Terdapat beberapa akun yang secara konsisten menyebarkan disinformasi setiap hari nya dan memiliki pola yang sama, aku menduga mereka ini memiliki tujuan yang sama.',
      nextSequence: 'sequence3',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence3: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '',
    isUser: true,
    isSpeaking: true,
    hasMultiDialogChoice: true,
    dialogChoices: [
      {
        text: 'Itu artinya dugaan Anda bahwa orang - orang ini berasal dari satu organisasi yang sama benar.',
        nextSequence: 'sequence4a',
      },
      {text: 'Apakah anda yakin dengan hal itu?', nextSequence: 'sequence4b'},
    ],
  },
];

const sequence4a: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Yup, kemungkinan besar benar. Namun, kita masih butuh bukti yang lebih kuat dan lebih banyak. Kita tidak boleh gegabah.',
      nextSequence: 'sequence5a',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence4b: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Iya, sejauh ini kemampuan analisis ku belum pernah meleset.',
      nextSequence: 'sequence5b',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence5a: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Aku juga sudah menemukan petunjuk lokasi dimana salah satu dari mereka selalu mengunggah dan menyebarkan disinformasi, namun detailnya masih berbentuk kode rahasia. kita harus memecahkan kode ini terlebih dahulu.',
      nextSequence: 'sequence6a',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence5b: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '',
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: true,
    dialogChoice: {
      text: 'Baiklah kalau begitu apakah bisa disimpulkan bahwa mereka ini bergerak dengan tujuan yang sama??',
      nextSequence: 'sequence6b',
    },
  },
];

const sequence6a: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '',
    isUser: true,
    isSpeaking: true,
    hasMultiDialogChoice: true,
    dialogChoices: [
      {
        text: 'Baik, anda bisa mengandalkanku',
        nextSequence: 'sequence7a',
      },
      {
        text: 'Oh baiklah, tidak ada waktu istirahat dulu ya?',
        nextSequence: 'sequence7b',
      },
    ],
  },
];

const sequence6b: DialogTypes[] = [
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Ya itu bisa saja, dan jika itu benar maka kemungkinan mereka bekerja dalam suatu organisasi.',
      nextSequence: 'sequence6c',
    },
  },
  PLAYER_NO_SPEAK,
];

const sequence6c: DialogTypes[] = [
  MRDEFACTO_NO_SPEAK,
  {
    name: 'username',
    image: '',
    isUser: true,
    isSpeaking: true,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Lalu, apa yang bisa kita lakukan selajutnya?',
      nextSequence: 'sequence5a',
    },
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
      text: 'Haha, saya suka semangatmu.',
      nextSequence: 'end',
      isEnding: true,
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
      text: 'Yah sayangnya tidak ada waktu untuk itu.',
      nextSequence: 'end',
      isEnding: true,
    },
  },
  PLAYER_NO_SPEAK,
];

const c2g5Dialog: DialogSequenceTypes = {
  dialogId: 'PEMILU24-RD-C2-5',
  dialogSequences: {
    sequence1,
    sequence2,
    sequence3,
    sequence4a,
    sequence4b,
    sequence5a,
    sequence5b,
    sequence6a,
    sequence6b,
    sequence6c,
    sequence7a,
    sequence7b,
  },
};

export default c2g5Dialog;
