import {Dispatch, SetStateAction, useContext, useState} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {motion} from 'framer-motion';

import ChapterCard from './ChapterCard';

type TabTypes = 'special' | 'main' | 'premium';

interface TabContent extends React.HTMLAttributes<HTMLDivElement> {
  activeTab: TabTypes;
}

interface TabButton extends React.HTMLAttributes<HTMLButtonElement> {
  tabId: TabTypes;
  activeTab: TabTypes;
  setActiveTab: Dispatch<SetStateAction<TabTypes>>;
}

const tabButtons: {id: TabTypes}[] = [
  {id: 'special'},
  {id: 'main'},
  {id: 'premium'},
];

export default function ChapterSelectionTab() {
  const [activeTab, setActiveTab] = useState<TabTypes>('special');

  return (
    <>
      <motion.div
        variants={{
          rest: {opacity: 1},
          show: {
            opacity: 1,
            transition: {staggerChildren: 0.1, delayChildren: 0.3},
          },
        }}
        animate='show'
        initial='rest'
        className='grid grid-cols-3 gap-1 pl-4 3xl:pl-6'
      >
        {tabButtons.map((tabBtn) => (
          <TabButton
            key={tabBtn.id}
            tabId={tabBtn.id}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        ))}
      </motion.div>

      <TabContent activeTab={activeTab} />
    </>
  );
}

function TabButton({setActiveTab, activeTab, tabId}: TabButton) {
  return (
    <motion.button
      variants={{
        rest: {opacity: 0, x: 50},
        show: (i: number) => ({opacity: i, x: 0}),
      }}
      custom={activeTab === tabId ? 1 : 0.5}
      animate={{opacity: activeTab === tabId ? 1 : 0.5}}
      onClick={() => setActiveTab(tabId)}
      className='uppercase border border-border border-b-0 p-2 pt-3 bg-gradient-to-b from-[#3E350B] via-[#3E350B]/50 to-transparent outline-none 3xl:text-3xl text-[#FBE886] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:rounded-full after:pointer-events-none after:blur-md after:opacity-0 after:hover:opacity-20 after:transition-opacity'
    >
      {tabId} Chapters
    </motion.button>
  );
}

function TabContent({activeTab}: TabContent) {
  const {activePage, setActivePage} = useContext(ActivePageContext);

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
      className='min-h-[57.77%] flex gap-1 mb-8'
    >
      <ChapterCard
        chapterName='pemilu'
        onClick={() =>
          setActivePage({
            location: 'chapterDetail',
            state: {chapterId: 'pemilu24', fromPage: activePage.location},
          })
        }
      />
    </motion.div>
  );
}
