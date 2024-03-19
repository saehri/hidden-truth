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

const STORAGE_KEY = 'PROGRESS';

const characterProgressStore = create<{
  characterProgress: CharacterProgressTypes;
}>(() => JSON.parse(localStorage.getItem(STORAGE_KEY)!) || '{}');

export default function useCharacterProgressController() {
  const {characterProgress} = characterProgressStore();
  const fetch = useFetch();

  return {
    characterProgress,
    addUnlockedStoryline: (storylineId: StorylineIdTypes) => {
      try {
        const currentState = characterProgress?.unlockedStoryline;
        const isIdExist =
          currentState.length === 0
            ? false
            : currentState?.filter((x) => x.storylineId === storylineId).length;

        console.log(currentState, isIdExist);

        if (!isIdExist) {
          const storyline = getStorylineData(storylineId);

          const newStorylineDataToStores = {
            storylineId,
            gamePlayedList: [],
            totalChapter: storyline.totalChapter,
            finishedChapterList: [],
            finishedChapterCount: 0,
          };

          const newState: CharacterProgressTypes = {
            ...characterProgress,
            unlockedStoryline: [
              ...(currentState as []),
              newStorylineDataToStores,
            ],
          };

          characterProgressStore.setState({characterProgress: {...newState}});
          localStorage.setItem(STORAGE_KEY, JSON.stringify(characterProgress));
        }
      } catch (error: any) {
        console.error(error.message);
      }
    },
    getStorylineProgress: (storylineId: StorylineIdTypes) => {
      try {
        if (!characterProgress.unlockedStoryline.length) return undefined;

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
    updateStorylineProgress: (
      storylineId: StorylineIdTypes,
      gameId: string,
      chapterId: string,
      isFinalGame: boolean
    ) => {
      try {
        const stateRecord = characterProgress.unlockedStoryline;
        const selectedRecord = stateRecord.filter(
          (s) => s.storylineId === storylineId
        )[0];
        const isGamePlayed = selectedRecord.gamePlayedList.includes(gameId);
        const isChapterComleted =
          selectedRecord.finishedChapterList.includes(chapterId);

        let updatedCompletedChapter: string[] =
          selectedRecord.finishedChapterList;
        let updatedGamePlayedList: string[] = selectedRecord.gamePlayedList;

        if (isFinalGame) {
          if (!isChapterComleted) {
            updatedCompletedChapter.push(chapterId);
          }
        }

        if (!isGamePlayed) {
          updatedGamePlayedList.push(gameId);
        }

        // update the selected record
        const updatedSelectedRecord = {
          ...selectedRecord,
          gamePlayedList: updatedGamePlayedList,
          finishedChapterList: updatedCompletedChapter,
          finishedChapterCount: updatedCompletedChapter.length,
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
        localStorage.setItem(STORAGE_KEY, JSON.stringify(characterProgress));
      } catch (error: any) {
        console.error(error.message);
      }
    },
    store: () => {
      // if data is undefined
      if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(initialState.characterProgress)
        );
        characterProgressStore.setState({
          characterProgress: JSON.parse(localStorage.getItem(STORAGE_KEY)!),
        });
      } else {
        characterProgressStore.setState({
          characterProgress: JSON.parse(localStorage.getItem(STORAGE_KEY)!),
        });
      }
    },
    sync: () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(characterProgress));
    },
  };
}
