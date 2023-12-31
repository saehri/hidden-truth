import {Outlet} from 'react-router-dom';
import MainNavigation from '../components/navigation/MainNavigation';

export default function SecureLayout() {
  return (
    <main
      id='main'
      className='bg-slate-950 h-screen w-screen grid place-items-center'
    >
      <section className='w-full'>
        <div
          id='game__screen-size'
          className='pt-[calc((9/20)*100%)] border border-border relative bg-[#08222D]'
        >
          <div
            id='game__container'
            className='absolute top-0 left-0 w-full h-full'
          >
            <MainNavigation />
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}
