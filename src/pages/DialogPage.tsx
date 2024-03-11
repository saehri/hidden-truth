import {useContext} from 'react';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';
import {StorylineIdTypes, StorylineTypes} from '../services/utils/types';

import {getDialog} from '../database/dialogs';
import Dialog from '../components/ui/Dialog';

export default function DialogPage() {
  const {activePage} = useContext(ActivePageContext);
  const dialogData = getDialog();

  return (
    <div className='absolute w-full h-full'>
      <header>
        <nav>
          <button className='absolute top-4 '>SKIP DIALOG</button>
        </nav>
      </header>

      <Dialog dialogSquences={dialogData[0].dialogSequences} />
    </div>
  );
}
