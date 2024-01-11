export default function WrongDeviceOrientationWarner() {
  return (
    <>
      <div
        className={
          'bg-slate-950 w-full h-full place-items-center fixed top-0 left-0 z-50 text-border p-4 grid xs:hidden'
        }
      >
        <div className='p-4 bg-background border border-border relative m-4 w-full max-w-96 text-xs sm:text-sm md:text-base'>
          <strong className='font-bold'>
            Oh tidak! Layar perangkat kamu terlalu kecil untuk memainkan game
            ini.
          </strong>{' '}
          <br />
          <br />
          <p>
            Silahkan gunakan perangkat dengan lebar layar minimum 500px. Atau
            jika kamu sedang berada di orientasi layar portrait, cobalah untuk
            mengorientasikan layar perangkat kamu ke mode landscape.
          </p>
          <br />
          <p>
            Jika masih tidak berhasil, silahkan kirim email ke{' '}
            <a href='mailto:bahreesaepul1@gmail.com' target='_blank'>
              bahreesaepul1@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
