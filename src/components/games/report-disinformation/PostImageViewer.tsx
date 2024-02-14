import {motion} from 'framer-motion';
import {useState} from 'react';
import {createPortal} from 'react-dom';

export default function PostImageViewer({mediaLink}: {mediaLink: string}) {
  const [isImageMaximazeView, setImageMaximazeView] = useState<boolean>(false);

  return (
    <>
      <button
        className='w-full rounded-xl block'
        onClick={() => setImageMaximazeView(true)}
      >
        <span className='pt-[calc((9/16)*100%)] rounded-[inherit] relative block'>
          <span className='absolute top-0 left-0 w-full h-full bg-slate-300 rounded-[inherit] block'>
            <img
              src={mediaLink}
              alt=''
              className='w-full h-full block object-cover rounded-[inherit]'
            />
          </span>
        </span>
      </button>

      {isImageMaximazeView &&
        createPortal(
          <div className='fixed top-0 left-0 w-full h-full z-40 grid place-items-center p-4'>
            <motion.div
              initial={{opacity: 0, scale: 0.9}}
              animate={{opacity: 1, scale: 1}}
              className='w-full max-w-[70%]'
            >
              <div className='relative w-full pt-[calc((9/16)*100%)]'>
                <div className='bg-slate-950 rounded-xl absolute top-0 left-0 w-full h-full overflow-hidden'>
                  <img
                    src={mediaLink}
                    alt=''
                    className='w-full h-full block object-contain'
                  />
                </div>
              </div>
            </motion.div>

            <motion.button
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              onClick={() => setImageMaximazeView(false)}
              className='bg-slate-950/80 block lg:backdrop-blur-sm absolute w-full h-full top-0 left-0 -z-10'
            >
              <span className='sr-only'>Close image maximize view</span>
            </motion.button>
          </div>,
          document.getElementById('emtris__dialog') as
            | Element
            | DocumentFragment
        )}
    </>
  );
}
