import {ChangeEvent, FormEvent, useContext, useState} from 'react';
import {toast} from 'react-toastify';

import {Input, Label} from './FormElementsGeneric';
import FormSubmitButton from '../ui/FormSubmitButton';
import {FormStateTypes} from '../../services/utils/types';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';
import useUserController from '../../services/controller/userController';

type FormDataTypes = {
  email: string;
  username: string;
  password: string;
};

export default function SignupForm() {
  const [formData, setFormData] = useState<FormDataTypes>({
    username: '',
    email: '',
    password: '',
  });
  const [formState, setFormState] = useState<FormStateTypes>('idle');

  const {setActivePage} = useContext(ActivePageContext);
  const userController = useUserController();

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    setFormState('process');
    try {
      const response = await userController.signUp(formData);

      if (response.success) {
        toast.success(response.message);

        setTimeout(() => {
          setActivePage({location: 'signinPage'});
        }, 1500);
      } else {
        throw new Error(response.message);
      }
    } catch (error: any) {
      toast.error(error.message);
      setFormState('error');
    } finally {
      setFormState('idle');
    }
  }

  function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    const fieldName = ev.target.name;
    const fieldValue = ev.target.value;

    setFormData((prevValue) => ({...prevValue, [fieldName]: fieldValue}));
  }

  return (
    <>
      <h4 className='mb-4 font-semibold lg:text-lg text-slate-800'>
        Buat akun
      </h4>

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
              description='Panjang username tidak boleh lebih dari 16 karakter dan tidak boleh mengandung karakter spesial. Kamu masih bisa mengganti username kamu di dalam game nanti.'
              disabled={formState === 'process'}
              pattern='^[a-zA-Z0-9]{3,16}$'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <Label>Email</Label>
            <Input
              type='email'
              placeholder='name@gmail.com'
              required
              name='email'
              onChange={(ev) => handleInputChange(ev)}
              value={formData.email}
              disabled={formState === 'process'}
              pattern='^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$'
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

        <FormSubmitButton formState={formState} buttonIdleName='SIGN UP' />
      </form>
    </>
  );
}
