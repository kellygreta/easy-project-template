import HeroSection from "../modules/HeroSection";
import AboutSection from "../modules/AboutSection";
import ServicesSection from "../modules/ServicesSection";
import GallerySection from "../modules/GallerySection";
// import ExampleModule from "../modules/ExampleModule";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      {/* <ExampleModule /> */}
    </>
  );
}
