import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom';

import Button from '../components/ui/Button';
import LoadingScreen from '../components/splashScreen/LoadingScreen';

export default function ChapterDetail() {
  const {state} = useLocation();

  if (state === null) return <Navigate to='/' />;

  return (
    <div className='relative overflow-hidden h-full'>
      <section className='grid grid-cols-[1fr,_35%] h-full'>
        <div className='bg-blue-700'></div>
        <div className='bg-white flex justify-end items-start flex-col gap-8'>
          <BackButton />

          <Link to='/play'>Chapter 1 - Kerusuhan</Link>
        </div>
      </section>

      {/* <LoadingScreen /> */}
    </div>
  );
}

function BackButton() {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(-1)}>Back button</Button>;
}
