import {useContext} from 'react';
import {ActivePageContext} from '../../services/API/pageViewingManagerAPI';

import Icons from './Icons';
import Button from './Button';
import EnergyAndMoneyBarWrapper from './EnergyAndMoneyBarWrapper';

export default function MoneyBar() {
  const {activePage} = useContext(ActivePageContext);

  return (
    <EnergyAndMoneyBarWrapper>
      <Icons.Dollar className='w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8 absolute -left-2 3xl:-left-4 top-1/2 -translate-y-1/2' />

      <span>&infin;</span>

      {activePage.location !== 'gamePage' && (
        <Button className='absolute -right-3 top-1/2 -translate-y-1/2 bg-primary/95 border border-border-light rounded-full'>
          <Icons.AddWhite className='w-3 h-3 lg:w-4 lg:h-4 3xl:w-6 3xl:h-6' />
        </Button>
      )}
    </EnergyAndMoneyBarWrapper>
  );
}
