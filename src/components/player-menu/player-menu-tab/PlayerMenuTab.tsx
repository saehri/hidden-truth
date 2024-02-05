import {memo, useState} from 'react';
import {twMerge} from 'tailwind-merge';

import Button from '../../ui/Button';
import PlayerMenuInventoryTabContent from '../player-menu-inventory/PlayerMenuInventory';

type ActiveTab = 'inventory' | 'achievement';

const buttonNavigattion: {id: ActiveTab}[] = [
  {id: 'inventory'},
  {id: 'achievement'},
];

const PlayerMenuTab = memo(() => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('inventory');

  return (
    <>
      <div className='grid grid-cols-2 gap-3'>
        {buttonNavigattion.map((btn) => (
          <Button
            key={btn.id}
            className={twMerge(
              'block p-1 md:p-2 lg:p-3 text-slate-800 text-xs lg:text-base border border-yellow-300 bg-slate-50 uppercase shadow-sm outline-none',
              activeTab === btn.id
                ? 'opacity-100 border-yellow-500'
                : 'opacity-75'
            )}
            onClick={() => setActiveTab(btn.id)}
          >
            {btn.id}
          </Button>
        ))}
      </div>

      <div className='overflow-y-auto hideScrollbar flex flex-col gap-2 lg:gap-4'>
        <TabContentViewer activeTab={activeTab} />
      </div>
    </>
  );
});

export default PlayerMenuTab;

function TabContentViewer({activeTab}: {activeTab: ActiveTab}) {
  const CurrentAcitveTab: Record<ActiveTab, React.ReactNode> = {
    inventory: (
      <PlayerMenuInventoryTabContent activeTab={activeTab} id='inventory' />
    ),
    achievement: <PlayerMenuAchievementTabContent />,
  };

  return CurrentAcitveTab[activeTab];
}

function PlayerMenuAchievementTabContent() {
  return (
    <div className='text-center text-xs lg:text-sm'>
      Kamu belum punya pencapaian apapun
    </div>
  );
}
