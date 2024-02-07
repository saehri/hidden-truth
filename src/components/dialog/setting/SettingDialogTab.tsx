import {motion} from 'framer-motion';
import useCharacterController from '../../../services/controller/characterController';
import MusicHandler from './MusicHandler';
import Icons from '../../ui/Icons';

export default function SettingDialogTab() {
  const characterController = useCharacterController();

  return (
    <>
      <h4 className='block absolute -top-5 left-1/2 -translate-x-1/2 p-2 pt-3 px-4 bg-gradient-to-b from-green-950 to-background text-yellow-500 rounded-full shadow-md border border-border text-base lg:text-lg'>
        PENGATURAN
      </h4>

      <div className='relative w-full h-full'>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between gap-4'>
          <div className='w-full h-full flex items-center justify-center gap-5'>
            <motion.a
              href='mailto:saepulbahree36@gmail.com'
              target='_blank'
              whileHover={{opacity: 0.8}}
              className='bg-gradient-to-tl from-yellow-800 to-yellow-400 p-2 rounded-full'
            >
              <div className='w-14 h-14 grid place-items-center rounded-full bg-background relative'>
                <Icons.CustomerService className='w-8 h-8' />
              </div>
            </motion.a>

            <MusicHandler />

            <motion.a
              whileHover={{opacity: 0.8}}
              href='mailto:saepulbahree36@gmail.com'
              target='_blank'
              className='bg-gradient-to-tl from-yellow-800 to-yellow-400 p-2 rounded-full'
            >
              <div className='w-14 h-14 grid place-items-center rounded-full bg-background relative'>
                <Icons.Share className='w-8 h-8' />
              </div>
            </motion.a>
          </div>

          <div className='flex justify-between items-center w-full text-slate-500 text-[10px] lg:text-sm'>
            <span className='w-max flex'>
              {/* @ts-ignore */}
              Player ID: {characterController.character._id || ''}
            </span>

            <span>Version: 1.00.1</span>
          </div>
        </div>

        <img
          src='https://utfs.io/f/14a43689-bfc8-42b5-ab0d-5571a9b747fb-eaifiz.webp'
          alt=''
          className='absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-30'
          draggable={false}
          aria-hidden='true'
        />
      </div>
    </>
  );
}
