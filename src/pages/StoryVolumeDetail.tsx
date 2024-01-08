import {useContext} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {getVolumeById} from '../database/volume/playableVolumes';

import Button from '../components/ui/Button';
import {StoryVolumeIdTypes, StoryVolumeTypes} from '../services/utils/types';

export default function StorystoryVolumeDetail() {
  const {activePage, setActivePage} = useContext(ActivePageContext);
  const storyVolumeData = getVolumeById(
    activePage.state?.volumeId as StoryVolumeIdTypes,
    activePage.state?.volumeType as StoryVolumeTypes
  );

  return (
    <div className='relative overflow-hidden h-full'>
      <section className='grid grid-cols-[1fr,_35%] h-full'>
        <div className='bg-blue-700'></div>

        <div className='bg-white flex justify-end items-start flex-col gap-8 p-4'>
          <Button
            onClick={() => setActivePage({location: 'storyVolumeSelection'})}
          >
            Back button
          </Button>

          {storyVolumeData?.playableChapter.map((ch) => (
            <div key={ch.chapterName}>
              <h4 className='mb-4'>{ch.chapterName}</h4>

              <div className='flex flex-col gap-4 text-left'>
                {ch.games.map((g) => (
                  <button
                    key={g.gameId}
                    onClick={() =>
                      setActivePage({
                        location: 'game',
                        state: {
                          gameId: g.gameId,
                          gameType: g.gameType,
                          gameName: `${ch.chapterName}: ${g.gameName}`,
                          volumeId: activePage.state
                            ?.volumeId as StoryVolumeIdTypes,
                          volumeType: activePage.state
                            ?.volumeType as StoryVolumeTypes,
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
