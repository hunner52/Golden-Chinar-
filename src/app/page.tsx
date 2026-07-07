import LoadingScreen from '@/components/ui/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Legacy from '@/components/sections/Legacy';
import Process from '@/components/sections/Process';
import Products from '@/components/sections/Products';
import WhyUs from '@/components/sections/WhyUs';
import Manufacturing from '@/components/sections/Manufacturing';
import PrivateLabel from '@/components/sections/PrivateLabel';
import Quality from '@/components/sections/Quality';
import Stats from '@/components/sections/Stats';
import Clients from '@/components/sections/Clients';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Legacy />
        <Process />
        <Products />
        <WhyUs />
        <Manufacturing />
        <PrivateLabel />
        <Quality />
        <Stats />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
