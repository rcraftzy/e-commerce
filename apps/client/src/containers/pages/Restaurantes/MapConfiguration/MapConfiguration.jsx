import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { useEffect, useRef, useState } from "react";
const markers = [
  {
    geocode: [-2.7407747, -78.8494491],
    popUp: "Emilio Abad",
  },
  {
    geocode: [-2.7446874, -78.8483158],
    popUp: "Hotel",
  },
  {
    geocode: [-2.7419321, -78.8476359],
    popUp: "cafe",
  },
];
export const MapConfiguration = () => {
  const mapRef = useRef();
  const [state, setState] = useState({
    currentLocation: {
      lat: "-2.7404828",
      lng: "-78.8507159",
    },
    zoom: 13,
  });

  const [currentZoom, setCurrentZoom] = useState(15); // Valor inicial del zoom (puedes ajustarlo según tus necesidades)

  const [currentPosition, setCurrentPosition] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setCurrentPosition({
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        });
      },
      function (error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2991/2991231.png",
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      iconSize: point(33, 33, true),
    });
  };

  const findNearestPoint = () => {
    const { current = {} } = mapRef;
    const { leafletElement } = current;
    mapRef.current += 1;
    console.log(current);

    if (currentPosition) {
      const nearestPoint = markers.reduce(
        (nearest, point) => {
          const distance = calculateDistance(currentPosition, point.geocode);
          return distance < nearest.distance ? { ...point, distance } : nearest;
        },
        { distance: Infinity }
      );

      console.log(nearestPoint);
    }

    return null;
  };

  const calculateDistance = (location1, location2) => {
    const latLng1 = L.latLng({ lat: location1?.lat, lng: location1?.lng }); //po
    const latLng2 = L.latLng({ lat: location2[0], lng: location2[1] });
    return latLng1.distanceTo(latLng2);
  };

  return (
    <div>
      <MapContainer
        ref={mapRef}
        center={state.currentLocation}
        zoom={currentZoom}
        bounceAtZoomLimits={true}
        className="h-96 w-full pt-20"
        closePopupOnClick={() => {
          console.log("first");
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((markers, index) => (
            <Marker icon={customIcon} key={index} position={markers.geocode}>
              <Popup>
                <h2>{markers.popUp}</h2>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      {/* <h1>posicion actual {JSON.stringify(currentPosition)}</h1>
      <button
        type="button"
        className="bg-blue-500 text-white py-2 px-2  rounded-lg"
        onClick={findNearestPoint}
      >
        La ruta mas cercana es
      </button>
      <button type="button" onClick={() => setCurrentZoom(currentZoom * 10)}>
        Aumentar zoom
      </button> */}
    </div>
  );
};
