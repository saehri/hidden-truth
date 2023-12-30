import {Outlet} from 'react-router-dom';

export default function SecureLayout() {
  return (
    <main
      id='main'
      className='bg-slate-950 h-screen w-screen grid place-items-center'
    >
      <section className='w-full 3xl:max-w-[2000px] mx-auto'>
        <div
          id='game__screen-size'
          className='pt-[calc((9/20)*100%)] border border-border relative'
        >
          <div id='game__container' className='absolute top-0 left-0'>
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}
