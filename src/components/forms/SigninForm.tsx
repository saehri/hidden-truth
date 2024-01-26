import {ChangeEvent, FormEvent, useContext, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import axios from 'axios';

import Toast from '../ui/Toast';
import Button from '../ui/Button';
import {Input, Label} from './FormElementsGeneric';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import {atomWithStorage} from 'jotai/utils';
import {useAtom} from 'jotai';

type FormData = {
  username: string;
  password: string;
};

type ResponseData = {
  success: boolean;
  message: string;
};

const userAtom = atomWithStorage('USER_DATA', undefined);

// @ts-ignore
const API_URL = import.meta.env.VITE_API_URL ?? '';

export default function SigninForm() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });
  const [responseData, setResponseData] = useState<ResponseData | undefined>(
    undefined
  );
  const [isLoading, setLoading] = useState<boolean>(false);
  const {setActivePage} = useContext(ActivePageContext);
  const [_, setStoredUserData] = useAtom(userAtom);

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    setLoading(true);

    axios
      .post(`${API_URL}/auth/signin`, formData)
      .then((response) => {
        const {data} = response;
        setResponseData(data);

        if (data.success) {
          setStoredUserData(data.user);
          setActivePage({location: 'homepage'});
        }
      })
      .catch((error: any) => {
        setLoading(false);
        console.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    const fieldName = ev.target.name;
    const fieldValue = ev.target.value;

    setFormData((prevValue) => ({...prevValue, [fieldName]: fieldValue}));
  }

  return (
    <>
      <AnimatePresence>
        {responseData && (
          <Toast
            backgroundColor={
              responseData.success ? 'bg-background' : 'bg-red-800'
            }
            title={responseData.success ? 'CONGRATULATIONS!' : 'WARNING!'}
            detail={responseData.message ?? ''}
            closeAction={() => setResponseData(undefined)}
          />
        )}
      </AnimatePresence>

      <h4 className='mb-4 font-semibold lg:text-lg text-slate-800'>Login</h4>

      <form onSubmit={handleSubmit} className='h-max'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <Label>Username</Label>
            <Input
              type='text'
              placeholder='hunteroflie'
              required
              name='username'
              onChange={(ev) => handleInputChange(ev)}
              value={formData.username}
              description='Panjang username tidak boleh lebih dari 16 karakter dan tidak boleh mengandung karakter spesial.'
              disabled={isLoading}
              pattern='^[a-zA-Z0-9]{3,16}$'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <Label>Password</Label>
            <Input
              type='password'
              placeholder='•••••••••••'
              minLength={8}
              maxLength={20}
              required
              name='password'
              onChange={(ev) => handleInputChange(ev)}
              value={formData.password}
              description='Password setidaknya teridiri dari satu huruf kapital, satu huruf kecil, satu angka, dan satu karakter khusus (@$!%*?&), panjang password minimal 8 dan panjang maksimal 20.'
              disabled={isLoading}
              pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$'
            />
          </div>
        </div>

        <Button
          type='submit'
          className='inline-block rounded-md text-xs lg:text-sm font-semibold p-2 pt-3 px-4 w-full mt-8 bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-100 border-border border text-yellow-800 overflow-hidden shadow-md shadow-slate-950/20'
          disabled={isLoading}
        >
          <AnimatePresence mode='popLayout' initial={false}>
            {isLoading ? (
              <motion.span
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -20}}
                key={'a'}
                className='block'
              >
                MEMPROSES
              </motion.span>
            ) : (
              <motion.span
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -20}}
                className='block'
                key={'b'}
              >
                SIGN IN
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </form>
    </>
  );
}
