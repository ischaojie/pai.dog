import { useState, useEffect } from "react";
import paiUrl from "./assets/pai.jpg";
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
    <div className="mx-auto">
      <div className="flex justify-center items-start space-x-12">
        <div className="shadow-md border-solid border-4 rounded border-white">
          <img src={paiUrl} className="md:w-120 p-2 " />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:w-120 text-justify text-lg font-mono subpixel-antialiased tracking-wide leading-loose">
            <p>
              Hello, I am a 🐶 named&nbsp;
              <span className="text-xl text-red-600">π</span>. I am over two
              years old now.
            </p>
            <p>
              I am an annoying yet adorable little dog. I can shake hands👋, sit
              down, love big bones🦴 and enjoy playing with balls🎾.
            </p>
            <p>
              I have many dog friends. but of course, we can be friends too if
              you'd like.
            </p>
            <p>
              If you think I'm cute, please&nbsp;
              <span className="underline decoration-red-600 underline-offset-8">
                give me a like
              </span>
              :
            </p>
          </div>
          <div
            className={`heart m-18 flex flex-col-reverse items-center
            ${isAnimating ? "is_animating" : ""}`}
            onClick={iLikeIt}
            onAnimationEnd={() => setIsAnimating(false)}
          >
            {count}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
