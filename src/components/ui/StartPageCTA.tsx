import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {AudioContext} from '../audio/AudioWrapper';
import useUserController from '../../services/controller/userController';

export default function StartPageCTA() {
  const userController = useUserController();
  const isUserExist = Object.keys(userController.user || {}).length;

  return (
    <div className='w-full p-4 absolute bottom-0 left-0'>
      {isUserExist ? <ButtonCTA /> : <AuthCTA />}

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className='mt-6 flex justify-between w-full items-center px-4 md:px-0 text-slate-400 text-xs'>
      <div className='flex gap-4'>
        <a href='' className='hover:text-slate-50'>
          About Us
        </a>

        <a href='' className='hover:text-slate-50'>
          Email
        </a>
      </div>

      <div>USERID: null</div>
    </div>
  );
}

function AuthCTA() {
  const {setActivePage} = useContext(ActivePageContext);

  return (
    <div className='text-center text-yellow-500'>
      <p className='text-xs xs:text-sm uppercase'>
        Silahkan log in untuk melanjutkan
      </p>

      <button
        onClick={() => setActivePage({location: 'signinPage'})}
        className='mt-4 block mx-auto w-24 sm:hover:w-28 transition-[width] bg-yellow-500/20 hover:bg-yellow-500/40 border-x border-yellow-400/40 hover:border-yellow-400/60 p-1 text-sm sm:text-base text-yellow-400'
      >
        LOG IN
      </button>
    </div>
  );
}

function ButtonCTA() {
  const {setActivePage} = useContext(ActivePageContext);
  const audioController = useContext(AudioContext);

  function goToHomepage() {
    audioController.musicRef.play();
    setActivePage({location: 'homepage'});
  }

  return (
    <button
      className='block mx-auto w-24 sm:hover:w-28 transition-[width] bg-primary/60 hover:bg-primary/80 border-x border-slate-50/40 hover:border-slate-50/60 p-1 text-sm sm:text-base text-slate-50'
      onClick={goToHomepage}
    >
      PLAY
    </button>
  );
}
