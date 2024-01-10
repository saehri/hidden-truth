import MainNavigation from '../components/navigation/MainNavigation';
import FullscreenAPIHandler from '../components/ui/FullscreenAPIHandler';
import FullscreenAPISupportWarner from '../components/ui/FullscreenAPISupportWarner';
import WrongDeviceOrientationWarner from '../components/ui/WrongDeviceOrientationWarner';

interface AppLayout {
  children: React.ReactNode;
}

export default function AppLayout({children}: AppLayout) {
  return (
    <>
      <main
        id='main'
        className='bg-slate-950 h-full w-screen grid place-items-center fixed top-0 left-0 z-30 '
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

      <WrongDeviceOrientationWarner />
      <FullscreenAPISupportWarner />
      <FullscreenAPIHandler />
    </>
  );
}
