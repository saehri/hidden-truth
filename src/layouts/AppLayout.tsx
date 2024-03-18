import WithMusicModal from '../components/audio/WithMusicModal';
import MainNavigation from '../components/navigation/MainNavigation';

interface AppLayout {
  children: React.ReactNode;
}

export default function AppLayout({children}: AppLayout) {
  return (
    <>
      <main
        id='main'
        className='h-full w-screen grid place-items-center fixed top-0 left-0'
      >
        <section className='w-full h-full grid place-items-center'>
          <div
            id='game__screen-size'
            className='w-full h-full relative bg-slate-950'
          >
            <div
              id='game__container'
              className='w-full max-w-screen-2xl absolute top-0 left-1/2 -translate-x-1/2 h-full'
            >
              <MainNavigation />
              {children}
            </div>
          </div>
        </section>
      </main>

      <WithMusicModal />
    </>
  );
}
