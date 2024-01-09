import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import Icons from './Icons';
import Button from './Button';
import EnergyAndMoneyBarWrapper from './EnergyAndMoneyBarWrapper';

export default function MoneyBar() {
  const {activePage} = useContext(ActivePageContext);

  return (
    <EnergyAndMoneyBarWrapper>
      <Icons.Dollar className='w-4 h-4 md:w-6 md:h-6 3xl:w-10 3xl:h-10 absolute -left-2 3xl:-left-4 top-1/2 -translate-y-1/2' />

      <span>200</span>

      {activePage.location !== 'game' && (
        <Button className='absolute -right-3 top-1/2 -translate-y-1/2 bg-primary/95 border border-border-light rounded-full'>
          <Icons.AddWhite className='w-3 h-3 md:w-5 md:h-5 3xl:w-8 3xl:h-8' />
        </Button>
      )}
    </EnergyAndMoneyBarWrapper>
  );
}
