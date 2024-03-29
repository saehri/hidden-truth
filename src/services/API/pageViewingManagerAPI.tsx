import {Dispatch, SetStateAction, createContext, useState} from 'react';

/* @definition - 
  This API handle the user navigation, it mocks the react-router-dom api but 
  without storing the user navigation history.
  WARNING - This api is only intended for small projects. 
  It's perfect for a game like this app or any app where you want total controll 
  of how the user should navigates through the app.
  
  PS - Like I said, this API does not use browserHistory API, whick makes 
  the "back" and "forward" navigation button on browser unusable.
*/

/* @types defines all the pages that the player can visit */
export type ViewablePageTypes =
  | 'homepage'
  | 'storylineSelectionPage'
  | 'storylineDetailPage'
  | 'prologPage'
  | 'gamePage'
  | 'dialogPage'
  | 'signupPage'
  | 'signinPage'
  | 'startPage';

/* 
  @definitions
  homepage -> Homepage
  storylineSelectionPage -> Selecting the storyline
  storylineDetail -> Viewing the storyline detail
  gamePage -> Plays game
  dialogPage -> Watch dialog and interact with it 
*/

/* @types defines all the value types the "state" can take */
export type PageStateValueTypes = string | number | boolean | (() => void);
/* @types defines the "state" object structures */
export type PageStateTypes = Record<string, PageStateValueTypes>;
export type ActivePageTypes = {
  location: ViewablePageTypes;
  state?: PageStateTypes;
};

export type ActivePageContextTypes = {
  activePage: ActivePageTypes;
  setActivePage: Dispatch<SetStateAction<ActivePageTypes>>;
};

export const ActivePageContext = createContext<ActivePageContextTypes>({
  activePage: {location: 'signinPage'},
  setActivePage: undefined as unknown as Dispatch<
    SetStateAction<ActivePageTypes>
  >,
});

interface AppPageViewingManagerAPI {
  children: React.ReactNode;
}

export default function AppPageViewingManagerAPI({
  children,
}: AppPageViewingManagerAPI) {
  const [activePage, setActivePage] = useState<ActivePageTypes>({
    location: 'startPage',
  });

  return (
    <ActivePageContext.Provider value={{activePage, setActivePage}}>
      {children}
    </ActivePageContext.Provider>
  );
}
