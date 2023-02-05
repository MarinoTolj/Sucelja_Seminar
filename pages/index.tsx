import MobileCarousel from "../components/carousels/mobileCarousel";
import StarterBundles from "../components/starterBundles";
import TrendingBirds from "../components/trendingBirds";
import BackToTop from "../components/backToTop";

export default function Home() {
  return (
    <div className="h-full">
      <MobileCarousel />
      <StarterBundles />
      <TrendingBirds />

      <div className="flex justify-center w-full h-14 my-4">
        <button className="bg-dark-green rounded-2xl w-5/6 text-white text-center">
          WHATS NEW
        </button>
      </div>
      <BackToTop />
    </div>
  );
}
