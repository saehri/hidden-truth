import {useEffect} from 'react';

export default function FullscreenAPIHandler() {
  useEffect(() => {
    const body = document.body;

    function toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    body.addEventListener('dblclick', toggleFullScreen, false);

    return () => body.removeEventListener('dblclick', toggleFullScreen, false);
  }, []);

  return <></>;
}
