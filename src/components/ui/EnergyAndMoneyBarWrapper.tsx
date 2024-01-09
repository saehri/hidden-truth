type Props = React.HTMLAttributes<HTMLDivElement>;

export default function EnergyAndMoneyBarWrapper({children}: Props) {
  return (
    <article className='bg-primary/70 xl:pt-[2.5px] border border-border border-l-0 w-full h-5 md:h-7 3xl:h-9 3xl:text-2xl grid place-items-center text-white rounded-full relative text-xs sm:text-sm md:text-base'>
      {children}
    </article>
  );
}
