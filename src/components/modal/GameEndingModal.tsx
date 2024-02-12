import {motion} from 'framer-motion';
import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {homepageBackground} from '../../assets/backgrounds/homepageBackground';
interface GameEndingModal {
  status: 'win' | 'over';
}

export default function GameEndingModal({status}: GameEndingModal) {
  const {activePage, setActivePage} = useContext(ActivePageContext);

  return (
    <div className='fixed top-0 left-0 w-full h-full z-[100] grid place-items-center'>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {delay: 0}}}
        transition={{delay: 0.5}}
        className='w-full h-full bg-slate-950/95 absolute top-0 left-0 -z-10'
      ></motion.div>

      {status === 'win' && <FireWorks />}

      <motion.div
        initial={{y: 200, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 200, opacity: 0, transition: {delay: 0}}}
        transition={{delay: 0.8}}
        className='relative z-50 w-full max-w-[500px] min-h-52 lg:min-h-64 p-4 h-max bg-background border border-border pt-6 rounded-md flex flex-col justify-end'
      >
        <h4 className='uppercase font-semibold text-slate-950 text-sm lg:text-lg absolute -top-5 left-1/2 -translate-x-1/2 w-max bg-slate-300 p-1 pt-2 px-3 rounded-full'>
          {status === 'win' ? '🎉 SELAMAT, KAMU MENANG! 🎉' : 'KAMU GAGAL'}
        </h4>

        <div className='max-w-[75%] lg:max-w-[70%] text-yellow-300'>
          <p className='drop-shadow-md font-normal text-xs lg:text-base'>
            {status === 'win'
              ? 'Kerja bagus detektif! Kamu memang luar biasa.'
              : 'Jangan khawatir, kamu masih bisa untuk mencoba kembali. Semangat!'}
          </p>
        </div>

        <div className='absolute z-[-1] top-0 left-0 w-full h-full overflow-hidden rounded-md'>
          <img
            src={homepageBackground}
            alt=''
            className='w-full h-full object-cover brightness-50'
          />
        </div>

        <button
          onClick={() =>
            setActivePage({
              location: 'storylineDetailPage',
              state: {
                storylineId: activePage?.state?.storylineId as string,
                storylineType: activePage?.state?.storylineType as string,
              },
            })
          }
          className='w-[25%] group border-none outline-none z-10 block mx-auto absolute -bottom-5 -right-5 lg:-bottom-8 lg:-right-8 shadow-xl shadow-slate-950 rounded-full'
        >
          <span className='block w-full pt-[100%] relative'>
            <span className='yellow--layer block absolute top-0 left-0 w-full h-full p-1 lg:p-2 3xl:p-3 rounded-full bg-gradient-to-t from-[#453B06] via-[#BFA622] to-[#FFF8D1] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:rounded-full after:pointer-events-none after:blur-md after:opacity-0 after:group-hover:opacity-20 after:transition-opacity'>
              <span className='dark-blue--layer block rounded-full w-full h-full bg-[#002534] p-[2px] lg:p-1 3xl:p-2'>
                <span className='relative blue-layer grid place-items-center overflow-hidden rounded-full w-full h-full bg-gradient-to-t from-transparent via-[#22A2D3]/50 to-[#D8F4FF] border-2 border-[#3988A7]'>
                  <span className='relative z-10 text-lg 3xl:text-xl font-normal pointer-events-none text-white translate-y-1'>
                    KEMBALI
                  </span>
                </span>
              </span>
            </span>
          </span>
        </button>
      </motion.div>
    </div>
  );
}

function FireWorks() {
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className='w-full max-w-52 lg:max-w-96 absolute top-0 lg:bottom-0 right-0 lg:left-1/2 lg:-translate-x-1/2 z-50'
      >
        <div className='relative w-full pt-[100%]'>
          <img
            src='/images/fireworks.gif'
            draggable={false}
            alt=''
            className='w-full h-full absolute top-0 left-0'
          />
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className='w-full max-w-52 lg:max-w-96 absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 z-50'
      >
        <div className='relative w-full pt-[100%]'>
          <img
            src='/images/fireworks.gif'
            draggable={false}
            alt=''
            className='w-full h-full absolute top-0 left-0'
          />
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className='w-full max-w-96 absolute top-1/2 left-0 -translate-y-1/2 z-50 hidden lg:block'
      >
        <div className='relative w-full pt-[100%]'>
          <img
            src='/images/fireworks.gif'
            draggable={false}
            alt=''
            className='w-full h-full absolute top-0 left-0'
          />
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className='w-full max-w-96 absolute top-1/2 right-0 -translate-y-1/2 z-50 hidden lg:block'
      >
        <div className='relative w-full pt-[100%]'>
          <img
            src='/images/fireworks.gif'
            draggable={false}
            alt=''
            className='w-full h-full absolute top-0 left-0'
          />
        </div>
      </motion.div>
    </>
  );
}
