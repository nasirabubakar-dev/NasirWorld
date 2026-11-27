import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';
import AdditionalProjects from './components/AdditionalProjects.jsx';
import BuildingNow from './components/BuildingNow.jsx';
import Services from './components/Services.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <AdditionalProjects />
        <BuildingNow />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
