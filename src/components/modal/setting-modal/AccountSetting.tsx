export default function AccountSetting() {
  return (
    <div className='flex flex-col gap-2'>
      {/* <div className='flex justify-between items-center text-sm text-slate-300'>
        <p className='uppercase'>Email</p>
        <p>user@email.com</p>
      </div>

      <div className='flex justify-between items-center text-sm text-slate-300'>
        <p className='uppercase'>Password</p>
        <p>******</p>
      </div> */}

      <div className='flex justify-end text-sm text-slate-300'>
        <LogOutButton />
      </div>
    </div>
  );
}

function LogOutButton() {
  function handleLoggingOut() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <button
      onClick={handleLoggingOut}
      className='bg-red-500/50 border-x border-red-400 uppercase text-red-200 p-1 w-32 hover:w-36 transition-[width]'
    >
      RESET PROGRESS
    </button>
  );
}
