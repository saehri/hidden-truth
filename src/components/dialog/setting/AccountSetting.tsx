import useUserController from '../../../services/controller/userController';

export default function AccountSetting() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center text-sm text-slate-300'>
        <p className='uppercase'>Email</p>
        <p>user@email.com</p>
      </div>

      <div className='flex justify-between items-center text-sm text-slate-300'>
        <p className='uppercase'>Password</p>
        <p>******</p>
      </div>

      <div className='flex justify-end text-sm text-slate-300'>
        <LogOutButton />
      </div>
    </div>
  );
}

function LogOutButton() {
  const userController = useUserController();

  function handleLoggingOut() {
    userController.logout();
    window.location.reload();
  }

  return (
    <button
      onClick={handleLoggingOut}
      className='bg-red-500/50 border-x border-red-400 uppercase text-slate-50 p-1 w-20 hover:w-24 transition-[width]'
    >
      Log Out
    </button>
  );
}
