import React, { useEffect } from 'react'


const UseLocalStorage = (key,initValue) => {
  const [value, setValue] = React.useState(JSON.parse(localStorage.getItem(key))
  || initValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  },[key,value])
  return [value, setValue];
}

export default UseLocalStorage;

