import React, { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const MapComponent: React.FC = () => {
  useEffect(() => {
    // Initialize the map
    const map = new Map({
      target: 'map', // The id of the map container
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });

    // Clean up on unmount
    return () => map.setTarget(undefined);
  }, []);

  return (
    <div id="map" style={{ width: '100%' }}></div>
  );
};

export default MapComponent;
