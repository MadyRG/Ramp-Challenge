import React, { useEffect, useState } from "react";

function CharacterList({ text }) {
  const [displayedText, setDisplayedText] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!text) return;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => [...prev, text[index]]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 500); //0.5 second delay between each character
    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <ul>
      {displayedText.map((char, index) => (
        <li key={index}>{char}</li>
      ))}
    </ul>
  );
}
export default CharacterList;
