import React, {useEffect, useRef} from 'react';
import {IMapProps, IPlaceCard} from '../types.ts';
import {Icon, layerGroup, Marker} from 'leaflet';
import useMap from '../hooks/use-map.tsx';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

export const Map: React.FC<IMapProps> = (props: IMapProps) => {
  const {city, places, selectedPlace} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      places.forEach((place: IPlaceCard) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });

        marker
          .setIcon(
            selectedPlace !== undefined && place.id === selectedPlace.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, places, selectedPlace]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
};
