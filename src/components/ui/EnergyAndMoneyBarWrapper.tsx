type Props = React.HTMLAttributes<HTMLDivElement>;

export default function EnergyAndMoneyBarWrapper({children}: Props) {
  return (
    <article className='bg-primary/70 pt-[2px] border border-border border-l-0 min-w-32 3xl:min-w-44 h-7 3xl:h-9 3xl:text-2xl grid place-items-center text-white rounded-full relative'>
      {children}
    </article>
  );
}
