import React from "react";
import { ComposableMap, Geography, Geographies, Marker } from "react-simple-maps";
import {theme} from "../theme"

const markers = [
  { name: "UTC", coordinates: [2.8263171, 49.4179497], color: "#F7CC11", size: 2, description: ["Université de technologie de Compiègne"] },
  { name: "RTU", coordinates: [24.1051846, 56.9493977], color: "#225451", size: 2, description: ["Université technologique de Riga"] },
];

export function Map({setState}) {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1500,
      }}
    >
      <Geographies geography="/features.json" fill={theme.colors.tertiary} stroke="#FFFFFF" strokeWidth={0.8}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                hover: { fill: theme.colors.tertiary_light },
              }}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, color, size }) => (
        <Marker
          key={name}
          coordinates={coordinates}
          onClick={(event) => { setState(event, name); }}
        >
          <g
            fill={color}
            stroke="#CCCCCC"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            transform={`translate(${-12 * size}, ${-24 * size}) scale(${size})`}
          >
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
        </Marker>
      ))}
    </ComposableMap>
  );
}
