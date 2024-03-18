import {DialogSequenceTypes, DialogTypes} from '..';

// IMAGES
const MRDEFACTO_IMAGE =
  'https://utfs.io/f/1d31e60b-4f2b-473a-8e05-0ffbca3fc951-tpwgpb.webp';

const TELEPHONE_IMAGE = '/images/tele.webp';

const GOVERNER_IMAGE = '';
// ======================

// ABSTRACT
const GOVERNOR_NO_SPEAK: DialogTypes = {
  name: 'Wali Kota',
  hasMultiDialogChoice: false,
  image: GOVERNER_IMAGE,
  isSpeaking: false,
  isUser: false,
};

const MRDEFACTO_NO_SPEAK: DialogTypes = {
  name: 'Mr Defacto',
  hasMultiDialogChoice: false,
  image: MRDEFACTO_IMAGE,
  isSpeaking: false,
  isUser: false,
};

// ======================

// SEQUENCES
const sequence1: DialogTypes[] = [
  {
    name: 'Telepon',
    image: TELEPHONE_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'KRINGG!!! KRINGG!!!',
      nextSequence: 'sequence2',
    },
  },
  MRDEFACTO_NO_SPEAK,
];

const sequence2: DialogTypes[] = [
  {
    name: 'Wali Kota',
    image: GOVERNER_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Selamat pagi, Mr. Defacto. Ada tugas penting yang ingin saya berikan kepada Anda dan tim detektif Anda.',
      nextSequence: 'sequence3',
    },
  },
  MRDEFACTO_NO_SPEAK,
];

const sequence3: DialogTypes[] = [
  {
    name: 'Wali Kota',
    image: GOVERNER_IMAGE,
    hasMultiDialogChoice: false,
    isSpeaking: true,
    isUser: false,
    dialogChoice: {
      text: 'Dengan kacaunya situasi sekarang, sepertinya Anda bisa menebak tugasnya apa.',
      nextSequence: 'sequence4',
    },
  },
  MRDEFACTO_NO_SPEAK,
];

const sequence4: DialogTypes[] = [
  GOVERNOR_NO_SPEAK,
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    isUser: false,
    isSpeaking: true,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Selamat pagi, Pak Wali Kota. Biar saya tebak, bapak ingin saya menyelidiki kasus kerusuhan di pusat kota, benar?',
      nextSequence: 'sequence5',
    },
  },
];

const sequence5: DialogTypes[] = [
  {
    name: 'Wali Kota',
    image: GOVERNER_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Betul. Seperti yang Anda sudah ketahui, saat ini kami memiliki masalah serius dengan gelombang kejahatan baru di pusat kota. Saya membutuhkan tim Anda untuk menyelidiki dan memberantas sindikat pengrusuh yang semakin merajalela.',
      nextSequence: 'sequence6',
    },
  },
  MRDEFACTO_NO_SPEAK,
];

const sequence6: DialogTypes[] = [
  {
    name: 'Wali Kota',
    image: GOVERNER_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Kami sudah mengerahkan kepolisian untuk menangani hal tersebut. Namun, kepolisian hanya bisa meredam kerusuhan untuk sementara waktu.',
      nextSequence: 'sequence7',
    },
  },
  MRDEFACTO_NO_SPEAK,
];

const sequence7: DialogTypes[] = [
  {
    name: 'Wali Kota',
    image: GOVERNER_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Kepolisian juga sudah meluncurkan Tim Cyber mereka. Laporan sementara mereka mengatakan bahwa kerusuhan yang terjadi ini berawal dari sosial media.',
      nextSequence: 'sequence8',
    },
  },
  MRDEFACTO_NO_SPEAK,
];

const sequence8: DialogTypes[] = [
  GOVERNOR_NO_SPEAK,
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    isUser: false,
    isSpeaking: true,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Media sosial memang dipenuhi dengan disinformasi. Namun, saya tidak yakin jika postingan di sosial media bisa memiliki kekuatan untuk menurunkan masa ke jalanan.',
      nextSequence: 'sequence9',
    },
  },
];

const sequence9: DialogTypes[] = [
  GOVERNOR_NO_SPEAK,
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    isUser: false,
    isSpeaking: true,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Kerusuhan yang terjadi belakangan ini sangat terkoordinasi. Mustahil jika tidak ada orang atau organisasi yang mendalanginya.',
      nextSequence: 'sequence10',
    },
  },
];

const sequence10: DialogTypes[] = [
  {
    name: 'Wali Kota',
    image: GOVERNER_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Seperti itu ya. Saya harap Anda bisa menyelesaikan penyelidikan ini dengan cepat. Ketenangan dan keamanan warga kota adalah prioritas utama kami.',
      nextSequence: 'sequence11',
    },
  },
  MRDEFACTO_NO_SPEAK,
];

const sequence11: DialogTypes[] = [
  {
    name: 'Wali Kota',
    image: GOVERNER_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Saya mengandalkan Anda, Mr. Defacto.',
      nextSequence: 'sequence12',
    },
  },
  MRDEFACTO_NO_SPEAK,
];

const sequence12: DialogTypes[] = [
  {
    name: 'Wali Kota',
    image: GOVERNER_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Tentu saja, Pak Wali Kota. Saya akan memulai penyelidikan dengan segera.',
      nextSequence: 'sequence13',
    },
  },
  MRDEFACTO_NO_SPEAK,
];

const sequence13: DialogTypes[] = [
  {
    name: 'Wali Kota',
    image: GOVERNER_IMAGE,
    isSpeaking: true,
    isUser: false,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Baguslah. Sampai jumpa di kantor saya Mr Defacto.',
      nextSequence: 'sequence14',
    },
  },
  MRDEFACTO_NO_SPEAK,
];

const sequence14: DialogTypes[] = [
  GOVERNOR_NO_SPEAK,
  {
    name: 'Mr Defacto',
    image: MRDEFACTO_IMAGE,
    isUser: false,
    isSpeaking: true,
    hasMultiDialogChoice: false,
    dialogChoice: {
      text: 'Terima kasih atas kepercayaannya, Pak Wali Kota. Kami tidak akan mengecewakan. Saya dan tim akan pergi ke kantor anda secepatnya.',
      isEnding: true,
      nextSequence: 'end',
    },
  },
];

const c1g2Dialog: DialogSequenceTypes = {
  dialogId: 'PEMILU24-TG-C1-2',
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
    sequence10,
    sequence11,
    sequence12,
    sequence13,
    sequence14,
  },
};

export default c1g2Dialog;
