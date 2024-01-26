import {ChangeEvent, FormEvent, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import Button from '../components/ui/Button';
import {Input, Label} from '../components/forms/FormElementsGeneric';
import axios from 'axios';
import {twMerge} from 'tailwind-merge';

export default function SignupPage() {
  return (
    <div className='grid grid-cols-[40%,_1fr] lg:grid-cols-[35%,_1fr] h-full'>
      <section className='p-4 bg-slate-100 hideScrollbar overflow-y-auto h-full py-10 flex flex-col gap-4'>
        <section>
          <SignupForm />
        </section>

        <div className='w-full h-[1px] bg-blue-800'></div>

        <section>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, ut?
        </section>
      </section>

      <div>Background</div>
    </div>
  );
}

function SignupForm() {
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
  }>({
    username: '',
    email: '',
    password: '',
  });
  const [responseData, setResponseData] = useState<{
    message?: string;
    success?: boolean;
  }>({});
  const [isLoading, setLoading] = useState<boolean>(false);

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    setLoading(true);
    axios
      .post(
        'https://tricky-puce-walkingstick.cyclic.app/api/auth/signup',
        formData
      )
      .then((response) => {
        const {data} = response;
        setResponseData(data);
      })
      .catch((error: any) => {
        setLoading(false);
        console.log(error.message);
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
      {Object.keys(responseData).length ? (
        <motion.div
          initial={{height: 0}}
          animate={{height: 'auto'}}
          className='overflow-hidden mb-8'
        >
          <div
            className={twMerge(
              'p-3 border border-yellow-500',
              responseData.success ? 'bg-background' : 'bg-red-800'
            )}
          >
            <h4 className='font-semibold text-xs lg:text-sm text-yellow-500 mb-2'>
              {responseData.success ? 'CONGRATULATIONS!' : 'WARNING!'}
            </h4>

            <p className='text-slate-200 text-xs lg:text-sm'>
              {responseData.message}
            </p>
          </div>
        </motion.div>
      ) : (
        <></>
      )}

      <h4 className='mb-4 font-semibold text-slate-800'>Buat akun</h4>

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
              description='Panjang username tidak boleh lebih dari 12 karakter dan tidak boleh mengandung karakter spesial.'
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
              description='Password harus mengandung minimal 1 angka 1 huruf besar dan 1 karakter spesial.'
            />
          </div>
        </div>

        <Button
          type='submit'
          className='inline-block rounded-md text-xs lg:text-sm font-semibold p-2 pt-3 px-4 w-full mt-8 bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-100 border-border border text-yellow-800 overflow-hidden'
        >
          <AnimatePresence mode='popLayout'>
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
                SIGN UP
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </form>
    </>
  );
}
