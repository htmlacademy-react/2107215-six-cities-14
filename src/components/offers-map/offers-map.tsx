import {useRef, useEffect} from 'react';
import {Marker, layerGroup, Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {TOfferPreview} from '../../types';
import useMap from '../../hooks/use-map';
import {useCity} from '../../hooks/use-city';

type TOffersMapProps = {
  block: string;
  offers: TOfferPreview[];
  activeOfferId?: TOfferPreview['id'] | null;
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

function OffersMap({block, offers, activeOfferId}: TOffersMapProps): JSX.Element {
  const {city} = useCity();
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const currentOffers = (activeOfferId === undefined ? offers.slice(0, 3) : offers);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      currentOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
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
    <section className={`${block}${'__map map'}`} ref={mapRef}></section>
  );
}

export default OffersMap;
