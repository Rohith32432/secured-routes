import React, { createContext, useContext, useEffect, useState } from 'react';

const context = createContext(null);

export function Maincontext({ children }) {
  const [status, setstaus] = useState(false)
  useEffect(() => {
    const log = localStorage.getItem('user')
    if (log) islogged(log)
  }, [status])
  const islogged = (ack) => {
    if (localStorage.getItem('user') && ack != null)
      setstaus(true)
    else setstaus(false)
  }

  return (
    <context.Provider value={{ status, islogged }}>{children}</context.Provider>
  );
}

export function useTest() {
  return useContext(context);
}
