import {PrologSequenceTypes} from '.';
import {StorylineIdTypes} from '../../services/utils/types';

const prologSequences: PrologSequenceTypes[] = [
  {
    imageCover: '/prolog/pemilu24/pemilu24-prolog-sequence-1.webp',
    text: 'Masyarakat Jakarta sedang menghadapi masalah serius menjelang PEMILU 2024.',
  },
  {
    imageCover: '/prolog/pemilu24/pemilu24-prolog-sequence-2.webp',
    text: 'Mereka terperangkap dalam konflik internal akibat disinformasi yang disebarkan oleh suatu kelompok melalui media sosial.',
  },
  {
    imageCover: '/prolog/pemilu24/pemilu24-prolog-sequence-3.webp',
    text: 'Akibatnya, masyarakat saling bergaduh dan diadu domba, mengancam persatuan dan keamanan menjelang pemilihan.',
  },
  {
    imageCover: '/prolog/pemilu24/pemilu24-prolog-sequence-4.webp',
    text: 'Kelompok tersebut sengaja menyebarkan informasi palsu terkait Pemilu 2024 melalui media sosial dengan tujuan untuk memecah belah masyarakat.',
  },
  {
    imageCover: '/prolog/pemilu24/pemilu24-prolog-sequence-5.webp',
    text: 'Dampaknya, ketegangan di antara warga semakin meningkat, dan kepercayaan pada proses demokrasi terganggu.',
  },
  {
    imageCover: '/prolog/pemilu24/pemilu24-prolog-sequence-6.webp',
    text: 'Masyarakat Jakarta perlu waspada dan kritis terhadap informasi yang mereka terima, serta bekerja sama untuk menangkal upaya polarisasi yang dapat merusak persatuan dan keutuhan bangsa.',
  },
];

const data: {id: StorylineIdTypes; prologSequences: PrologSequenceTypes[]} = {
  id: 'PEMILU-24',
  prologSequences,
};

export default data;
