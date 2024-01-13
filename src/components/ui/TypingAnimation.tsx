import {motion} from 'framer-motion';
import {Fragment} from 'react';

interface Props {
  text: string;
}

export default function TypingAnimation({text}: Props) {
  // The underscore (_) sign will be used to determine the span element value
  const textSequence = text.replaceAll(' ', '_').split('');

  return (
    <motion.p
      variants={{
        rest: {opacity: 1},
        show: {
          opacity: 1,
          transition: {
            delayChildren: 2,
            staggerChildren: 0.01,
          },
        },
      }}
      initial='rest'
      animate='show'
      className='absolute w-full h-36 flex flex-wrap bottom-0 left-0 p-8 pr-96 text-yellow-500 text-xs md:text-base lg:text-lg bg-gradient-to-t from-slate-950 to-slate-950/40'
    >
      {textSequence.length > 1 &&
        textSequence.map((t, i) => (
          <Fragment key={`letter-${i}`}>
            {t !== '_' ? (
              <motion.span
                variants={{
                  rest: {opacity: 0, y: 5},
                  show: {opacity: 1, y: 0},
                }}
                animate={{opacity: 1, y: 0}}
                className='block'
              >
                {t}
              </motion.span>
            ) : (
              <span>&nbsp;</span>
            )}
          </Fragment>
        ))}
    </motion.p>
  );
}
