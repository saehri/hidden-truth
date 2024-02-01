import Icons from '../ui/Icons';
import Button from '../ui/Button';
import PlayerMenu from '../ui/PlayerMenu';

export default function MainMenu() {
  const buttonIconSizes = 'w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8';

  return (
    <li
      id='game__user-navigation'
      className='flex gap-2 sm:gap-4 md:gap-6 xl:gap-8 3xl:gap-12'
    >
      <Button>
        <Icons.ShoppingBag className={buttonIconSizes} />
      </Button>

      <Button>
        <Icons.NotificationUnread className={buttonIconSizes} />
      </Button>

      <PlayerMenu />

      <Button>
        <Icons.Setting className={buttonIconSizes} />
      </Button>
    </li>
  );
}
