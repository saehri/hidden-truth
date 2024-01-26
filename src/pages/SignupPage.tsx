import SignupForm from '../components/forms/SignupForm';
import FullscreenBackground from '../components/ui/FullscreenBackground';

export default function SignupPage() {
  return (
    <div className='grid grid-cols-[40%,_1fr] lg:grid-cols-[35%,_1fr] h-full'>
      <section className='p-6 bg-slate-100 hideScrollbar overflow-y-auto h-full py-10 flex flex-col gap-4'>
        <section>
          <SignupForm />

          <button className='text-xs lg:text-sm p-1 px-2 mt-2 text-slate-500'>
            Sudah punya akun? Klik di sini untuk login.
          </button>
        </section>

        <div className='w-full h-[1px] bg-blue-800'></div>

        <section>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, ut?
        </section>
      </section>

      <div className='relative'>
        <FullscreenBackground
          imageLink={'/background/homescreen-big.webp'}
          placeholderLink={
            '/background/placeholder/homescreen-placeholder.webp'
          }
        />
      </div>
    </div>
  );
}
