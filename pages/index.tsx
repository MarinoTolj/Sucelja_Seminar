import MobileCarousel from "../components/carousels/mobileCarousel";
import StarterBundles from "../components/starterBundles";
import TrendingBirds from "../components/trendingBirds";
import Button from "../components/button";
import DesktopCarousel from "../components/carousels/desktopCarousel";

export default function Home() {
  return (
    <div className="h-full">
      <DesktopCarousel />
      <MobileCarousel />
      <StarterBundles />
      <TrendingBirds />
      <div className="flex justify-center w-full h-20">
        <Button>WHATS NEW</Button>
      </div>
    </div>
  );
}
