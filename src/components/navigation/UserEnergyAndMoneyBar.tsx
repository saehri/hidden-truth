import {motion} from 'framer-motion';

import EnergyBar from './EnergyBar';
import MoneyBar from './MoneyBar';

export default function GameUserEnergyAndMoneyBarWrapper() {
  return (
    <motion.div
      initial={{scale: 1.2, opacity: 0.1, filter: 'blur(4px)'}}
      animate={{scale: 1, opacity: 1, filter: 'blur(0px)'}}
      transition={{delay: 0.4}}
      className='w-full p-2 max-w-screen-sm mx-auto'
    >
      <div className='p-1 bg-yellow-50 w-max relative'>
        <div className='bg-slate-100 border border-slate-200 grid grid-cols-[max-content,_1fr]'>
          <EnergyBar />
          <MoneyBar />
        </div>

        <div className='absolute bg-green-800/90 top-1 left-1 -z-10 w-full h-full -rotate-1 shadow-md shadow-slate-950/40'></div>
      </div>
    </motion.div>
  );
}
