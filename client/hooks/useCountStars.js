import {useState, useEffect} from 'react';

export default function useCountStars(points) {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    if(points === 0) {
      setStars(1);
    } else if(points >= 200) {
      setStars(2);
    } else if(points >= 500) {
      setStars(3);
    } else if(points >= 700) {
      setStars(4);
    } else {
      setStars(5);
    }
  }, [points])

  return { stars };
}
