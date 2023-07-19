import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { CSSProperties } from "react";

function App() {
  interface quoteInterface {
    quote: string;
    author: string;
  }
  const [quotes, setQuotes] = useState<quoteInterface[]>([
    {
      quote:
        "Live like no one else so that later you can live like no one else.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "We buy thing we don't need, with money we don't have, to impress people we don't really like.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "Pray like it all depends on God, but work like it all depends on you.",
      author: "Dave Ramsey",
    },
    {
      quote: "Act your wage.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "A budget is telling your money where to go instead of wondering where it went.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "You must gain control over your money or the lack of it will forever control you.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "For your own good, for the good of your family and your future, grow a backbone. When something is wrong, stand up and say it is wrong, and don't back down.",
      author: "Dave Ramsey",
    },
    {
      quote: "Fear is the enemy of hope.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "Change is painful. Few people have the courage to seek out change. Most people won’t change until the pain of where they are exceeds the pain of change.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "Winning at money is 80 percent behavior and 20 percent head knowledge. What to do isn’t the problem; doing it is. Most of us know what to do, but we just don’t do it. If I can control the guy in the mirror, He can be skinny and rich.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "It is human nature to want it and want it now; it is also a sign of immaturity. Being willing to delay pleasure for a greater result is a sign of maturity.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "Instead of wondering when your next vacation is, maybe you should set up a life you don’t need to escape from.",
      author: "Seth Godin",
    },
    {
      quote:
        "Children are sponges—they are going to absorb whatever is around them, so we need to be intentional about what surrounds them.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "The weird thing is that the more efficient, on task, on goal you are with your time, the more energy you have. Working with no traction, or for that matter simply wasting a day, does not relax you, it drains you. Strange as it may seem, when you work a daily plan in pursuit of your written goals that flow from your mission statement born of your vision for living your dreams, you are energized after a tough long day.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "Don't compare yourself with other people; compare yourself with who you were yesterday.",
      author: "Jordan B. Peterson",
    },
    {
      quote:
        "I don't tell people, 'You're okay the way that you are.' That's not the right story. The right story is, 'You're way less than you could be.'",
      author: "Jordan B. Peterson",
    },
    {
      quote:
        "Adopt responsibility for your own well-being, try to put your family together, try to serve your community, try to seek for eternal truth... That's the sort of thing that can ground you in your life, enough so that you can withstand the difficulty of life.",
      author: "Jordan B. Peterson",
    },
    {
      quote:
        "No one gets away with anything, ever, so take responsibility for your own life.",
      author: "Jordan B. Peterson",
    },
    {
      quote: "To master a new technology, you have to play with it.",
      author: "Jordan B. Peterson",
    },
  ]);
  const [colors, setColors] = useState<colorInterface[]>([
    "#ff9ff3",
    "#f368e0",
    "#00d2d3",
    "#01a3a4",
    "#feca57",
    "#ff9f43",
    "#54a0ff",
    "#2e86de",
    "#ff6b6b",
    "#ee5253",
    "#5f27cd",
    "#341f97",
    "#48dbfb",
    "#0abde3",
    "#c8d6e5",
    "#8395a7",
    "#1dd1a1",
    "#10ac84",
    "#576574",
    "#222f3e",
  ]);
  const [randomQuote, setRandomQuote] = useState<quoteInterface | null>(null);

  useEffect(() => {
    setRandomQuote(getRandomQuote(quotes));
  }, []);

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      backgroundColor: "grey",
    },
  };

  const getRandomQuote = (
    quotesArr: quoteInterface[]
  ): quoteInterface | null => {
    if (quotesArr.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * quotesArr.length);
    return quotesArr[randomIndex];
  };

  const handleNewQuote = () => {
    const newRandomQuote = getRandomQuote(quotes);
    setRandomQuote(newRandomQuote);
  };

  const getRandomColor = (colorsArr: colorInterface[]): colorInterface => {
    const randomIndex = Math.floor(Math.random() * colorsArr.length);
    return colorsArr[randomIndex];
  };

  return (
    <>
      {randomQuote ? (
        <div
          className="min-h-screen flex justify-center items-center backg"
          style={styles.container}
        >
          <div className="bg-white p-4 w-5/12 flex flex-col rounded">
            <div className="container flex-wrap">
              <i className="fa-solid fa-quote-left fa-2x"></i>
              <span className="text-break flex-wrap te1" id="text">
                <p>{randomQuote.quote}</p>
              </span>
              <p className="text-end te2" id="author">
                - {randomQuote.author}
              </p>
            </div>
            <div className="container flex justify-content-between">
              <div className="buttons">
                <i className="fa-brands fa-twitter-square fa-3x me-1 btn"></i>
                <i className="fa-brands fa-tumblr-square fa-3x btn"></i>
              </div>
              <div className="quote">
                <button
                  className="btn btn-default text-light p-2 animated pulse"
                  onClick={handleNewQuote}
                >
                  New quote
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default App;
