import React, { useState } from 'react';

const AppComponentContext = React.createContext([{}, () => {}]);

const AppComponentProvider = (props) => {
  const [storedData, setState] = useState({});
  return (
    <AppComponentContext.Provider value={[storedData, setState]}>
      {props.children}
    </AppComponentContext.Provider>
  );
}

export { AppComponentContext, AppComponentProvider }