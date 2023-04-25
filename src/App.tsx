import { useState, useEffect } from "react";
import paiUrl from "./assets/pai.webp";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ILIKEIT_URL}?source=pai.dog`)
      .then((resp) => resp.json())
      .then((data) => setCount(data.like_count))
      .catch((err) => console.error(err));
  }, []);

  function iLikeIt(e: React.MouseEvent) {
    e.preventDefault();
    toggleAnimation();
    fetch(`${import.meta.env.VITE_ILIKEIT_URL}?source=pai.dog`, {
      method: "POST",
    })
      .then((resp) => resp.json())
      .then((data) => setCount(data.like_count))
      .catch((err) => console.error(err));
  }

  function toggleAnimation() {
    setIsAnimating(!isAnimating);
  }

  return (
    <div className="app bg-slate-50 min-h-screen grid md:grid-cols-3 sm:grid-cols-1">
      <div
        className={`heart self-center justify-self-center flex flex-col-reverse items-center
            ${isAnimating ? "is_animating" : ""}`}
        onClick={iLikeIt}
        onAnimationEnd={() => setIsAnimating(false)}
      >
        {count}
      </div>
      <div className="self-center flex flex-col text-justify text-lg font-mono subpixel-antialiased tracking-wide leading-loose">
        <p>
          <span className="text-2xl text-red-600">Hello</span>, I am a 🐶
          named&nbsp;
          <span className="text-xl text-red-600">π</span>. I am over two years
          old now.
        </p>
        <p>
          I am an annoying yet adorable little dog. I can shake hands👋, sit
          down, love big bones🦴 and enjoy playing with balls🎾.
        </p>
        <p>
          I have many dog friends(🦮🐕🐩). but of course, we can be friends too
          if you'd like🥰.
        </p>
        <p>
          If you think I'm cute, please&nbsp;
          <span className="underline decoration-red-600 underline-offset-8">
            give me a like
          </span>
          .
        </p>
      </div>
      <img src={paiUrl} className="pi self-end justify-self-end" alt="dog pi"/>
    </div>
  );
}

export default App;
