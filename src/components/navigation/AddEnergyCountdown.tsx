import {memo, useEffect, useState} from 'react';
import useCharacterController from '../../services/controller/characterController';

const COOLDOWN_DURATION: number = 120;

const AddEnergyCD = memo(() => {
  const characterController = useCharacterController();
  const isFillingEnergy = characterController.character?.energy
    .isFilling as boolean;

  const [timer, setTimer] = useState(COOLDOWN_DURATION); // Initial countdown value

  useEffect(() => {
    let intervalId: any;

    if (isFillingEnergy && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      // Reset the timer when it reaches 0
      characterController.addEnergy(1);
      setTimer(COOLDOWN_DURATION);
    }

    return () => clearInterval(intervalId);
  }, [isFillingEnergy, timer]);

  return (
    <div className='absolute left-8 -bottom-4 text-slate-50/70 text-[10px]'>
      {isFillingEnergy && (
        <div>
          <h2>
            +1 dalam {Math.floor(timer / 60)}:{timer % 60}
          </h2>
        </div>
      )}
    </div>
  );
});

export default AddEnergyCD;
