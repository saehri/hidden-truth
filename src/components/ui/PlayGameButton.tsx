import {motion} from 'framer-motion';

export default function PlayGameButton() {
  return (
    <button className='absolute w-[11.25%] -top-[130%] left-1/2 -translate-x-1/2 p-2 3xl:p-4 group'>
      <span className='sr-only'>Play game</span>

      <span className='block w-full pt-[100%] relative'>
        <span className='yellow--layer block absolute top-0 left-0 w-full h-full p-2 3xl:p-3 rounded-full bg-gradient-to-t from-[#453B06] via-[#BFA622] to-[#FFF8D1] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:rounded-full after:pointer-events-none after:blur-md after:opacity-0 after:group-hover:opacity-20 after:transition-opacity'>
          <span className='dark-blue--layer block rounded-full w-full h-full bg-[#002534] p-1 3xl:p-2'>
            <span className='relative blue-layer grid place-items-center overflow-hidden rounded-full w-full h-full bg-gradient-to-t from-transparent via-[#22A2D3]/50 to-[#D8F4FF] border-2 border-[#3988A7]'>
              <span className='relative z-10 text-4xl 3xl:text-6xl font-normal pointer-events-none text-white translate-y-1'>
                PLAY
              </span>
            </span>
          </span>
        </span>
      </span>

      <ButtonRing />
    </button>
  );
}

function ButtonRing() {
  return (
    <motion.svg
      viewBox='0 0 90 82'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='absolute top-0 left-0 w-full h-full'
      initial={{rotate: 0, scale: 1}}
      whileHover={{
        rotate: 360,
        scale: 1.1,
        transition: {rotate: {repeat: Infinity, duration: 0.8, ease: 'linear'}},
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M27.439 80.9177C11.9175 74.4153 0.99994 58.9953 0.999941 41.0002C0.999942 23.0051 11.9175 7.58519 27.439 1.0828L27.439 0.000244141C11.3497 6.55923 -5.81946e-05 22.4449 -5.9e-05 41.0002C-5.98054e-05 59.5556 11.3496 75.4413 27.439 82.0002L27.439 80.9177Z'
        fill='#867209'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M62.561 1.08256C78.0825 7.58495 89.0001 23.0049 89.0001 41C89.0001 58.9951 78.0825 74.415 62.561 80.9174L62.561 82C78.6503 75.441 90.0001 59.5553 90.0001 41C90.0001 22.4447 78.6504 6.55899 62.561 0L62.561 1.08256Z'
        fill='#867209'
      />
    </motion.svg>
  );
}
