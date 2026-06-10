import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">

          <h1>
            Book Your Perfect Turf
            <br />
            In Seconds
          </h1>

          <p>
            Discover premium sports turfs,
            check real-time availability
            and book instantly from anywhere.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Find Turf
            </button>

            <button className="secondary-btn">
              View Schedule
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;