import {ChangeEvent, FormEvent, useState} from 'react';
import {motion} from 'framer-motion';
import axios from 'axios';
import useUserController, {
  UserTypes,
} from '../../services/controller/userController';

import Icons from '../ui/Icons';
import {Input, Label} from './FormElementsGeneric';
import FormSubmitButton from '../ui/FormSubmitButton';
import useTokenController from '../../services/controller/tokenController';

import useCharacterController, {
  CharacterTypes,
} from '../../services/controller/characterController';
import {FormStateTypes} from '../../services/utils/types';

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
  const tokenController = useTokenController();
  const characterController = useCharacterController();
  const userData = userController.data as UserTypes;

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    const characterInitialData: CharacterTypes = {
      user_id: userData._id,
      avatar: {
        now_used: {
          avatar_id: formData.avatar_id,
          avatar_image: formData.image_link,
          avatar_name: 'female default',
          obtained_at: new Date().toISOString(),
          rarity: 'common',
        },
      },
      character_name: formData.name,
      created_at: new Date().toISOString(),
      current_energy: 5,
      current_rank: 'nobody',
      inventory: {
        avatar: [
          {
            avatar_id: formData.avatar_id,
            avatar_image: formData.image_link,
            avatar_name: 'female default',
            obtained_at: new Date().toISOString(),
            rarity: 'common',
          },
        ],
        consumable: [],
      },
      played_chapters: [],
      played_games: [],
    };

    setFormState('process');
    try {
      axios
        .put(API_URL + `/user/${userData._id}`, {
          is_new_user: false,
          verification_token: tokenController.data,
        })
        .then((response) => {
          const userRequestResponse = response;
          const userData = userRequestResponse.data.user;

          // Handle the next request only if the first request is successful
          if (userRequestResponse.data.success) {
            axios
              .post(API_URL + '/character', {
                ...characterInitialData,
                verification_token: tokenController.data,
              })
              .then((response) => {
                const characterRequestResponse = response;

                if (characterRequestResponse.data.success) {
                  userController.setData(userData);
                  characterController.setItem(
                    characterRequestResponse.data.data
                  );

                  setFormState('done');

                  setTimeout(() => {
                    setFormState('idle');
                  }, 1000);
                } else {
                  throw new Error(characterRequestResponse.data.message);
                }
              })
              .catch((error: any) => {
                setFormState('error');
                console.error(error.message);

                setTimeout(() => {
                  setFormState('idle');
                }, 1500);
              });
          } else {
            throw new Error(userRequestResponse.data.message);
          }
        })
        .catch((error: any) => {
          setFormState('error');

          // if (error.response.status === 401) {
          //   userController.reset();
          // }

          setTimeout(() => {
            setFormState('idle');
          }, 1500);
        });
    } catch (error) {
      setFormState('error');
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

            <span className='p-1 px-2 pt-2 rounded-lg bg-yellow-400 text-slate-800 font-semibold border border-border absolute top-0 right-0 peer-checked:block hidden rotate-12 z-10 text-xs'>
              <Icons.CheckSmall />
            </span>
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

            <span className='p-1 px-2 pt-2 rounded-lg bg-yellow-400 text-slate-800 font-semibold border border-border absolute top-0 right-0 peer-checked:block hidden rotate-12 z-10 text-xs'>
              <Icons.CheckSmall />
            </span>
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
