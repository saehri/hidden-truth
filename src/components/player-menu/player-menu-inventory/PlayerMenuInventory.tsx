import {memo, useState} from 'react';
import {motion} from 'framer-motion';
import useCharacterController from '../../../services/controller/characterController';
import Icons from '../../ui/Icons';
import {twMerge} from 'tailwind-merge';

type ActiveTab = 'inventory' | 'achievement';

const PlayerMenuInventoryTabContent = memo(
  ({activeTab, id}: {activeTab: ActiveTab; id: ActiveTab}) => {
    const [activeFilter, setActiveFilter] =
      useState<InventoryFilterableCategory>('all');
    const characterController = useCharacterController();
    const characterBags = characterController.character?.inventory.consumable;

    return (
      <>
        {activeTab === 'inventory' && (
          <InventoryFilter
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        )}

        <motion.div
          transition={{staggerChildren: 0.02}}
          variants={{
            rest: {opacity: 0},
            show: {opacity: 1},
          }}
          initial='rest'
          animate='show'
          key={id}
          className={twMerge(
            'relative w-full h-full',
            characterBags && characterBags.length
              ? 'grid grid-cols-5 gap-2 h-max pb-8 xl:pb-16'
              : 'block'
          )}
        >
          <motion.div
            variants={{
              rest: {opacity: 0, x: 25},
              show: {opacity: 1, x: 0},
            }}
            className='w-full'
          >
            {characterBags && characterBags.length ? (
              characterBags.map((bagItem) => (
                <div className='pt-[100%] border border-yellow-800/50 bg-slate-50/70 relative'></div>
              ))
            ) : (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                className='text-center text-xs lg:text-sm'
              >
                Inventory kamu kosong
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </>
    );
  }
);

export default PlayerMenuInventoryTabContent;

type InventoryFilterableCategory = 'all' | 'money' | 'energy' | 'skins';

const filterButtonComponents: {
  id: InventoryFilterableCategory;
  icon: React.ReactNode;
  label: string;
}[] = [
  {
    id: 'all',
    icon: <Icons.Grid className='w-3 h-3 lg:w-4 lg:h-4' />,
    label: 'See all items',
  },
  {
    id: 'energy',
    icon: (
      <Icons.EnergyAlt className='w-[10px] h-[13px] lg:w-[13px] lg:h-[16px]' />
    ),
    label: 'See only energy items',
  },
  {
    id: 'money',
    icon: <Icons.MoneyAlt className='w-4 h-3 lg:w-[19px] lg:h-[15px]' />,
    label: 'See only consumable money items',
  },
];

interface InventoryFilter {
  setActiveFilter: React.Dispatch<
    React.SetStateAction<InventoryFilterableCategory>
  >;
  activeFilter: InventoryFilterableCategory;
}

function InventoryFilter({activeFilter, setActiveFilter}: InventoryFilter) {
  return (
    <motion.nav
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      className='sticky top-0 flex gap-14 items-center'
    >
      {filterButtonComponents.map((btn) => (
        <button
          key={btn.id}
          onClick={() => setActiveFilter(btn.id)}
          className={twMerge(
            'transition-opacity',
            activeFilter === btn.id ? 'opacity-100' : 'opacity-70'
          )}
        >
          {btn.icon}
          <div className='sr-only'>{btn.label}</div>
        </button>
      ))}
    </motion.nav>
  );
}
