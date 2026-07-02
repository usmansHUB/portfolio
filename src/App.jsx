import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import TwistingRibbon from './components/ui/twisting-ribbon';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));

const AnimatedRoutes = () => {
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const visitedPaths = useRef(new Set());

  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsPageLoading(true);
  }

  useEffect(() => {
    const isFirstTime = !visitedPaths.current.has(location.pathname);
    if (isFirstTime) {
      visitedPaths.current.add(location.pathname);
    }
    const delay = isFirstTime ? 200 : 100; // 0.2s for first time, 0.1s for subsequent times
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isPageLoading) {
    return <PageLoader />;
  }

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="grain relative flex min-h-screen flex-col bg-background text-foreground">
        <TwistingRibbon className="fixed inset-0 pointer-events-none z-0 rounded-none opacity-25" />
        <Navbar />
        <main className="relative z-10 flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

