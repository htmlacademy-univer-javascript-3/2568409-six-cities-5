import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Map, TileLayer, LatLng} from 'leaflet';
import {ICity} from '../types';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: ICity
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    } else if (isRenderedRef.current) {
      map?.panTo(new LatLng(city.location.latitude, city.location.longitude));
    }
  }, [mapRef, city, map]);

  return map;
}

export default useMap;
