import { Button } from "@components/buttons/base";
import Features from "./features";
import Info from "./info";

export default function Landing() {
  const scrollToCarousel = () => {
    const carousel = document.getElementById("home-anime-carousel");
    carousel && carousel.scrollIntoView();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Info />
      <Features />
      <Button
        className="bg-blue-600 hover:bg-blue-700 transition-all text-white py-4 px-16 rounded-full"
        onClick={scrollToCarousel}
      >
        Get Started!
      </Button>
    </div>
  );
}
