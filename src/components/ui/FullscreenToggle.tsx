import {memo, useState} from 'react';
import Button from './Button';
import Icons from './Icons';

const FullscreenToggle = memo(function () {
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

  return (
    <Button
      className='absolute right-2 top-2 z-[100]'
      onClick={toggleFullScreen}
    >
      {!isFullsreen ? <Icons.Fullscreen /> : <Icons.Minimizescreen />}
    </Button>
  );
});

export default FullscreenToggle;
