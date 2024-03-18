import {useContext} from 'react';
import SignupForm from '../components/forms/SignupForm';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';

export default function SignupPage() {
  return (
    <div className='grid grid-cols-[40%,_1fr] lg:grid-cols-[35%,_1fr] h-full'>
      <section className='p-6 bg-slate-100 hideScrollbar overflow-y-auto h-full w-full py-10 flex flex-col gap-4'>
        <section className='border-b border-slate-500 pb-4'>
          <SignupForm />

          <GotoLoginPageLink />
        </section>

        <section className="relative after:absolute after:-right-2 after:top-4 after:content-['Disabled'] after:bg-red-800 after:p-1 after:px-2 after:rounded-md after:text-yellow-500 after:pt-2 after:rotate-6 after:text-xs">
          <SignupOAuth />
        </section>
      </section>

      <div className='relative'></div>
    </div>
  );
}

function GotoLoginPageLink() {
  const {setActivePage} = useContext(ActivePageContext);

  return (
    <button
      className='text-xs lg:text-sm p-1 px-2 mt-2 text-slate-500'
      onClick={() => setActivePage({location: 'signinPage'})}
    >
      Sudah punya akun? Klik di sini untuk login.
    </button>
  );
}

function SignupOAuth() {
  return (
    <div className='w-full'>
      <h4 className='text-xs lg:text-sm mb-2 text-slate-800 text-center'>
        Atau buat akun dengan
      </h4>

      <a
        href='https://tricky-puce-walkingstick.cyclic.app/api/google'
        target='_blank'
        className='pointer-events-none opacity-50 text-xs lg:text-sm p-2 pt-3 px-2 w-full block text-center font-semibold border border-slate-300 shadow-md shadow-slate-950/30 bg-gradient-to-t from-blue-400 to-blue-50 rounded-md'
      >
        GOOGLE ACCOUNT
      </a>
    </div>
  );
}
