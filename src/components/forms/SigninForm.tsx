import {ChangeEvent, FormEvent, useContext, useState} from 'react';
import {AnimatePresence} from 'framer-motion';
import axios from 'axios';

import {useAtom} from 'jotai';
import {FormStateTypes} from '../../services/utils/types';
import {atomWithStorage} from 'jotai/utils';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import Toast from '../ui/Toast';
import {Input, Label} from './FormElementsGeneric';
import FormSubmitButton from '../ui/FormSubmitButton';

type FormDataTypes = {
  username: string;
  password: string;
};

type ResponseDataTypes = {
  success: boolean;
  message: string;
};

const userAtom = atomWithStorage('USER_DATA', undefined);

// @ts-ignore
const API_URL = 'https://tricky-puce-walkingstick.cyclic.app/api';

export default function SigninForm() {
  const [formData, setFormData] = useState<FormDataTypes>({
    username: '',
    password: '',
  });
  const [responseData, setResponseData] = useState<
    ResponseDataTypes | undefined
  >(undefined);
  const [formState, setFormState] = useState<FormStateTypes>('idle');
  const {setActivePage} = useContext(ActivePageContext);
  const [_, setStoredUserData] = useAtom(userAtom);

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    setResponseData(undefined);
    setFormState('process');

    axios
      .post(`${API_URL}/auth/signin`, formData)
      .then((response) => {
        const {data} = response;
        setResponseData(data);

        if (data.success) {
          setStoredUserData(data.user);
          setFormState('done');

          setTimeout(() => {
            setFormState('idle');
          }, 1000);

          setTimeout(() => {
            setActivePage({location: 'homepage'});
          }, 2000);
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error: any) => {
        setFormState('error');
        console.error(error.message);

        setTimeout(() => {
          setFormState('idle');
        }, 1500);
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
              disabled={formState === 'process'}
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
              disabled={formState === 'process'}
              pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$'
            />
          </div>
        </div>

        <FormSubmitButton formState={formState} buttonIdleName='SIGN IN' />
      </form>
    </>
  );
}
