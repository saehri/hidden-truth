import {memo, useEffect, useState} from 'react';
import {AnimatePresence} from 'framer-motion';

import Icons from '../ui/Icons';
import Button from '../ui/Button';
import PlayerMenuModal from './player-menu-modal/PlayerMenuModal';
import useUserController from '../../services/controller/userController';
import useCharacterController from '../../services/controller/characterController';

const PlayerMenu = memo(function () {
  const [isCardOpen, setCardOpen] = useState<boolean>(false);
  const buttonIconSizes = 'w-4 h-4 lg:w-5 lg:h-5 3xl:w-8 3xl:h-8';

  const userController = useUserController();
  const characterController = useCharacterController();

  useEffect(() => {
    characterController.getCharacter(userController.user?._id!);
  }, []);

  return (
    <>
      <Button onClick={() => setCardOpen(!isCardOpen)}>
        <Icons.User className={buttonIconSizes} />
      </Button>

      <AnimatePresence>
        {isCardOpen && characterController.character && (
          <PlayerMenuModal
            setCardOpen={setCardOpen}
            character={characterController.character}
          />
        )}
      </AnimatePresence>
    </>
  );
});

export default PlayerMenu;
