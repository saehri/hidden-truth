import {ChangeEvent, FormEvent, useState} from 'react';
import {motion} from 'framer-motion';

import Icons from '../ui/Icons';
import {Input, Label} from './FormElementsGeneric';
import {
  CharacterTypes,
  FormStateTypes,
  UserTypes,
} from '../../services/utils/types';
import FormSubmitButton from '../ui/FormSubmitButton';

import useUserController from '../../services/controller/userController';
import useCharacterController from '../../services/controller/characterController';

export default function AvatarCreationForm() {
  const [isFormOpen, setFormOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setFormOpen(!isFormOpen)}
        className='w-max ml-auto p-2 pb-1 border border-blue-200 hover:bg-blue-500 flex gap-3 text-xs lg:text-base'
      >
        <span>Tentu saja</span>
        <span>-</span>
      </button>

      {isFormOpen && (
        <div className='fixed top-0 left-0 w-full h-full z-50 grid place-items-center'>
          <Form />

          <div className='absolute top-0 left-0 bg-slate-950/80 w-full h-full'></div>
        </div>
      )}
    </>
  );
}

type FormDataTypes = {
  name: string;
  image_link: string;
  avatar_id: 'df-female' | 'df-male';
};

const API_URL = 'https://tricky-puce-walkingstick.cyclic.app/api';

function Form() {
  const [formData, setFormData] = useState<FormDataTypes>({
    name: '',
    image_link: '',
    avatar_id: 'df-female',
  });
  const [formState, setFormState] = useState<FormStateTypes>('idle');

  const userController = useUserController();
  const characterController = useCharacterController();

  const userData = userController.user!;

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    const characterInitialData: CharacterTypes = {
      userId: userData._id,
      hiddenItems: [],
      money: 300,
      updatedAt: '',
      currentAvatar: {
        avatar_id: formData.avatar_id,
        avatar_name:
          formData.avatar_id === 'df-female'
            ? 'female default'
            : 'male default',
        avatar_image: formData.image_link,
        avatar_thumbs:
          formData.avatar_id === 'df-female'
            ? 'https://utfs.io/f/c50656d5-574d-4898-9caa-e50c0d0d6f6c-5f1d75.webp'
            : 'https://utfs.io/f/6356ed1b-a1d7-4d43-a849-1d6a645494e9-44dgq6.webp',
        obtained_at: new Date().toISOString(),
        rarity: 'common',
      },
      name: formData.name,
      createdAt: new Date().toISOString(),
      energy: {current: 10, isFilling: false},
      currentRank: 'nobody',
      inventory: {
        avatar: [
          {
            avatar_id: formData.avatar_id,
            avatar_name:
              formData.avatar_id === 'df-female'
                ? 'female default'
                : 'male default',
            avatar_image: formData.image_link,
            avatar_thumbs:
              formData.avatar_id === 'df-female'
                ? 'https://utfs.io/f/c50656d5-574d-4898-9caa-e50c0d0d6f6c-5f1d75.webp'
                : 'https://utfs.io/f/6356ed1b-a1d7-4d43-a849-1d6a645494e9-44dgq6.webp',
            obtained_at: new Date().toISOString(),
            rarity: 'common',
          },
        ],
        consumable: [],
      },
    };

    setFormState('process');
    try {
      const userEditReqResponse = await userController.edit({
        is_new_user: false,
      });

      if (userEditReqResponse.success) {
        const characterCreateReqResponse = await characterController.create(
          characterInitialData
        );
        if (characterCreateReqResponse.success) {
          setFormState('done');
        } else {
          await userController.edit({
            is_new_user: true,
          });
        }
      }
    } catch (error) {
      setFormState('error');
    } finally {
      setFormState('idle');
    }
  }

  function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    const name = ev.target.name;
    const value = ev.target.value;

    setFormData((prevData) => ({...prevData, [name]: value}));
  }

  return (
    <motion.form
      initial={{opacity: 0, y: 200}}
      animate={{opacity: 1, y: 1, transition: {delay: 0.3}}}
      onSubmit={handleSubmit}
      className='h-max w-full max-w-64 lg:max-w-96 bg-slate-100 p-4 rounded-lg border border-slate-300 relative z-20'
    >
      <div className='flex flex-col gap-4 mb-3'>
        <div className='flex flex-col gap-1'>
          <Label>Siapa nama kamu?</Label>
          <Input
            type='text'
            placeholder='Ayu Cluenight'
            required
            name='name'
            onChange={(ev) => handleInputChange(ev)}
            value={formData.name}
            disabled={formState === 'process'}
            pattern="^[a-zA-Z'-\s]{2,30}$"
          />
        </div>
      </div>

      <h4 className='text-xs lg:text-sm font-semibold mb-1 text-slate-700'>
        Pilih avatar
      </h4>

      <div className='grid grid-cols-2 gap-2'>
        <div>
          <label className='pt-[100%] w-full relative block cursor-pointer'>
            <input
              type='radio'
              className='peer block opacity-0 sr-only'
              name='image_link'
              value='https://utfs.io/f/fdf86df1-2b0d-4104-8c22-de69e722b1fa-mzgkcl.webp'
              onChange={(ev) =>
                setFormData({
                  ...formData,
                  image_link: ev.target.value,
                  avatar_id: 'df-female',
                })
              }
            ></input>

            <span className='absolute pointer-events-none w-full h-full top-0 left-0 brightness-50 peer-checked:brightness-100 transition-all bg-green-950 border-border'>
              <img
                src='https://utfs.io/f/fdf86df1-2b0d-4104-8c22-de69e722b1fa-mzgkcl.webp'
                alt=''
                className='absolute top-0 left-0 w-full h-full object-cover object-bottom'
              />
            </span>

            <span className='p-1 px-2 pt-2 rounded-lg bg-yellow-400 text-slate-800 font-semibold border border-border absolute top-0 right-0 peer-checked:block hidden rotate-12 z-10 text-xs'></span>
          </label>
        </div>

        <div>
          <label className='pt-[100%] w-full relative block cursor-pointer'>
            <input
              type='radio'
              className='peer block opacity-0 sr-only'
              name='image_link'
              value='https://utfs.io/f/e3b162b3-cf72-41f2-80f7-a519067cb98e-6m6p6i.webp'
              onChange={(ev) =>
                setFormData({
                  ...formData,
                  image_link: ev.target.value,
                  avatar_id: 'df-male',
                })
              }
            ></input>

            <span className='absolute pointer-events-none w-full h-full top-0 left-0 brightness-50 peer-checked:brightness-100 transition-all bg-green-950 border-border'>
              <img
                src='https://utfs.io/f/e3b162b3-cf72-41f2-80f7-a519067cb98e-6m6p6i.webp'
                alt=''
                className='absolute top-0 left-0 w-full h-full object-cover object-bottom'
              />
            </span>

            <span className='p-1 px-2 pt-2 rounded-lg bg-yellow-400 text-slate-800 font-semibold border border-border absolute top-0 right-0 peer-checked:block hidden rotate-12 z-10 text-xs'></span>
          </label>
        </div>
      </div>

      <FormSubmitButton
        formState={formState}
        buttonIdleName='SIMPAN DATA KARAKTER'
      />
    </motion.form>
  );
}
