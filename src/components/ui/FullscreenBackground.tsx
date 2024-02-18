import {motion} from 'framer-motion';
import {twMerge} from 'tailwind-merge';

interface Props {
  imageLink: string;
  placeholderLink?: string;
  animate?: boolean;
  className?: string;
}

export default function FullscreenBackground({
  imageLink,
  placeholderLink,
  animate = true,
  className,
}: Props) {
  const placeholderImage = `bg-[url("${placeholderLink}")]`;

  if (!animate) {
    return (
      <div>
        <img
          src={imageLink}
          className={twMerge(
            'absolute w-full h-full top-0 left-0 z-10 object-cover bg-no-repeat bg-cover pointer-events-none',
            placeholderImage,
            className
          )}
          alt=''
          draggable='false'
          aria-hidden='true'
        />
      </div>
    );
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <img
        src={imageLink}
        className={twMerge(
          'absolute w-full h-full top-0 left-0 z-10 object-cover bg-no-repeat bg-cover pointer-events-none',
          placeholderImage,
          className
        )}
        alt=''
        draggable='false'
        aria-hidden='true'
      />
    </motion.div>
  );
}
