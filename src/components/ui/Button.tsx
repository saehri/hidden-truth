import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({children, className, ...rest}: ButtonProps) {
  return (
    <motion.button
      whileTap={{scale: 0.6}}
      className={twMerge(
        'bg-green-800/90 w-12 h-12 relative group shadow-sm shadow-slate-950/30',
        className
      )}
      {...(rest as any)}
    >
      <span className='z-30 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        {children}
      </span>

      <span className='absolute top-0 left-0 w-full h-full bg-green-50 p-1 block rotate-12 group-hover:rotate-6 transition-transform shadow-sm'>
        <span className='block w-full h-full bg-slate-100 border border-slate-200'></span>
      </span>
    </motion.button>
  );
}
