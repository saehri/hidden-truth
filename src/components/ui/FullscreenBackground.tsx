import {twMerge} from 'tailwind-merge';

interface Props {
  imageLink: string;
  placeholderLink: string;
}

export default function FullscreenBackground({
  imageLink,
  placeholderLink,
}: Props) {
  const placeholderImage = `bg-[url("${placeholderLink}")]`;

  return (
    <img
      src={imageLink}
      className={twMerge(
        'absolute w-full h-full top-0 left-0 z-10 object-cover bg-no-repeat bg-cover pointer-events-none',
        placeholderImage
      )}
      alt=''
      draggable='false'
      aria-hidden='true'
    />
  );
}
