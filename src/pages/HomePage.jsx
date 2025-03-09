import HeroSection from "../components/Hero";
import Arrivals from "../components/Arrivals";
import TopSellers from "../components/Top_selling";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Arrivals />
      <TopSellers />
    </div>
  );
}

export default HomePage;
