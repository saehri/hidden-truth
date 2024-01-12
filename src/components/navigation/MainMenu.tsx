import {motion} from 'framer-motion';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {useContext} from 'react';

import Icons from '../ui/Icons';
import Button from '../ui/Button';

export default function MainMenu() {
  const {activePage} = useContext(ActivePageContext);
  const isUserPlayingGame = activePage.location === 'game';

  const buttonIconSizes = 'w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8';

  return (
    <motion.li
      animate={{
        y: isUserPlayingGame ? '-200%' : 0,
        opacity: isUserPlayingGame ? 0 : 1,
        transition: {duration: 0.2},
      }}
      id='game__user-navigation'
      className='flex gap-2 sm:gap-4 md:gap-6 xl:gap-8 3xl:gap-12'
    >
      <Button>
        <Icons.ShoppingBag className={buttonIconSizes} />
      </Button>

      <Button>
        <Icons.NotificationUnread className={buttonIconSizes} />
      </Button>

      <Button>
        <Icons.Briefcase className={buttonIconSizes} />
      </Button>

      <Button>
        <Icons.Setting className={buttonIconSizes} />
      </Button>
    </motion.li>
  );
}
