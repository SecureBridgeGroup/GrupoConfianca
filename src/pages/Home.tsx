import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import GallerySection from '../components/home/GallerySection';
import BeforeAfterSection from '../components/home/BeforeAfterSection';
import ClientsSection from '../components/home/ClientsSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <BeforeAfterSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
