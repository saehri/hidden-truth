import {useState} from 'react';
import Button from './Button';
import Icons from './Icons';
import EnergyAndMoneyBarWrapper from './EnergyAndMoneyBarWrapper';

export default function EnergyBar() {
  const [userEnergy, setUserEnergy] = useState({
    energy: 5,
    max_energy: 5,
    recharging_energy: true,
  });

  return (
    <EnergyAndMoneyBarWrapper>
      {userEnergy.recharging_energy && <EneryCountdownDisplay />}

      <Icons.Bolt className='w-6 h-6 3xl:w-10 3xl:h-10 absolute -left-2 3xl:-left-4 top-1/2 -translate-y-1/2' />

      <span>
        {userEnergy.energy}/{userEnergy.max_energy}
      </span>

      <Button className='absolute -right-3 top-1/2 -translate-y-1/2 bg-primary/95 border border-border-light rounded-full'>
        <Icons.AddWhite className='w-5 h-5 3xl:w-8 3xl:h-8' />
      </Button>
    </EnergyAndMoneyBarWrapper>
  );
}

function EneryCountdownDisplay() {
  return (
    <div className='absolute -bottom-[21px] 3xl:-bottom-[29.1px] left-1/2 -translate-x-1/2 text-xs 3xl:text-base text-nowrap bg-gradient-to-t from-primary via-yellow-500 to-yellow-50 p-[2px] px-1 rounded-br-md rounded-bl-md text-[#0e0c04] border border-border border-t-0'>
      +1 dalam 2:49
    </div>
  );
}
