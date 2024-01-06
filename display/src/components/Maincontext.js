import React, { createContext, useContext } from 'react';

export const context = createContext(null);

export function Maincontext({ children }) {
  const values = {
    status: false
  };

  return (
    <context.Provider value={values}>{children}</context.Provider>
  );
}

export function useTest() {
  return useContext(context);
}
