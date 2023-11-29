import {useRef, useEffect} from 'react';
import {Marker, layerGroup, Icon} from 'leaflet';
import {TOfferPreview, TLocation} from '../../types';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

type TMapProps = {
  block: string;
  offers: TOfferPreview[];
  activeOfferId?: TOfferPreview['id'] | null;
  location: TLocation;
}

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

function OffersMap({block, offers, activeOfferId, location}: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if(map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
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
  }, [map, offers, activeOfferId]);

  return (
    <section
      className={`${block}${'__map map'}`}
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto 50px',
      }}
      ref={mapRef}
    >
    </section>
  );
}

export default OffersMap;
