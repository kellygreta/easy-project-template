import Layout from "./components/Layout";
import ExampleModule from "./modules/ExampleModule";
import HeroSection from "./modules/HeroSection";
import AboutSection from "./modules/AboutSection";
import ServicesSection from "./modules/ServicesSection";
import GallerySection from "./modules/GallerySection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />

      <ServicesSection />
      <GallerySection />
      {/* <ExampleModule /> */}
    </Layout>
  );
}
