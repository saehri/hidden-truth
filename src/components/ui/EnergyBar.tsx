import {useContext, useState} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import Icons from './Icons';
import Button from './Button';
import EnergyAndMoneyBarWrapper from './EnergyAndMoneyBarWrapper';

export default function EnergyBar() {
  const {activePage} = useContext(ActivePageContext);
  const [userEnergy, setUserEnergy] = useState({
    energy: 5,
    max_energy: 5,
    recharging_energy: true,
  });

  return (
    <EnergyAndMoneyBarWrapper>
      {userEnergy.recharging_energy && <EneryCountdownDisplay />}

      <Icons.Bolt className='w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8 absolute -left-2 3xl:-left-4 top-1/2 -translate-y-1/2' />

      <span>
        {userEnergy.energy}/{userEnergy.max_energy}
      </span>

      {activePage.location !== 'gamePage' && (
        <Button className='absolute -right-3 top-1/2 -translate-y-1/2 bg-primary/95 border border-border-light rounded-full'>
          <Icons.AddWhite className='w-3 h-3 lg:w-4 lg:h-4 3xl:w-6 3xl:h-6' />
        </Button>
      )}
    </EnergyAndMoneyBarWrapper>
  );
}

function EneryCountdownDisplay() {
  return (
    <div className='absolute leading-3 -bottom-[14px] sm:-bottom-[14px] xl:-bottom-[18px] 3xl:-bottom-[26px] uppercase  left-1/2 -translate-x-1/2 text-[8px] xl:text-[10px] 3xl:text-sm w-max bg-gradient-to-t from-primary via-yellow-500 to-yellow-50 px-1 md:p-[2px] rounded-br-md rounded-bl-md text-[#0e0c04] border border-border border-t-0'>
      +1 dalam 2:49
    </div>
  );
}
