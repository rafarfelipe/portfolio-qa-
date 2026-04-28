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
  const prevTextRef = useRef(texts[0]);

  // Detecta mudança de palavra e reseta o texto
  useEffect(() => {
    const currentFullText = texts[textIndex];
    if (prevTextRef.current !== currentFullText) {
      // Nova palavra - começa a digitar do zero
      setDisplayedText("");
      prevTextRef.current = currentFullText;
    }
  }, [textIndex, texts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Digitando
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          // Completou - espera e começa a apagar
          setIsDeleting(true);
        }
      } else {
        // Apagando
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, displayedText.length - 1));
        } else {
          // Terminou de apagar - vai para próxima palavra
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : (displayedText === currentText ? pauseDuration : typingSpeed));

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, currentText, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayedText;
}