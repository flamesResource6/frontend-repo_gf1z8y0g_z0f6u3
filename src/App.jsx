import Hero from './components/Hero';
import { FeaturesGrid, FastLimit } from './components/Feature';
import Comparison from './components/Comparison';
import Steps from './components/Steps';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-[#333333]">
      {/* Hero with image carousel */}
      <Hero />

      {/* Three feature sections */}
      <FeaturesGrid />

      {/* Fast limit CTA */}
      <FastLimit />

      {/* Comparison section */}
      <Comparison />

      {/* Steps section */}
      <Steps />

      {/* Footer */}
      <footer className="py-12">
        <div className="mx-auto max-w-6xl px-6 text-center text-[#666666]">
          © {new Date().getFullYear()} Novacard. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App
