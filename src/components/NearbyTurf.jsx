import "./NearbyTurf.css";
import "./NearbyTurfTooltip.css";
import { useRef } from "react";


const turfs = [

  {
    id: 1,
    name: "Starlight Sports Complex",
    rating :4.1,
    distance: "1.2 miles away",
    price: "$45/hr",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600"
  },
  {
    id: 2,
    name: "Green Field Arena",
    distance: "2.0 miles away",
    rating :3.8,
    price: "$50/hr",
    image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=600"
  },
  {
    id: 3,
    name: "Champion Turf",
    distance: "2.5 miles away",
    rating :4.1,
    price: "$40/hr",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600"
  },
  {
    id: 4,
    name: "Victory Ground",
    distance: "3.1 miles away",
    rating :3.9,
    price: "$55/hr",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600"
  },
  {
    id: 5,
    name: "Prime Sports Hub",
    distance: "3.8 miles away",
    rating :4.3,
    price: "$48/hr",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600"
  },
  {
    id: 6,
    name: "Elite Arena",
    distance: "4.2 miles away",
    rating :4.5,
    price: "$60/hr",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600"
  },
  {
    id: 7,
    name: "Goal Masters Turf",
    rating :4.7,
    distance: "4.8 miles away",
    price: "$52/hr",
    image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=600"
  },
  {
    id: 8,
    name: "Legends Football Ground",
    rating :4.8,
    distance: "5.0 miles away",
    price: "$47/hr",
    image: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=600"
  },
  {
    id: 9,
    name: "Sports Kingdom",
    rating :3.8,
    distance: "5.5 miles away",
    price: "$58/hr",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600"
  },
  {
    id: 10,
    name: "Dream Play Turf",
    rating :4.8,
    distance: "6.0 miles away",
    price: "$43/hr",
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=600"
  }
];

const NearbyTurfs = () => {
  const sliderRef = useRef(null);

  const allTurfs = [...turfs];

  return (
    <div className="nearby-section">
      <div className="section-header">
        <h2>Nearby Turfs</h2>
        <button className="view-all-btn">
          View All <span>➜</span>
        </button>
      </div>

      <div className="turf-slider" ref={sliderRef}>
        {allTurfs.map((turf, idx) => (
          <div className="turf-card" key={`${turf.id}-${idx}`}>
            <div className="image-wrapper">
              <img src={turf.image} alt={turf.name} />
              <div className="rating-badge">⭐{turf.rating}</div>
            </div>

            <div className="card-content">
              <h3>{turf.name}</h3>

              <p className="distance">📍 {turf.distance}</p>

              <div className="price-booking">
                <div>
                  <span className="from-text">FROM</span>
                  <h4>{turf.price}</h4>
                  <span></span>
                </div>

                <button className="book-btn">BOOK NOW</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyTurfs;


