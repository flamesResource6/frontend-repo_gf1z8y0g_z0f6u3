import Hero from './components/Hero';
import { FeaturesGrid, FastLimit } from './components/Feature';
import Comparison from './components/Comparison';
import Steps from './components/Steps';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Hero with Spline cover */}
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
      <footer className="bg-slate-950 py-12">
        <div className="mx-auto max-w-6xl px-6 text-center text-blue-300/70">
          © {new Date().getFullYear()} Novacard. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App
