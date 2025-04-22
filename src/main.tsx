import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Hook up animation for progress bars
document.addEventListener('DOMContentLoaded', () => {
  const setupProgressAnimations = () => {
    const progressBars = document.querySelectorAll('.progress-line');
    progressBars.forEach((bar) => {
      const width = bar.getAttribute('data-width');
      if (width) {
        (bar as HTMLElement).style.setProperty('--width', width);
      }
    });
  };

  // Run on initial load and also set up a mutation observer for dynamic content
  setupProgressAnimations();
  
  const observer = new MutationObserver(setupProgressAnimations);
  observer.observe(document.body, { childList: true, subtree: true });
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);