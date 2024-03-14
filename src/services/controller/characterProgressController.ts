import {create} from 'zustand';
import useFetch from '../hooks/useFetch';
import {CharacterProgressTypes, StorylineIdTypes} from '../utils/types';
import {getStorylineData} from '../../database/storyline/storylines';

const initialState: Record<'characterProgress', CharacterProgressTypes> = {
  characterProgress: {
    userId: '1',
    chardId: '1',
    hiddenPrologList: [],
    unlockedStoryline: [],
    userEmail: 'jamesharlow@gmail.com',
  },
};

const characterProgressStore = create<{
  characterProgress: CharacterProgressTypes;
}>(() => initialState);

export default function useCharacterProgressController() {
  const {characterProgress} = characterProgressStore();
  const fetch = useFetch();

  return {
    characterProgress,
    addUnlockedStoryline: (storylineId: StorylineIdTypes) => {
      try {
        const currentState = characterProgress?.unlockedStoryline;
        const isIdExist = Boolean(
          currentState?.filter((x) => x.storylineId === storylineId).length
        );

        if (!isIdExist) {
          const storyline = getStorylineData(storylineId);

          const newStorylineDataToStores = {
            storylineId,
            gamePlayedList: [],
            totalChapter: storyline.totalChapter,
            finishedChapterList: [],
            playedChapterCount: 0,
          };

          const newState: CharacterProgressTypes = {
            ...characterProgress,
            unlockedStoryline: [
              ...(currentState as []),
              newStorylineDataToStores,
            ],
          };

          characterProgressStore.setState({characterProgress: {...newState}});
        }
      } catch (error: any) {
        console.error(error.message);
      }
    },
    getStorylineProgress: (storylineId: StorylineIdTypes) => {
      try {
        const currentStoryineProgress =
          characterProgress.unlockedStoryline.filter(
            (s) => s.storylineId === storylineId
          );

        if (!currentStoryineProgress.length) {
          return undefined;
        } else return currentStoryineProgress[0];
      } catch (error: any) {
        console.error(error.message);
      }
    },
    addGamePlayedList: (storylineId: StorylineIdTypes, gameId: string) => {
      try {
        const stateRecord = characterProgress.unlockedStoryline;
        const selectedRecord = stateRecord.filter(
          (s) => s.storylineId === storylineId
        )[0];
        const isPlayed = selectedRecord.gamePlayedList.includes(gameId);

        if (!isPlayed) {
          // add new record
          const updatedGamePlayedList = [
            ...selectedRecord.gamePlayedList,
            gameId,
          ];

          // update the selected record
          const updatedSelectedRecord = {
            ...selectedRecord,
            gamePlayedList: updatedGamePlayedList,
          };

          // update the whole state
          const updatedState = {
            ...characterProgress,
            unlockedStoryline: [
              ...characterProgress.unlockedStoryline.filter(
                (s) => s.storylineId !== storylineId
              ),
              updatedSelectedRecord,
            ],
          };

          characterProgressStore.setState({characterProgress: updatedState});
        }
      } catch (error: any) {
        console.error(error.message);
      }
    },
  };
}
