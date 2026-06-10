import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h2 className="footer-logo">
            ⚽ TurfMaster
          </h2>

          <p>
            Premium sports facility booking platform
            helping athletes reserve the best grounds.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Bookings</li>
            <li>Sports</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Sports</h3>

          <ul>
            <li>Football</li>
            <li>Cricket</li>
            <li>Badminton</li>
            <li>Tennis</li>
          </ul>
        </div>

        <div className="footer-column">

          <h3>Newsletter</h3>

          <p>
            Get updates on new turfs and offers.
          </p>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 TurfMaster. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;