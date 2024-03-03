import {motion} from 'framer-motion';
import {StorylineCardTypes} from '../../services/utils/types';

import {barCode} from '../../assets/images/barCode';

const stripedGradient = {
  backgroundImage:
    'linear-gradient(45deg, #e3123c 12.50%, #d1cb8e 12.50%, #d1cb8e 25%, #38227a 25%, #38227a 37.50%, #d1cb8e 37.50%, #d1cb8e 50%, #e3123c 50%, #e3123c 62.50%, #d1cb8e 62.50%, #d1cb8e 75%, #38227a 75%, #38227a 87.50%, #d1cb8e 87.50%, #d1cb8e 100%)',
  backgroundSize: '113.14px 113.14px',
};

interface Props extends StorylineCardTypes {
  isActive: boolean;
  onClick: any;
}

export default function StorylineCard({
  storylineTitle,
  difficulty,
  isActive,
  storylineCardBackground,
  onClick,
}: Props) {
  return (
    <motion.div
      variants={{
        rest: {opacity: 0, x: 50, rotate: 15, y: 200},
        show: {opacity: isActive ? 1 : 0.8, x: 0, rotate: 0, y: 0},
      }}
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.8,
        filter: isActive ? 'blur(0px)' : 'blur(1px)',
      }}
      className='w-80 xs:w-96 group'
    >
      <div className='w-full pt-[calc((4/3)*100%)] relative shadow-md shadow-slate-950'>
        <div
          className='absolute top-0 left-0 w-full h-full p-4'
          style={stripedGradient}
        >
          <div className='bg-yellow-100 w-full h-full p-4 pt-10 relative z-40 shadow-sm shadow-slate-950/30 riggedPaperEffect overflow-hidden'>
            <div className='relative z-30 border border-slate-600/30 border-dotted px-4 py-3 h-full flex flex-col justify-between'>
              <div>
                <div className='w-full pt-[calc((9/20)*100%)] bg-yellow-300 mb-2 relative'>
                  <img
                    src={storylineCardBackground}
                    className='absolute top-0 left-0 w-full h-full object-cover'
                    alt=''
                  />
                </div>

                <h4 className='text-left text-base font-body font-bold text-green-900 block w-full border-b border-slate-600/30 pb-1 mb-3'>
                  {storylineTitle}
                </h4>

                <p className='text-green-900/80 text-xs leading-4 text-justify font-medium font-body'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequatur, dolorem? Corporis, ex eveniet, numquam possimus
                  fugiat quaerat veritatis impedit quisquam aliquid mollitia
                  fugit accusamus cupiditate!
                </p>
              </div>

              <div className='flex w-full justify-between items-end'>
                <div className='flex flex-col gap-1'>
                  <span className='text-xs text-green-800 font-semibold font-body'>
                    Hadiah
                  </span>

                  <div className='flex gap-1'>
                    <div className='w-8 h-8 bg-slate-300'></div>
                    <div className='w-8 h-8 bg-slate-300'></div>
                    <div className='w-8 h-8 bg-slate-300'></div>
                  </div>
                </div>

                <button
                  onClick={onClick}
                  className='text-yellow-50 p-2 pr-6 rounded-full font-medium text-sm flex gap-2 items-center bg-gradient-to-l from-green-950 to-green-800 hover:from-green-800 hover:to-green-700 transition-all h-max'
                >
                  <span className='w-3 h-3 rounded-full border-4 border-yellow-200'></span>
                  <span className='leading-3'>Selidiki</span>
                </button>
              </div>
            </div>

            <div className='w-24 h-24 rounded-full bg-yellow-300 absolute -bottom-12 left-1/2 -translate-x-1/2 mix-blend-overlay'></div>
          </div>

          <StorylineCardYellowPaper />
          <StorylineCardPolaroid />
        </div>
      </div>
    </motion.div>
  );
}

function StorylineCardYellowPaper() {
  return (
    <div className='absolute top-0 left-0 w-full h-full rotate-3 shadow-lg shadow-slate-950/40 sm:group-hover:rotate-1 transition-transform bg-green-900'></div>
  );
}

function StorylineCardPolaroid() {
  return (
    <div className='absolute w-24 h-20 top-[10%] -right-6 rotate-6 p-1 pb-3 bg-white sm:group-hover:rotate-12 transition-transform'>
      <div className='bg-slate-800 w-full h-full'></div>
    </div>
  );
}
