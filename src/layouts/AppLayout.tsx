import MainNavigation from '../components/navigation/MainNavigation';

interface AppLayout {
  children: React.ReactNode;
}

export default function AppLayout({children}: AppLayout) {
  return (
    <main
      id='main'
      className='bg-slate-950 h-full w-screen flex flex-col fixed top-0 left-0'
    >
      <section className='w-full h-full 2xl:h-max max-w-[2080px] 3xl:mx-auto grid place-items-center'>
        <div
          id='game__screen-size'
          className='w-full h-full 2xl:h-max 2xl:pt-[calc((9/20)*100%)] md:border border-border relative bg-[#08222D]'
        >
          <div
            id='game__container'
            className='absolute top-0 left-0 w-full h-full'
          >
            <MainNavigation />
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
