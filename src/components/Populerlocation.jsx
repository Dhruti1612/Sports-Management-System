import React from "react";
import "./Populerlocation.css";

const locations = [
  {
    id: 1,
    name: "Downtown",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600",
  },
  {
    id: 2,
    name: "North Heights",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
  },
  {
    id: 3,
    name: "West District",
    image:
      "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=600",
  },
  {
    id: 4,
    name: "Bay Area",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600",
  },
];

const PopularLocations = () => {
  return (
    <div className="popular-locations">
      <h2 className="section-title">Popular Locations</h2>

      <div className="locations-grid">
        {locations.map((location) => (
          <div className="location-card" key={location.id}>
            <img
              src={location.image}
              alt={location.name}
              className="location-image"
            />
            <div className="location-overlay">
              <h3>{location.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularLocations;