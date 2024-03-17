import {motion} from 'framer-motion';
import {useState} from 'react';
import {createPortal} from 'react-dom';

export default function PostImageViewer({mediaLink}: {mediaLink: string}) {
  const [isImageMaximazeView, setImageMaximazeView] = useState<boolean>(false);

  return (
    <>
      <button
        className='w-full block'
        onClick={() => setImageMaximazeView(true)}
      >
        <span className='pt-[calc((9/16)*100%)] rounded-[inherit] relative block'>
          <span className='absolute top-0 left-0 w-full h-full bg-slate-300/40 block'>
            <img
              src={mediaLink}
              alt=''
              className='w-full h-full block object-contain rounded-[inherit]'
            />
          </span>
        </span>
      </button>

      {isImageMaximazeView &&
        createPortal(
          <div className='fixed top-0 left-0 w-full h-full z-40 grid place-items-center p-1 sm:p-4'>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              className='w-full max-w-[95%] sm:max-w-[70%]'
            >
              <div className='relative w-full pt-[calc((9/16)*100%)]'>
                <div className='bg-slate-600 absolute top-0 left-0 w-full h-full'>
                  <img
                    src={mediaLink}
                    alt=''
                    className='w-full h-full block object-contain'
                  />
                </div>

                <Block />
              </div>
            </motion.div>

            <Decoration />

            <motion.button
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              onClick={() => setImageMaximazeView(false)}
              className='bg-slate-950/90 block lg:bg-slate-950/60 lg:backdrop-blur-sm absolute w-full h-full top-0 left-0 -z-10'
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

function Decoration() {
  return (
    <>
      <span className='absolute w-20 h-8 bg-slate-50/10 top-0 left-0 hidden sm:block' />
      <span className='absolute w-20 h-8 bg-slate-50/10 top-0 right-0 hidden sm:block' />
      <span className='absolute w-20 h-8 bg-slate-50/10 bottom-0 left-0 hidden sm:block' />
      <span className='absolute w-20 h-8 bg-slate-50/10 bottom-0 right-0 hidden sm:block' />
    </>
  );
}

function Block() {
  return (
    <>
      <span className='absolute w-5 h-5 -top-5 -left-5 border-t border-l border-slate-50/50 hidden sm:block' />
      <span className='absolute w-5 h-5 -top-5 -right-5 border-t border-r border-slate-50/50 hidden sm:block' />
      <span className='absolute w-5 h-5 -bottom-5 -left-5 border-b border-l border-slate-50/50 hidden sm:block' />
      <span className='absolute w-5 h-5 -bottom-5 -right-5 border-b border-r border-slate-50/50 hidden sm:block' />
    </>
  );
}
