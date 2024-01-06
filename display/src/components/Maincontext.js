import React, { createContext, useContext, useEffect, useState } from 'react';

 const context = createContext(null);

export function Maincontext({ children }) {
  const [status,setstaus]=useState(false)
  useEffect(()=>{

    if(localStorage.getItem('user')!=null)
        setstaus(true)
  },[status])

  return (
    <context.Provider value={status}>{children}</context.Provider>
  );
}

export function useTest() {
  return useContext(context);
}
