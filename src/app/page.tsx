import LoadingScreen from '@/components/ui/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Legacy from '@/components/sections/Legacy';
import Process from '@/components/sections/Process';
import Products from '@/components/sections/Products';
import Manufacturing from '@/components/sections/Manufacturing';
import PrivateLabel from '@/components/sections/PrivateLabel';
import Quality from '@/components/sections/Quality';
import Stats from '@/components/sections/Stats';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Legacy />
        <Products />
        <Process />
        <Manufacturing />
        <PrivateLabel />
        <Quality />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
