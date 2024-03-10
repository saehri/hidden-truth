import React, {useContext, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';

import AccountSetting from './AccountSetting';
import MusicHandler from './MusicHandler';

import {ActivePageContext} from '../../../services/API/pageViewingManagerAPI';

type SettingTypes = 'general' | 'account';
const settingMenu: SettingTypes[] = ['general', 'account'];

export default function SettingDialogContent() {
  const {activePage} = useContext(ActivePageContext);
  const [currentSetting, setCurrentSetting] = useState<SettingTypes>('general');

  const settingContentComponent: Record<SettingTypes, React.ReactNode> = {
    account: <AccountSetting />,
    general: <MusicHandler />,
  };

  // THIS IS PROBABLY NOT A GOOD IDEA BUT ANYWAY 💅
  const TabButtons = () => {
    return (
      <>
        {settingMenu.map((menu) => (
          <SettingMenuButton
            menu={menu}
            setCurrentSetting={setCurrentSetting}
            isActive={menu === currentSetting}
            key={menu}
          />
        ))}
      </>
    );
  };

  // We used this variable to hidden some components when player is viewing certain page
  const isHidden: boolean = activePage.location === 'gamePage';

  return (
    <>
      <div className='flex gap-1'>{!isHidden && <TabButtons />}</div>

      <AnimatePresence mode='popLayout'>
        <motion.div
          key={currentSetting}
          initial={{height: 0, opacity: 0}}
          animate={{height: 'auto', opacity: 1}}
          exit={{height: 0, opacity: 0}}
          transition={{damping: 50}}
        >
          <div className='pt-4 pb-6 h-max'>
            {settingContentComponent[currentSetting]}
          </div>
        </motion.div>
      </AnimatePresence>

      <SettingMenuFooter />
    </>
  );
}

function SettingMenuFooter() {
  return (
    <div className='border-t pt-2 text-xs flex items-center justify-between gap-4 flex-wrap gap-y-0 pr-4 text-slate-50/40 border-slate-50/20'>
      <span className='hover:text-slate-50/90'>About Us</span>

      <div>
        <a
          href='mailto:bahreesaepul1@gmail.com'
          className='hover:text-slate-50/90'
        >
          [twitter]
        </a>
        <a
          href='mailto:bahreesaepul1@gmail.com'
          className='hover:text-slate-50/90'
        >
          [email]
        </a>
      </div>
    </div>
  );
}

type SettingMenuButtonTypes = {
  isActive: boolean;
  setCurrentSetting: React.Dispatch<React.SetStateAction<SettingTypes>>;
  menu: SettingTypes;
};

function SettingMenuButton({
  isActive,
  setCurrentSetting,
  menu,
}: SettingMenuButtonTypes) {
  return (
    <button
      onClick={() => setCurrentSetting(menu)}
      className={twMerge(
        'uppercase flex-1 p-2 transition-colors text-xs xs:text-sm',
        isActive ? 'bg-primary' : 'bg-slate-600/40 text-slate-400'
      )}
    >
      {menu} setting
    </button>
  );
}
