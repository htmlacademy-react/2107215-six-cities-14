// import {Icon, Marker, layerGroup} from 'leaflet';
import {useRef, useEffect} from 'react';
import {Marker, layerGroup, Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {TOfferPreview} from '../../types';
import useMap from '../../hooks/use-map';
import {CITY} from '../../mocks/mocks';

type TOffersMapProps = {
  block: string;
  offers: TOfferPreview[];
  selectedPoint: TOfferPreview['id'] | null;
}

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function OffersMap({block, offers, selectedPoint}: TOffersMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, CITY);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.city.location.latitude,
          lng: point.city.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== null && point.id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedPoint]);

  return (
    <div className="cities__right-section">
      <section className={`${block}${'__map map'}`} style={{height: '100%'}} ref={mapRef}></section>
    </div>
  );
}

export default OffersMap;
