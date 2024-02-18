import {memo, useEffect, useState} from 'react';
import {AnimatePresence} from 'framer-motion';

import Icons from '../ui/Icons';
import Button from '../ui/Button';
import PlayerMenuModal from './player-menu-modal/PlayerMenuModal';
import useUserController from '../../services/controller/userController';
import useCharacterController from '../../services/controller/characterController';

const PlayerMenu = memo(function () {
  const [isCardOpen, setCardOpen] = useState<boolean>(false);

  const userController = useUserController();
  const characterController = useCharacterController();

  useEffect(() => {
    characterController.getCharacter(userController.user?._id!);
  }, []);

  return (
    <>
      <Button onClick={() => setCardOpen(true)}>
        <Icons.User />
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
