import React, {memo} from 'react';
import {motion} from 'framer-motion';

import {ReportDisinformationGameDataTypes} from '../../../services/utils/types';
import ReportDisinformationPost from './ReportDisinformationPost';

interface ReportDisinformation {
  gameData: ReportDisinformationGameDataTypes[];
}

const ReportDisinformation = memo(({gameData}: ReportDisinformation) => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className='h-full grid place-items-center p-4 py-0 overflow-hidden'
    >
      <PhoneFrame>
        <div className='h-max pb-16'>
          <Header />

          <div>
            {gameData.map((data) => (
              <ReportDisinformationPost key={data.postId} {...data} />
            ))}
          </div>
        </div>
      </PhoneFrame>
    </motion.section>
  );
});

export default ReportDisinformation;

function Header() {
  return (
    <div className='border-y border-slate-200 flex p-4 items-center justify-between'>
      <div className='w-10 h-10 rounded-full bg-slate-300'></div>
      <div className='w-10 h-10 rounded-full bg-slate-300'></div>
      <div className='w-10 h-10 rounded-full bg-slate-300'></div>
    </div>
  );
}

function PhoneFrame({children}: {children: React.ReactNode}) {
  return (
    <div className='w-full h-full relative max-w-80 lg:max-w-[450px] bg-slate-950 rounded-[5rem] rounded-bl-none rounded-br-none p-2 lg:p-4 pb-0 lg:pb-0 overflow-hidden'>
      <div className='bg-slate-50 h-full hideScrollbar rounded-[calc(5rem-16px)] pt-14 rounded-bl-none rounded-br-none overflow-y-auto'>
        {children}

        <div className='absolute w-[25%] h-8 rounded-full bg-slate-950 top-8 left-1/2 -translate-x-1/2'></div>
      </div>
    </div>
  );
}
