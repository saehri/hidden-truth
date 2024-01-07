import {motion} from 'framer-motion';
import Icons from '../ui/Icons';
import Button from '../ui/Button';
import {useLocation} from 'react-router-dom';

export default function GameUserNavigation() {
  const location = useLocation();
  const isUserPlayingGame = location.pathname === '/play';

  const buttonIconSizes = 'w-6 h-6 3xl:w-10 3xl:h-10';

  return (
    <motion.li
      animate={{
        y: isUserPlayingGame ? '-200%' : 0,
        opacity: isUserPlayingGame ? 0 : 1,
        transition: {duration: 0.2},
      }}
      id='game__user-navigation'
      className='flex gap-6 2xl:gap-8 3xl:gap-12'
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
