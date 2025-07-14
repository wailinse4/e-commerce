import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ title, description, children, itemWidth = 320, spacing = 32 }) => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const scrollContainerRef = useRef(null);

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftButton(scrollLeft > 10);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
      
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, [children]);

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900">{title}</h2>
          {description && (
            <p className="text-xl text-gray-700 mt-2">{description}</p>
          )}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => scroll('left')}
            className={`p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors ${!showLeftButton ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!showLeftButton}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors ${!showRightButton ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!showRightButton}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto no-scrollbar pb-6 -mx-4 px-4"
      >
        <div className="flex space-x-8 w-max">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
