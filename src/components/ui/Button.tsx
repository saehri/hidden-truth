import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({children, className, ...rest}: ButtonProps) {
  return (
    <motion.button
      whileTap={{scale: 0.6}}
      className={twMerge(
        'bg-primary/30 border border-slate-50/50 w-12 h-12 relative group shadow-sm shadow-slate-950/30',
        className
      )}
      {...(rest as any)}
    >
      <span className='z-30 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        {children}
      </span>
    </motion.button>
  );
}
