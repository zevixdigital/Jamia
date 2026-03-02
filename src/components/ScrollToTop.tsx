import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Job 1: Auto-scroll to top when changing pages (React Router fix)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // 'instant' is better for page loads so it doesn't animate up every time you click a link
    });
  }, [pathname]);

  // Job 2: Show/hide the floating button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Lower threshold so it appears faster
      setIsVisible(window.scrollY > 200); 
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Job 3: Function for the button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[9999] flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-deep text-white shadow-2xl border-4 border-white hover:bg-emerald-800 hover:scale-110 active:scale-95 transition-all duration-300 group ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-7 w-7 transition-transform group-hover:-translate-y-1" />
    </button>
  );
};

export default ScrollToTop;