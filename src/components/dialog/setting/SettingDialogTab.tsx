import {motion} from 'framer-motion';
import useCharacterController from '../../../services/controller/characterController';
import MusicHandler from './MusicHandler';
import Icons from '../../ui/Icons';
import {mapLine} from '../../../assets/images/mapLine';

export default function SettingDialogTab() {
  const characterController = useCharacterController();
  const characterId = characterController.character
    ? /* @ts-ignore */
      characterController.character?._id!
    : '';

  return (
    <>
      <h4 className='block absolute -top-5 left-1/2 -translate-x-1/2 p-2 pt-3 px-4 bg-gradient-to-b from-green-950 to-background text-yellow-500 rounded-full shadow-md border border-border text-xs lg:text-base'>
        PENGATURAN
      </h4>

      <div className='relative w-full h-full'>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between gap-4'>
          <div className='w-full h-full flex items-center justify-center gap-5'>
            <motion.a
              href='mailto:saepulbahree36@gmail.com'
              target='_blank'
              whileHover={{opacity: 0.8}}
              className='bg-gradient-to-tl from-yellow-800 to-yellow-400 p-1 lg:p-2 rounded-full'
            >
              <div className='w-10 h-10 grid lg:w-12 lg:h-12 place-items-center rounded-full bg-background relative'>
                <Icons.CustomerService className='w-5 h-5 lg:w-7 lg:h-7' />
              </div>
            </motion.a>

            <MusicHandler />

            <motion.a
              whileHover={{opacity: 0.8}}
              href='mailto:saepulbahree36@gmail.com'
              target='_blank'
              className='bg-gradient-to-tl from-yellow-800 to-yellow-400 p-1 lg:p-2 rounded-full'
            >
              <div className='w-10 h-10 lg:w-12 lg:h-12 grid place-items-center rounded-full bg-background relative'>
                <Icons.Share className='w-5 h-5 lg:w-7 lg:h-7' />
              </div>
            </motion.a>
          </div>

          <div className='flex justify-between items-center w-full text-slate-500 text-[10px] lg:text-sm'>
            <span className='w-max flex'>Player ID: {characterId}</span>

            <span>Version: 1.00.1</span>
          </div>
        </div>

        <img
          src={mapLine}
          alt=''
          className='absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-30'
          draggable={false}
          aria-hidden='true'
        />
      </div>
    </>
  );
}
