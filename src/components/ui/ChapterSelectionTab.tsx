import {Dispatch, SetStateAction, useState} from 'react';
import {motion} from 'framer-motion';

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
      <ChapterCard />
      <ChapterCard />
      <ChapterCard />
      <ChapterCard />
    </motion.div>
  );
}

function ChapterCard() {
  return (
    <motion.a
      href=''
      variants={{
        rest: {opacity: 0, x: 50},
        show: {opacity: 1, x: 0},
      }}
      whileHover={{y: -10}}
    >
      <article
        style={{clipPath: 'polygon(9% 0, 100% 0%, 91% 100%, 0% 100%)'}}
        className='min-w-48 3xl:min-w-72 h-full p-4 flex items-end text-base border-[1.5px] border-border relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:rounded-full after:pointer-events-none after:blur-md after:opacity-0 after:hover:opacity-20 after:transition-opacity'
      >
        <h4 className='uppercase italic text-lg text-[#FBE886] relative z-10'>
          Chapter Name
        </h4>
        <span
          className='absolute block w-full h-full top-0 left-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent'
          style={{clipPath: 'polygon(9% 0, 100% 0%, 91% 100%, 0% 100%)'}}
        ></span>
      </article>
    </motion.a>
  );
}
