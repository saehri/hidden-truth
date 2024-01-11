type Props = React.HTMLAttributes<HTMLDivElement>;

export default function EnergyAndMoneyBarWrapper({children}: Props) {
  return (
    <article className='bg-primary/70 xl:pt-[.2px] border border-border border-l-0 w-full h-5 lg:h-6 3xl:h-9 grid place-items-center text-white rounded-full relative text-xs sm:text-sm xl:text-base 3xl:text-2xl'>
      {children}
    </article>
  );
}
