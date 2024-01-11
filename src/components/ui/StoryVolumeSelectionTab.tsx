import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {motion} from 'framer-motion';

import VolumeCard from './StoryVolumeCard';
import {getStoryVolumeCards} from '../../database/volume/playableVolumes';
import {StoryVolumeTypes} from '../../services/utils/types';

export default function StorysVolumeSelectionTab() {
  const {activePage, setActivePage} = useContext(ActivePageContext);
  const storyVolumesData = getStoryVolumeCards(
    activePage.state?.volumeType as StoryVolumeTypes
  );

  return (
    <motion.div
      variants={{
        rest: {opacity: 1},
        show: {
          opacity: 1,
          transition: {staggerChildren: 0.1},
        },
      }}
      initial='rest'
      animate='show'
      className='h-full flex gap-2 w-max'
    >
      {storyVolumesData.map((v) => (
        <VolumeCard
          key={v.storyVolumeId}
          {...v}
          onClick={() =>
            setActivePage({
              location: 'storyVolumeDetail',
              state: {volumeId: v.storyVolumeId, volumeType: v.storyVolumeType},
            })
          }
        />
      ))}
    </motion.div>
  );
}
