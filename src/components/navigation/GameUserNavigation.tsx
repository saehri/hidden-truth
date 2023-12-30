import Icons from '../ui/Icons';
import Button from '../ui/Button';

export default function GameUserNavigation() {
  const buttonIconSizes = 'w-6 h-6 3xl:w-10 3xl:h-10';

  return (
    <li id='game__user-navigation' className='flex gap-6 2xl:gap-8 3xl:gap-12'>
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
    </li>
  );
}
