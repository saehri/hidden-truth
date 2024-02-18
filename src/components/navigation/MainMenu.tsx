import PlayerMenu from '../player-menu/PlayerMenu';
import SettingDialog from '../dialog/setting/SettingDialog';

export default function MainMenu() {
  return (
    <nav className='flex flex-col fixed right-3 top-[15%] gap-4'>
      <PlayerMenu />

      <SettingDialog />
    </nav>
  );
}
