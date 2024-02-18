import {useContext} from 'react';
import {motion} from 'framer-motion';

import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {getStorylineCards} from '../database/storyline/storylines';

import BackButton from '../components/ui/BackButton';
import StorylineCard from '../components/ui/StorylineCard';

export default function StorylineSelectionPage() {
  return (
    <>
      <section className='relative w-full h-full'>
        <BackButton
          buttonName='Tipe alur cerita'
          goBackTo={{location: 'homepage'}}
          iconType='back'
        />

        <div className='w-full h-full pt-24 p-4 pb-28'>
          <Storylines />
        </div>
      </section>
    </>
  );
}

function Storylines() {
  const {setActivePage} = useContext(ActivePageContext);
  const storylineCards = getStorylineCards();

  return (
    <motion.div
      variants={{
        rest: {opacity: 1},
        show: {
          opacity: 1,
          transition: {staggerChildren: 0.1, delayChildren: 0.3},
        },
      }}
      initial='rest'
      animate='show'
      className='w-full h-full flex gap-2'
    >
      {storylineCards.map((card) => (
        <StorylineCard
          key={card.storylineId}
          {...card}
          onClick={() =>
            setActivePage({
              location: 'storylineDetailPage',
              state: {
                storylineId: card.storylineId,
                storylineType: card.storylineType,
                storylineTitle: card.storylineTitle,
              },
            })
          }
        />
      ))}
    </motion.div>
  );
}
