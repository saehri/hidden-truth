import PlayerMenu from '../player-menu/PlayerMenu';

export default function MainMenu() {
  return (
    <nav className='flex flex-col absolute right-3 top-36 gap-4 z-50'>
      <PlayerMenu />
    </nav>
  );
}
