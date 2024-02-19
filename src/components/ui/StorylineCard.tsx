import {motion} from 'framer-motion';
import {StorylineCardTypes} from '../../services/utils/types';

import {barCode} from '../../assets/images/barCode';

const stripedGradient = {
  backgroundImage:
    'linear-gradient(45deg, #e3123c 12.50%, #d1cb8e 12.50%, #d1cb8e 25%, #38227a 25%, #38227a 37.50%, #d1cb8e 37.50%, #d1cb8e 50%, #e3123c 50%, #e3123c 62.50%, #d1cb8e 62.50%, #d1cb8e 75%, #38227a 75%, #38227a 87.50%, #d1cb8e 87.50%, #d1cb8e 100%)',
  backgroundSize: '113.14px 113.14px',
};

export default function StorylineCard({
  storylineId,
  storylineTitle,
  storylineCardBackground,
  storylineType,
  difficulty,
  requester,
  respondent,
  ...rest
}: StorylineCardTypes) {
  return (
    <motion.button
      variants={{
        rest: {opacity: 0, x: 50, rotate: 15, y: 200},
        show: {opacity: 1, x: 0, rotate: 0, y: 0},
      }}
      {...(rest as any)}
      className='w-96 group'
    >
      <div className='w-full pt-[calc((4/3)*100%)] relative shadow-md shadow-slate-950'>
        <div
          className='absolute top-0 left-0 w-full h-full p-4'
          style={stripedGradient}
        >
          <div className='bg-yellow-100 w-full h-full p-2 flex flex-col justify-between pt-10 relative z-40 shadow-sm shadow-slate-950/30 riggedPaperEffect'>
            <span className='block w-full text-left border-t border-yellow-800/20 border-dashed font-arial text-xs uppercase mr-auto pt-1 text-slate-800'>
              24 Februari 2024
            </span>

            <div className='border text-red-500 border-red-500 w-max p-1 mx-auto -rotate-6'>
              TOP SECRET
            </div>

            <div className='relative z-30'>
              <h4 className='text-left text-sm sm:text-base font-arial font-semibold text-slate-950 block w-full'>
                Kasus: {storylineTitle}
              </h4>

              <p className='text-left text-xs sm:text-sm font-arial text-slate-800'>
                Pemohon: {requester}
              </p>
              <p className='text-left text-xs sm:text-sm font-arial text-slate-800'>
                Termohon: {respondent}
              </p>
            </div>

            <div className='text-slate-800'>
              Tingkat Kesusahan: {difficulty}
            </div>

            <StorylineCardBarcode />
          </div>

          <StorylineCardYellowPaper />
          <StorylineCardPolaroid />
        </div>
      </div>
    </motion.button>
  );
}

function StorylineCardBarcode() {
  return (
    <div className='pt-1 border-t border-yellow-800/20 border-dotted'>
      <img src={barCode} className='w-24 block ml-auto' alt='' />
    </div>
  );
}

function StorylineCardYellowPaper() {
  return (
    <div className='absolute top-0 left-0 w-full h-full bg-yellow-700 rotate-6 shadow-lg shadow-slate-950/40 lg:group-hover:rotate-3 transition-transform'></div>
  );
}

function StorylineCardPolaroid() {
  return (
    <div className='absolute w-24 h-20 top-[10%] -right-6 rotate-6 p-1 pb-3 bg-white lg:group-hover:rotate-12 transition-transform'>
      <div className='bg-slate-800 w-full h-full'></div>
    </div>
  );
}
