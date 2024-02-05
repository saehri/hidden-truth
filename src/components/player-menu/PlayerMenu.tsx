import {memo, useState} from 'react';
import {AnimatePresence} from 'framer-motion';

import Icons from '../ui/Icons';
import Button from '../ui/Button';
import PlayerMenuModal from './player-menu-modal/PlayerMenuModal';

const PlayerMenu = memo(function () {
  const [isCardOpen, setCardOpen] = useState<boolean>(false);
  const buttonIconSizes = 'w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8';

  return (
    <>
      <Button onClick={() => setCardOpen(!isCardOpen)}>
        <Icons.User className={buttonIconSizes} />
      </Button>

      <AnimatePresence>
        {isCardOpen && <PlayerMenuModal setCardOpen={setCardOpen} />}
      </AnimatePresence>
    </>
  );
});

export default PlayerMenu;
