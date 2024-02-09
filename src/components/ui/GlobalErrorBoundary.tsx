import FullscreenBackground from './FullscreenBackground';
import {homepageBackground} from '../../assets/backgrounds/homepageBackground';

export default function GlobalErrorBoundary({error, resetErrorBoundary}: any) {
  return (
    <div className='w-full h-full p-6 relative' role='alert'>
      <div className='bg-background p-4 border border-border max-w-96 z-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <h1 className='text-sm lg:text-base text-yellow-500 font-medium mb-8'>
          Oh tidak sepertinya ada kesalahan saat kami mencoba merender halaman
          ini.
        </h1>

        <button
          onClick={() => location.reload()}
          className='bg-gradient-to-t mb-4 uppercase text-xs lg:text-sm from-yellow-700 to-yellow-200 block p-1 pt-2 w-full text-yellow-950'
        >
          Kembali ke halaman utama
        </button>

        <p className='text-xs lg:text-sm text-yellow-600'>
          Jika masalah ini terus berulang silahkan hubungi customer service kami
          di{' '}
          <a href='mailto:bahreesaepul1@gmail.com' className='text-yellow-400'>
            bahreesaepul1@gmail.com.
          </a>
        </p>

        <p className='text-xs bg-red-800 text-slate-50 p-1 mt-3'>
          Pesan error: {error.message}
        </p>
      </div>

      <FullscreenBackground
        imageLink={homepageBackground}
        placeholderLink={
          'https://utfs.io/f/9e30c3bc-3310-4497-a0d1-793a1ac62ae8-e5s95w.webp'
        }
        className='brightness-50'
      />
    </div>
  );
}
