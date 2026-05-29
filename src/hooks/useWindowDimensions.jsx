/* 
Hook to return variables related to screen width and height.
The below code was taken from the following article
https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
*/

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const hasWindow = typeof window !== 'undefined';

  return {
    width: hasWindow ? window.innerWidth : null,
    height: hasWindow ? window.innerHeight : null,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}