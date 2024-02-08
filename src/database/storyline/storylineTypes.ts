import {mainStorylineCardCover} from '../../assets/images/mainStorylineCardCover';
import {premiumStorylineCardCover} from '../../assets/images/premiumStorylineCardCover';
import {specialStorylineCardCover} from '../../assets/images/specialStoryineCardCover';
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
    background: specialStorylineCardCover,
  },
  {
    name: 'Alur Cerita Utama',
    description:
      'Larutkan dirimu ke dunia Mr Defacto. Jadilah detektif terbaik sejagat.',
    type: 'mainStoryline',
    isLocked: true,
    background: mainStorylineCardCover,
  },
  {
    name: 'Alur Cerita Premium',
    description:
      'Jelajahi narasi dan mini-game eksklusif, pakai desain karakter yang baru dan stylish dan diperbarui setiap bulannya.',
    type: 'premiumStoryline',
    isLocked: true,
    background: premiumStorylineCardCover,
  },
];

export default storylineTypes;
