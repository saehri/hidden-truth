import {useContext} from 'react';
import {motion} from 'framer-motion';
import {
  ActivePageContext,
  ActivePageTypes,
} from '../../services/API/pageViewingManagerAPI';

import Button from './Button';
import Icons from './Icons';
import {twMerge, ClassNameValue} from 'tailwind-merge';

interface BackButton extends React.HTMLAttributes<HTMLButtonElement> {
  buttonName?: string;
  goBackTo: ActivePageTypes;
  iconStyle?: ClassNameValue;
  iconType?: 'back' | 'close';
}

export default function BackButton({
  buttonName,
  iconStyle,
  goBackTo,
  className,
  iconType = 'back',
}: BackButton) {
  const {setActivePage} = useContext(ActivePageContext);

  return (
    <Button
      onClick={() => setActivePage(goBackTo)}
      className={twMerge(
        'absolute z-50 flex gap-3 items-center p-0',
        className
      )}
    >
      <span
        className={twMerge(
          'bg-yellow-800/50 block border border-border border-t-0 relative z-20 border-l-0 p-1 xl:p-2 pr-3 sm:pr-4 xl:pr-8 md:pl-2 rounded-br-2xl',
          iconStyle
        )}
      >
        {iconType === 'back' ? (
          <Icons.Back className='w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8' />
        ) : (
          <Icons.CloseCircled className='w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8' />
        )}
      </span>

      {buttonName?.length && (
        <motion.span
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          className='text-border text-xs lg:text-sm 3xl:text-base uppercase font-[500] text-yellow-500'
        >
          {buttonName}
        </motion.span>
      )}
    </Button>
  );
}
