import MusicHandler from './MusicHandler';

import useCharacterController from '../../../services/controller/characterController';
import AccountSetting from './AccountSetting';

export default function SettingDialogContent() {
  const characterController = useCharacterController();
  const characterId = characterController.character
    ? /* @ts-ignore */
      characterController.character?._id!
    : '';

  return (
    <StackedPaperEffect>
      <h4 className='text-yellow-900 font-semibold text-sm sm:text-base'>
        Pengaturan
      </h4>

      <SettingDivider name='General'>
        <MusicHandler />
      </SettingDivider>

      <SettingDivider name='Akun'>
        <AccountSetting />
      </SettingDivider>
    </StackedPaperEffect>
  );
}

function StackedPaperEffect({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-slate-200 w-full h-full rounded-sm px-2'>
      <div className='px-1 bg-slate-200 shadow-sm shadow-slate-950/30 w-full h-full border border-slate-300 rounded-sm'>
        <div className='px-1 bg-slate-200 shadow-sm shadow-slate-950/30 w-full h-full border border-slate-300 rounded-sm'>
          <div className='bg-slate-50 shadow-sm shadow-slate-950/30 w-full h-full border border-t-0 border-b-0 border-slate-100 rounded-sm relative'>
            <div className='relative z-20 flex flex-col gap-4 px-3 pt-5'>
              {children}
            </div>

            <div className='absolute top-0 left-1/2 -translate-x-1/2 h-full w-1/3 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 z-0'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SettingDivider extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

function SettingDivider({children, name}: SettingDivider) {
  return (
    <div>
      <h5 className='font-semibold text-xs sm:text-sm border-b border-yellow-800/10 text-yellow-800 block w-full mb-2'>
        {name}
      </h5>
      {children}
    </div>
  );
}
