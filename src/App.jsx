import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Sports from "./components/Sports";
import RewardCard from "./components/RewardCars";
import NearbyTurfs from "./components/NearbyTurf";
import PopularLocations from "./components/Populerlocation";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      
            <div className="next-reward-row">
        <Sports />
        <RewardCard />
      </div>

      <PopularLocations />
      <NearbyTurfs />
      <Footer />
    </div>
  );
}


export default App;
