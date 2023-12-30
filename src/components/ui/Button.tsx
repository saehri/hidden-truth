import {twMerge} from 'tailwind-merge';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function NavigationButton({
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'flex gap-2 items-center justify-center shrink-0 p-1 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-yellow-600 after:rounded-full after:pointer-events-none after:blur-md after:opacity-0 after:hover:opacity-50 after:transition-opacity',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
