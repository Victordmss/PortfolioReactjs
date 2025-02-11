import React from "react";
import { ComposableMap, Geography, Geographies, Marker } from "react-simple-maps";
import {theme} from "../theme"
import map_geography from "../assets/Schools/map_features.json"

// Markers array for dynamic programming
const markers = [
  { name: "UTC", coordinates: [2.8, 48], color: theme.schools.utc, size: 3, description: ["Université de technologie de Compiègne"] },
  { name: "RTU", coordinates: [24, 57], color: theme.schools.rtu, size: 2.5, description: ["Université technologique de Riga"] },
  { name: "SNU", coordinates: [127, 37.6], color: theme.schools.snu, size: 2.5, description: ["Université technologique de Séoul"] },
];

const SCALE_FACTOR = 1.2;  // Scale factor for markers hover

export function Map({setState}) {
  return (
    <ComposableMap
          projection="geoMercator" 
          projectionConfig={{
            center: [65, 40], 
            scale: 300, 
          }}
    >
      <Geographies geography={map_geography} fill="#004790AA" stroke="#FFFFFF" strokeWidth={0.8}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                hover: { fill: theme.colors.tertiary },
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
            stroke={theme.colors.tertiary_transparent}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            transform={`translate(${-12 * size}, ${-24 * size}) scale(${size})`}
            style={{
              cursor: "pointer", 
              transition: "transform 0.1s ease-in-out",
            }}
            onMouseEnter={(e) => e.currentTarget.setAttribute("transform", `translate(${-12 * (size*SCALE_FACTOR)}, ${-24 * (size*SCALE_FACTOR)}) scale(${size * SCALE_FACTOR})`)}
            onMouseLeave={(e) => e.currentTarget.setAttribute("transform", `translate(${-12 * size}, ${-24 * size}) scale(${size})`)}
          >
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
        </Marker>
      ))}
    </ComposableMap>
  );
}
