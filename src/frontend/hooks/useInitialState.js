import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((response) => setVideo(response));
  }, []);
  return videos;
};

export default useInitialState;
