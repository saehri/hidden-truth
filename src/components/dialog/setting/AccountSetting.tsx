import LogOutModal from './LogOutModal';

export default function AccountSetting() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center text-xs text-slate-600'>
        <p>Email</p>
        <p>user@email.com</p>
      </div>

      <div className='flex justify-between items-center text-xs text-slate-600'>
        <p>Password</p>
        <p>******</p>
      </div>

      <div className='flex justify-between items-center text-xs text-slate-600'>
        <p>Keluar</p>

        <LogOutModal />
      </div>
    </div>
  );
}
