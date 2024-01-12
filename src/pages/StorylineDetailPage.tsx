import {useContext} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {StorylineIdTypes, StorylineTypes} from '../services/utils/types';
import {getStorylineData} from '../database/storyline/storylines';

import Button from '../components/ui/Button';

export default function StorylineDetailPage() {
  const {activePage, setActivePage} = useContext(ActivePageContext);
  const storylineData = getStorylineData(
    activePage.state?.storylineId as StorylineIdTypes,
    activePage.state?.storylineType as StorylineTypes
  );

  return (
    <div className='relative overflow-hidden h-full'>
      <section className='grid grid-cols-[1fr,_35%] h-full'>
        <div className='bg-blue-700'></div>

        <div className='bg-white flex justify-end items-start flex-col gap-8 p-4'>
          <Button
            onClick={() =>
              setActivePage({
                location: 'storylineSelectionPage',
                state: {
                  storylineType: activePage.state
                    ?.storylineType as StorylineTypes,
                },
              })
            }
          >
            Back button
          </Button>

          {storylineData?.playableChapter.map((ch) => (
            <div key={ch.chapterName}>
              <h4 className='mb-4'>{ch.chapterName}</h4>

              <div className='flex flex-col gap-4 text-left'>
                {ch.games.map((g) => (
                  <button
                    key={g.gameId}
                    onClick={() =>
                      setActivePage({
                        location: 'gamePage',
                        state: {
                          gameId: g.gameId,
                          gameType: g.gameType,
                          gameName: `${ch.chapterName}: ${g.gameName}`,
                          storylineId: activePage.state
                            ?.storylineId as StorylineIdTypes,
                          storylineType: activePage.state
                            ?.storylineType as StorylineTypes,
                        },
                      })
                    }
                    className='bg-background text-border p-2'
                  >
                    {g.gameName}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <LoadingScreen /> */}
    </div>
  );
}
