import {useState} from 'react';
import Button from './Button';
import Icons from './Icons';

export default function FullscreenToggle() {
  const [isFullsreen, setIsFullscreen] = useState<boolean>(false);

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      setIsFullscreen(true);
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      setIsFullscreen(false);
      document.exitFullscreen();
    }
  }

  console.log(isFullsreen);

  return (
    <Button className='absolute right-2 top-2' onClick={toggleFullScreen}>
      {!isFullsreen ? <Icons.Fullscreen /> : <Icons.Minimizescreen />}
    </Button>
  );
}
