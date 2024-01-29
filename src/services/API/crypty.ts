const crypty = {
  encrypt: (value: any) => {
    const stringifiedValue = JSON.stringify(value);

    return btoa(stringifiedValue);
  },
  decrypt: (value: any) => {
    return atob(value);
  },
};

export default crypty;
