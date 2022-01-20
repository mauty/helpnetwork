import { useState, useEffect } from "react";

export default function useViewport() {
  const [viewport, setViewport] = useState({
    longitude: -79.3871,
    latitude: 43.6426,
    zoom: 13.5,
  });

  const [copyViewport, setCopyViewport] = useState({ ...viewport });
  const [isViewportLoading, setIsViewportLoading] = useState(false);

  useEffect(
    () => {
      setIsViewportLoading(true);
      // Settimeout the dependency array of the useQuery
      // so that it only refetch 1 1/2 seconds after user moves the map
      // so it doesn't flood the server with many requests
      let timer = setTimeout(() => {
        setCopyViewport(viewport);
        setIsViewportLoading(false);
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    }, [viewport]);

  return { viewport, copyViewport, setViewport, isViewportLoading };
}