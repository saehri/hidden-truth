import Icons from '../ui/Icons';

export default function MainMenu() {
  return (
    <nav className='flex flex-col items-center absolute right-3 top-28 gap-8 z-50 bg-blue-600/20 w-12 py-6'>
      <Icons.User />
      <Icons.NotificationUnread />
      <Icons.ShoppingBag />
    </nav>
  );
}
