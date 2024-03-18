import {useContext} from 'react';
import {motion} from 'framer-motion';
import {ActivePageContext} from '../services/API/pageViewingManagerAPI';

import {getDialog} from '../database/dialogs';
import Dialog from '../components/ui/Dialog';
import {homepageBackground} from '../assets/backgrounds/homepageBackground';

export default function DialogPage() {
  const {activePage} = useContext(ActivePageContext);
  const dialogData = getDialog(activePage.state?.gameId as string);

  return (
    <div className='absolute w-full h-full'>
      <header>
        <nav>
          <button className='absolute top-4 '>SKIP DIALOG</button>
        </nav>
      </header>

      <Dialog dialogSquences={dialogData[0].dialogSequences} />

      <motion.img
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        src={homepageBackground}
        className='w-full h-full object-cover brightness-50 absolute top-0 left-0 z-0'
        alt=''
      />
    </div>
  );
}
