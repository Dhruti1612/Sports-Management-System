import "./Sports.css";

function Sports() {
  const sports = [
    {
      name: "Football",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600",
    },
    {
      name: "Cricket",
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600",
    },
    {
      name: "Badminton",
      image:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600",
    },
    {
      name: "Tennis",
      image:
        "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600",
    },
  ];

  return (
    <section className="sports-section">
      <div className="sports-header">
        <h2>Browse by Sport</h2>
        <p>
          Find premium sports facilities tailored to your favorite game.
        </p>
      </div>

      <div className="sports-grid">
        {sports.map((sport, index) => (
          <div className="sport-card" key={index}>
            <img src={sport.image} alt={sport.name} />
            <div className="sport-overlay">
              <h3>{sport.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sports;