import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {motion} from 'framer-motion';

import VolumeCard from './StoryVolumeCard';
import {getStoryVolumeCards} from '../../database/volume/playableVolumes';
import {StoryVolumeTypes} from '../../services/utils/types';

export default function StorystoryVolumeSelectionTab() {
  const {activePage, setActivePage} = useContext(ActivePageContext);
  const storyVolumesData = getStoryVolumeCards(
    activePage.state?.volumeTypes as StoryVolumeTypes
  );

  return (
    <motion.div
      variants={{
        rest: {opacity: 1},
        show: {
          opacity: 1,
          transition: {staggerChildren: 0.1, delayChildren: 0.6},
        },
      }}
      initial='rest'
      animate='show'
      className='h-full flex gap-1 justify-center'
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
