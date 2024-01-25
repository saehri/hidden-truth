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
      'Mini episode dengan cerita baru dan gameplay yang menyenangkan',
    isLocked: false,
    background: '',
  },
  {
    name: 'Alur Cerita Utama',
    description:
      'Larutkan dirimu ke dunia Mr Defacto. Jadilah asisten detektif terbaik yang...',
    type: 'mainStoryline',
    isLocked: true,
    background: '',
  },
  {
    name: 'Alur Cerita Premium',
    description: 'Mini episode yang...',
    type: 'premiumStoryline',
    isLocked: true,
    background: '',
  },
];

export default storylineTypes;
