import Button from './Button';
import EnergyAndMoneyBarWrapper from './EnergyAndMoneyBarWrapper';
import Icons from './Icons';

export default function MoneyBar() {
  return (
    <EnergyAndMoneyBarWrapper>
      <Icons.Dollar className='w-6 h-6 3xl:w-10 3xl:h-10 absolute -left-2 3xl:-left-4 top-1/2 -translate-y-1/2' />

      <span>200</span>

      <Button className='absolute -right-3 top-1/2 -translate-y-1/2 bg-primary/95 border border-border-light rounded-full'>
        <Icons.AddWhite className='w-5 h-5 3xl:w-8 3xl:h-8' />
      </Button>
    </EnergyAndMoneyBarWrapper>
  );
}
