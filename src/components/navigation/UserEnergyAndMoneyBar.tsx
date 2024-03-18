import {useContext} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import EnergyBar from './EnergyBar';
import MoneyBar from './MoneyBar';

export default function GameUserEnergyAndMoneyBarWrapper() {
  const {activePage} = useContext(ActivePageContext);
  const isHidden =
    activePage.location === 'startPage' || activePage.location === 'dialogPage';

  return (
    <motion.div
      key={activePage.location}
      initial={{y: -100, opacity: 0.1}}
      animate={{y: 0, opacity: 1}}
      transition={{delay: 0.4}}
      className={twMerge('pt-2 pl-2', isHidden ? 'hidden' : 'block')}
    >
      <div className='pt-1 w-max'>
        <div className='grid grid-cols-[max-content,_1fr] gap-6'>
          <EnergyBar />
          {/* <MoneyBar /> */}
        </div>
      </div>
    </motion.div>
  );
}
