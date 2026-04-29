import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter(
  texts: string[],
  options: UseTypewriterOptions = {}
) {
  const {
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 1500,
  } = options;

  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[textIndex];

  useEffect(() => {
    // Clamp textIndex to valid range if texts array changed
    if (textIndex >= texts.length) {
      setTextIndex(0);
      return;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : (displayedText === currentText ? pauseDuration : typingSpeed));

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, texts.length, typingSpeed, deletingSpeed, pauseDuration]);

  return displayedText;
}