import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ScreenshotsSection from '../components/sections/ScreenshotsSection';
import CTASection from '../components/sections/CTASection';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <CTASection />
    </div>
  );
}
