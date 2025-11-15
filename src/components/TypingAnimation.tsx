import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  sentences: string[];
  className?: string;
  fadeSpeed?: number;
  pauseTime?: number;
}

export default function TypingAnimation({
  sentences,
  className = "",
  fadeSpeed = 800,
  pauseTime = 4000,
}: TypingAnimationProps) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start gentle fade out
      setIsVisible(false);

      setTimeout(() => {
        // Change to next sentence
        setCurrentSentenceIndex(
          (prevIndex) => (prevIndex + 1) % sentences.length
        );

        // Gentle fade back in
        setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }, fadeSpeed);
    }, pauseTime);

    return () => clearInterval(interval);
  }, [sentences.length, fadeSpeed, pauseTime]);

  return (
    <span
      className={`${className} transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      {sentences[currentSentenceIndex]}
    </span>
  );
}
