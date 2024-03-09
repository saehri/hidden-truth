import {useContext, useState} from 'react';
import {GameStateTypes, GameTypes, StorylineIdTypes} from '../utils/types';
import {getGameData} from '../../database/gameData';
import {ActivePageContext} from '../API/pageViewingManagerAPI';

type useGameControllerTypes = {customDuration?: GameDurationTypes};

export default function useGameController({
  customDuration,
}: useGameControllerTypes) {
  // Current active page
  const {activePage} = useContext(ActivePageContext);

  // Global state of the game state: Handle the game state
  const [gameState, setGameState] = useState<GameStateTypes>('preparation');
  // Player life state
  const [playerLife, setPlayerLife] = useState<number>(3);

  function reducePlayerLife() {
    let currentLife = playerLife;
    if (currentLife - 1 === 0) {
      setPlayerLife(0);
      setGameState('gameOver');
    } else {
      setPlayerLife((prev) => prev - 1);
    }
  }

  // Game state abstractions
  const isGameOver = gameState === 'gameOver';
  const isGameCompleted = gameState === 'completed';

  // Get the game data from database
  const gameData: any = getGameData({
    gameId: activePage.state?.gameId as string,
    gameType: activePage.state?.gameType as GameTypes,
    storylineId: activePage.state?.storylineId as StorylineIdTypes,
  });

  // Controll the game duration: should be able to add custom duration
  /* @ts-ignore */
  const gameDuration = getGameDuration(
    activePage.state?.gameDifficulty as GameDifficultyTypes,
    customDuration
  );

  return {
    gameState,
    setGameState,
    gameData,
    isGameOver,
    gameDuration,
    isGameCompleted,
    playerLife,
    reducePlayerLife,
  };
}

type GameDifficultyTypes = 'easy' | 'medium' | 'hard';
type GameDurationTypes = Record<GameDifficultyTypes, number>;

/* 
  NOTE:
  This is the game duration on development mode, change it before prod
*/
function getGameDuration(
  gameDifficulty: GameDifficultyTypes,
  customDuration?: GameDurationTypes
) {
  let duration: GameDurationTypes = {
    easy: 240,
    medium: 180,
    hard: 120,
  };

  // Double check to make sure that custom duration is exist and valid
  // And then replce game duration with the new one
  if (customDuration && Object.keys(customDuration).length === 3) {
    duration.easy = customDuration.easy;
    duration.medium = customDuration.medium;
    duration.hard = customDuration.hard;
  }

  return duration[gameDifficulty];
}
