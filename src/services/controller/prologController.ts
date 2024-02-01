import {create} from 'zustand';

const STORAGE_KEY = 'OPENED_PROLOG';

const initialState = {
  openedProlog: [],
};

const prologStore = create<{openedProlog: string[]}>(() => initialState);

export default function usePrologController() {
  const {openedProlog} = prologStore();

  return {
    openedProlog,
    getOpenedProlog: () => {
      const storedData = localStorage.getItem(STORAGE_KEY);

      if (storedData) {
        const parsedStoredData = JSON.parse(storedData);

        prologStore.setState({
          openedProlog: [...parsedStoredData],
        });
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify([...openedProlog]));
    },
    setOpenedProlog: (storylineId: string) => {
      const storedData = localStorage.getItem(STORAGE_KEY);

      if (storedData) {
        const parsedStoredData = JSON.parse(storedData);

        // If the storylineId does not exist in the storage
        if (!(parsedStoredData.indexOf(storylineId as never) >= 0)) {
          console.log(storylineId, 'does not exist in storage');

          const newData = [storylineId, ...parsedStoredData];
          prologStore.setState({
            openedProlog: newData,
          });

          localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
        } else {
          prologStore.setState({
            openedProlog: parsedStoredData,
          });

          localStorage.setItem(STORAGE_KEY, JSON.stringify(openedProlog));
        }
      }
    },
  };
}
