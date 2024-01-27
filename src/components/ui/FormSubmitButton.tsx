import {AnimatePresence, motion} from 'framer-motion';
import {FormStateTypes} from '../../services/utils/types';

import Icons from './Icons';
import Button from './Button';
import React from 'react';

interface FormSubmitButton {
  formState: FormStateTypes;
  buttonIdleName: string;
}

export default function FormSubmitButton({
  formState,
  buttonIdleName,
}: FormSubmitButton) {
  return (
    <Button
      type='submit'
      className='inline-block rounded-md text-xs lg:text-sm font-semibold p-2 pt-3 px-4 w-full mt-8 bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-100 border-border border text-yellow-800 overflow-hidden shadow-md shadow-slate-950/20'
      disabled={formState === 'process'}
    >
      <AnimatePresence mode='popLayout' initial={false}>
        {formState === 'process' ? (
          <ProcessState />
        ) : formState === 'done' ? (
          <DoneState content={buttonIdleName} />
        ) : formState === 'error' ? (
          <ErrorState content={buttonIdleName} />
        ) : (
          <IdleState content={buttonIdleName} />
        )}
      </AnimatePresence>
    </Button>
  );
}

function IdleState({content}: {content: any}) {
  return (
    <motion.span
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -20}}
      className='block'
      key='a'
    >
      {content}
    </motion.span>
  );
}

function ProcessState() {
  return (
    <motion.span
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -20}}
      className='flex items-center justify-center gap-2'
      key='b'
    >
      <Icons.ProgressSpinner className='w-[14px] h-[14px] animate-spin' />{' '}
      MEMPROSES
    </motion.span>
  );
}

function DoneState({content}: {content: any}) {
  return (
    <motion.span
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -20}}
      className='flex items-center justify-center gap-2'
      key='c'
    >
      <Icons.CheckSmall /> {content} BERHASIL
    </motion.span>
  );
}

function ErrorState({content}: {content: any}) {
  return (
    <motion.span
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -20}}
      className='flex items-center justify-center gap-2'
      key='d'
    >
      <Icons.CloseSmall /> {content} GAGAL
    </motion.span>
  );
}
