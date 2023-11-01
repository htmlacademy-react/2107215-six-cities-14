import {useRef, useEffect} from 'react';
import {Marker, layerGroup, Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {TOfferPreview} from '../types';
import useMap from '../hooks/use-map';
import {useCity} from '../hooks/use-city';

type TMapSize = 'small' | 'large';

type TOffersMapProps = {
  block: string;
  offers: TOfferPreview[];
  activeOfferId?: TOfferPreview['id'] | null;
  size: TMapSize;
}

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 40]
});

const sizeMap: Record<TMapSize, {height: string}> = {
  small: {height: '579'},
  large: {height: '100%'}
};

function OffersMap({block, offers, size = 'large', activeOfferId}: TOffersMapProps): JSX.Element {
  const {city} = useCity();
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const currentOffers = (activeOfferId === undefined ? offers.slice(0, 3) : offers);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      currentOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
        });

        marker
          .setIcon(
            activeOfferId !== null && offer.id === activeOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, currentOffers, activeOfferId]);

  return (
    <section className={`${block}${'__map map'}`} style={{...sizeMap[size]}} ref={mapRef}></section>
  );
}

export default OffersMap;
