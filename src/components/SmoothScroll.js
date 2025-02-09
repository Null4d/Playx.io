import React, { useEffect, useRef } from 'react';

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let current = 0;
    let target = 0;
    const ease = 0.1; 

    const setBodyHeight = () => {
      document.body.style.height = `${container.getBoundingClientRect().height}px`;
    };
    setBodyHeight();
    window.addEventListener('resize', setBodyHeight);

    const onScroll = () => {
      target = window.scrollY;
    };
    window.addEventListener('scroll', onScroll);

    const smoothLoop = () => {
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.1) current = target;
      container.style.transform = `translateY(-${current}px)`;
      requestAnimationFrame(smoothLoop);
    };

    smoothLoop();

    return () => {
      window.removeEventListener('resize', setBodyHeight);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        willChange: 'transform', 
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
