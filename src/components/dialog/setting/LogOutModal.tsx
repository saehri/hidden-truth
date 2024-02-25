import {memo, useState} from 'react';
import useUserController from '../../../services/controller/userController';
import Icons from '../../ui/Icons';

interface LogOutModal {}

const LogOutModal = memo(({}: LogOutModal) => {
  const userController = useUserController();
  const [isAskingToLogout, setAskingToLogout] = useState<boolean>(false);
  const [isLoggingOut, setLoggingout] = useState<boolean>(false);

  function handleLoggingOut() {
    setLoggingout(true);
    userController.logout();

    setTimeout(() => {
      setLoggingout(false);
      setAskingToLogout(false);
      window.location.reload();
    }, 1000);
  }

  return (
    <>
      <button
        onClick={() => setAskingToLogout(!isAskingToLogout)}
        className='bg-red-600 text-white p-1 px-2 rounded-md'
      >
        Log Out
      </button>

      {isAskingToLogout && (
        <div className='fixed top-0 left-0 w-full h-full z-50 grid place-items-center p-4'>
          <div className='bg-slate-50 p-4 relative z-20 w-full max-w-96 rounded-md border border-slate-200'>
            <p className='text-slate-800 font-semibold text-sm sm:text-base mb-6'>
              Yakin mau log out?
            </p>

            <div className='text-sm flex gap-2'>
              <button
                onClick={() => setAskingToLogout(false)}
                className='bg-slate-50 border border-slate-400 p-1 px-2 w-full block rounded-md text-slate-800 font-medium shadow-sm'
              >
                Enggak
              </button>

              <button
                onClick={handleLoggingOut}
                className='bg-red-600 border border-red-800 p-1 px-2 w-full rounded-md text-white shadow-sm grid place-items-center'
              >
                {!isLoggingOut ? (
                  'Iya'
                ) : (
                  <span className='flex gap-2 items-center'>
                    Memproses{' '}
                    <Icons.ProgressSpinner className='animate-spin w-4 h-4' />
                  </span>
                )}
              </button>
            </div>

            <span className='text-slate-600 mt-4 block'>
              Dengan mengklik "Iya" kamu akan dikeluarkan dari aplikasi ini.
              Proses log in mungkin dibutuhkan jika kamu ingin megakses aplikasi
              ini kembali.
            </span>
          </div>

          <div
            onClick={() => setAskingToLogout(false)}
            className='absolute top-0 left-0 w-full h-full bg-slate-950/80'
          ></div>
        </div>
      )}
    </>
  );
});

export default LogOutModal;
