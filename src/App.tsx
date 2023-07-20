import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

interface Quote {
  quote: string;
  author: string;
}

function getRandomItem<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

const App: React.FC = () => {
  const [quotes] = useState<Quote[]>([
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
  const [colors] = useState<string[]>([
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
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const [randomColor, setRandomColor] = useState<string>("");

  useEffect(() => {
    setRandomQuote(getRandomItem(quotes));
    setRandomColor(getRandomItem(colors));
  }, [quotes, colors]);

  const handleNewQuote = () => {
    setRandomQuote(getRandomItem(quotes));
  };
  const handleNewColor = () => {
    setRandomColor(getRandomItem(colors));
  };

  const handleNewClick = () => {
    handleNewQuote();
    handleNewColor();
  };

  const { quote, author } = randomQuote || {};

  return (
    <>
      {randomQuote ? (
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ backgroundColor: randomColor }}
        >
          <div className="bg-white rounded-md w-[550px] p-12">
            <div className="">
              <span className="">
                <p style={{ color: randomColor }} className="text-3xl">
                  {" "}
                  <FontAwesomeIcon
                    style={{ color: randomColor }}
                    icon={["fas", "quote-left"]}
                    className="mr-3 font-normal"
                  />
                  {quote}
                </p>
              </span>
              <p
                className="text-right mt-5 text-base"
                style={{ color: randomColor }}
              >
                - {author}
              </p>
            </div>
            <div className="flex place-content-between items-center mt-5">
              <div className="">
                <button
                  className="h-[40px] w-[40px] text-white text-lg rounded "
                  style={{ backgroundColor: randomColor }}
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </button>
                <button
                  className="h-[40px] w-[40px] m-2 text-lg text-white rounded"
                  style={{ backgroundColor: randomColor }}
                >
                  <FontAwesomeIcon icon={["fab", "tumblr"]} />
                </button>
              </div>
              <div className="">
                <button
                  className="py-2 px-4 m-2 text-white rounded"
                  onClick={handleNewClick}
                  style={{ backgroundColor: randomColor }}
                >
                  New quote
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No quotes available</p>
      )}
    </>
  );
};

export default App;
