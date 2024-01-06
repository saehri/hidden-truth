import {useState} from 'react';
import ImageGuesserCards from '../ui/ImageGuesserCards';

import {ImageGuesserGameDataTypes} from '../../services/utils/types';
import ImageGuesserGameUserInput from '../forms/ImageGuesserGameUserInput';
import InGameCountdown from '../ui/InGameCountdown';

const gameDataExample: ImageGuesserGameDataTypes[] = [
  {
    id: 'pemilu24-1-01',
    imageLink:
      'https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'panda',
  },
  {
    id: 'pemilu24-1-02',
    imageLink:
      'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'fish',
  },
  {
    id: 'pemilu24-1-03',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
  {
    id: 'pemilu24-1-06',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
  {
    id: 'pemilu24-1-07',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
  {
    id: 'pemilu24-1-08',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
  {
    id: 'pemilu24-1-09',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
  {
    id: 'pemilu24-1-10',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
  {
    id: 'pemilu24-1-11',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
  {
    id: 'pemilu24-1-12',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
  {
    id: 'pemilu24-1-13',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
  {
    id: 'pemilu24-1-14',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
  {
    id: 'pemilu24-1-15',
    imageLink:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    answer: 'flower',
  },
];

export default function ImageGuesser() {
  const [gameData, setGameData] =
    useState<ImageGuesserGameDataTypes[]>(gameDataExample);
  const [isWinning, setWinning] = useState<boolean>(false);
  const [isStart, setStart] = useState<boolean>(false);

  const deleteByIndex = (index: number) => {
    setGameData((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  return (
    <section className='w-full h-full max-w-[92%] flex items-end mx-auto'>
      <div className='w-full h-[85%] grid grid-cols-[15%,_50%,_1fr] gap-8 pb-8'>
        <div className='flex items-center'>
          <InGameCountdown countdownState={isStart ? 'start' : 'pause'} />
        </div>

        <div className='relative'>
          <ImageGuesserCards gameData={gameData} setStart={setStart} />
        </div>

        <div className='h-full border border-border bg-background p-4 relative z-50 flex flex-col justify-between'>
          <div className='text-[#FBE886]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum
            laudantium aspernatur iste eligendi ducimus quam, cupiditate illo
            aperiam earum omnis laboriosam quaerat dolores eaque at alias nam ex
            vel corporis deleniti voluptatem reprehenderit incidunt maxime
            consequatur? Cumque sunt, odio dolor repellendus reiciendis tenetur.
            Provident sequi nemo commodi distinctio earum.
          </div>

          <ImageGuesserGameUserInput
            currentQuestionAnswer={gameData[0].answer}
            gameDataLength={gameData.length}
            onAnswerCorrect={deleteByIndex}
          />
        </div>
      </div>
    </section>
  );
}
