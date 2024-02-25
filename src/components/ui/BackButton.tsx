import React, {useContext} from 'react';
import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';
import {
  ActivePageContext,
  ActivePageTypes,
} from '../../services/API/pageViewingManagerAPI';

import Button from './Button';
import Icons from './Icons';

interface BackButton extends React.HTMLAttributes<HTMLButtonElement> {
  buttonName?: string;
  goBackTo: ActivePageTypes;
  iconType: 'back' | 'close';
}

export default function BackButton({
  goBackTo,
  className,
  iconType = 'back',
}: BackButton) {
  const {setActivePage} = useContext(ActivePageContext);

  const ButtonIcon: Record<'back' | 'close', React.ReactNode> = {
    back: <Icons.Back />,
    close: <Icons.CloseCircled />,
  };

  return (
    <motion.div
      initial={{opacity: 0, scale: 0.9}}
      animate={{opacity: 1, scale: 1}}
      transition={{delay: 0.3}}
    >
      <Button
        onClick={() => setActivePage(goBackTo)}
        className={twMerge(
          'absolute z-50 flex gap-3 items-center p-0 bottom-8 left-4',
          className
        )}
      >
        <span>{ButtonIcon[iconType]}</span>
      </Button>
    </motion.div>
  );
}
