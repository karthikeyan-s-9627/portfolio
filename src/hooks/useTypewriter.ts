import { useState, useEffect } from 'react';

/**
 * A hook that creates a typewriter effect for text
 * @param text The text to type
 * @param typingSpeed Speed of typing in milliseconds
 * @param delayAfterTyping Delay after typing is completed before starting again
 * @returns The currently displayed text
 */
export const useTypewriter = (
  text: string,
  typingSpeed: number = 150,
  delayAfterTyping: number = 2000
): string => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentIndex(0);
          setDisplayedText('');
        }, delayAfterTyping);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, text, typingSpeed, delayAfterTyping]);

  return displayedText;
};

export default useTypewriter;