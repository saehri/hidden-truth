import {StorylineTypes} from '../../services/utils/types';

const storylineTypes: {
  name: string;
  description: string;
  type: StorylineTypes;
  isLocked: boolean;
  background: string;
}[] = [
  {
    name: 'Alur Cerita Spesial',
    type: 'specialStoryline',
    description:
      'Mini episode gratis yang dibuat khusus untuk kamu. Nikmati pengalaman premium secara gratis, sekarang!',
    isLocked: false,
    background:
      'https://utfs.io/f/c0d59097-4040-4112-951b-2b84cb167b53-mbxl7k.webp',
  },
  {
    name: 'Alur Cerita Utama',
    description:
      'Larutkan dirimu ke dunia Mr Defacto. Jadilah detektif terbaik sejagat.',
    type: 'mainStoryline',
    isLocked: true,
    background:
      'https://utfs.io/f/ea8e4c0a-b022-422c-92db-ea45195edba0-qakd9m.webp',
  },
  {
    name: 'Alur Cerita Premium',
    description:
      'Jelajahi narasi dan mini-game eksklusif, pakai desain karakter yang baru dan stylish dan diperbarui setiap bulannya.',
    type: 'premiumStoryline',
    isLocked: true,
    background:
      'https://utfs.io/f/be5eb599-2f23-4268-8e6b-4af7c2b03613-yxkqki.webp',
  },
];

export default storylineTypes;
