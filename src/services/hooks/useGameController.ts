import {useContext, useState} from 'react';
import {GameStateTypes, GameTypes, StorylineIdTypes} from '../utils/types';
import {getGameData} from '../../database/gameData';
import {ActivePageContext} from '../API/pageViewingManagerAPI';

export default function useGameController(
  customDuration?: GameDifficultyTypes
) {
  // Current active page
  const {activePage} = useContext(ActivePageContext);

  // Global state of the game state: Handle the game state
  const [gameState, setGameState] = useState<GameStateTypes>('start');

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
  const gameDuration = getGameDuration(gameData.difficulty, customDuration);

  return {
    gameState,
    setGameState,
    gameData,
    isGameOver,
    gameDuration,
    isGameCompleted,
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
    easy: 6000,
    medium: 5000,
    hard: 4000,
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
