import {motion} from 'framer-motion';
import {createPortal} from 'react-dom';
import {twMerge} from 'tailwind-merge';

import AvatarCreationForm from '../forms/AvatarCreationForm';
import useUserController from '../../services/controller/userController';

export default function NewUserDialog() {
  const userController = useUserController();
  const userData = userController.user!;

  return (
    <>
      {userData.is_new_user &&
        createPortal(
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.8}}
            className='fixed top-0 left-0 w-full h-full bg-slate-950/90 z-50 flex items-end justify-start p-8'
          >
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1.5}}
              className={twMerge(
                'w-full absolute bottom-8 min-h-16 lg:min-h-28 p-2 pt-5 lg:p-4 lg:pt-10 border-t border-b border-blue-400 bg-gradient-to-r from-blue-600 to-transparent left-0 text-left z-30'
              )}
            >
              <h6 className='absolute left-4 bg-blue-600 -top-6 text-yellow-400 text-sm lg:text-lg z-50 p-1 px-2 border border-blue-50'>
                Mr Defacto
              </h6>

              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 2}}
                className='flex flex-col text-blue-50 text-xs lg:text-base'
              >
                <p>
                  Halo, selamat pagi! Selamat bergabung di Tim Detektif Mr
                  Defacto. Sebelum kita mulai, bisa kah kamu memperkenalkan diri
                  terlebih dulu?
                </p>

                <AvatarCreationForm />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1.5}}
              className='w-full h-full max-w-[30%] lg:max-w-[450px] relative'
            >
              <div className='absolute bottom-0 left-0 w-full pt-[calc((4/3)*100%)]'>
                <img
                  src={
                    'https://utfs.io/f/1d31e60b-4f2b-473a-8e05-0ffbca3fc951-tpwgpb.webp'
                  }
                  alt=''
                  className='absolute top-0 left-0 w-full h-full object-contain object-bottom'
                />
              </div>
            </motion.div>
          </motion.div>,
          document.getElementById('emtris__dialog') as
            | Element
            | DocumentFragment
        )}
    </>
  );
}
