import {homepageBackground} from '../assets/backgrounds/homepageBackground';
import WithMusicModal from '../components/audio/WithMusicModal';
import MainNavigation from '../components/navigation/MainNavigation';
import FullscreenBackground from '../components/ui/FullscreenBackground';
import WrongDeviceOrientationWarner from '../components/ui/WrongDeviceOrientationWarner';

interface AppLayout {
  children: React.ReactNode;
}

export default function AppLayout({children}: AppLayout) {
  return (
    <>
      <main
        id='main'
        className='bg-slate-950 h-full w-screen grid place-items-center fixed top-0 left-0'
      >
        <section className='w-full h-full 3xl:mx-auto grid place-items-center'>
          <div
            id='game__screen-size'
            className='w-full h-full lg:border border-border relative bg-[#08222D]'
          >
            <div
              id='game__container'
              className='absolute top-0 left-0 w-full h-full'
            >
              {/* <MainNavigation />
              {children} */}
            </div>
          </div>
        </section>
      </main>

      <div className='fixed top-0 left-0 z-[1000] w-full h-full bg-background grid place-items-center'>
        <div className='bg-white p-4 max-w-[50%] relative z-50'>
          <div className='bg-slate-100 p-2 border border-slate-200'>
            <h1 className='mb-6 font-semibold text-xs lg:text-base text-slate-800'>
              Hi, terima kasih sudah mengikuti tahap beta test kami!
            </h1>

            <p className='text-slate-600 text-xs lg:text-sm'>
              Game ini sekarang sedang dalam tahap penyempurnaan akhir. Oleh
              karena itu, untuk sementara akses ke game ini kami tutup terlebih
              dahulu sampai dengan tanggal 29 February 2024.
              <br />
              <br />
              Jangan khawatir, kami akan memberitahu kamu kembali saat proses
              penyempuraan ini sudah selesai. Sampai jumpa kembali!
            </p>
          </div>
        </div>

        <FullscreenBackground
          imageLink={homepageBackground}
          placeholderLink={
            'https://utfs.io/f/9e30c3bc-3310-4497-a0d1-793a1ac62ae8-e5s95w.webp'
          }
          className='brightness-50'
        />
      </div>

      <WithMusicModal />
      <WrongDeviceOrientationWarner />
    </>
  );
}
