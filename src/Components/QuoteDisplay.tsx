import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SocialButtons from "./SocialButtons";
import QuoteButton from "./QuoteButton";

interface Quote {
  quote: string;
  author: string;
}

interface QuoteDisplayProps {
  quote: Quote;
  randomColor: string;
  onShareTwitter: () => void;
  onShareTumblr: () => void;
  onClick: () => void;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({
  quote,
  randomColor,
  onShareTwitter,
  onShareTumblr,
  onClick,
}) => {
  const { quote: quoteText, author } = quote;

  return (
    <div
      className="min-h-screen flex items-center justify-center transition duration-1000 fade-in-out"
      style={{ backgroundColor: randomColor }}
    >
      <div className="bg-white rounded-md w-[550px] p-12" id="quote-box">
        <div className="">
          <span className="">
            <p
              style={{ color: randomColor }}
              className="text-3xl transition duration-1000 fade-in-out"
              id="text"
            >
              <FontAwesomeIcon
                style={{ color: randomColor }}
                icon={["fas", "quote-left"]}
                className="mr-3 font-normal transition duration-1000 fade-in-out"
              />
              {quoteText}
            </p>
          </span>
          <p
            className="text-right mt-5 text-base transition duration-1000 fade-in-out"
            style={{ color: randomColor }}
            id="author"
          >
            - {author}
          </p>
          <div className="flex place-content-between items-center mt-5 transition duration-1000 fade-in-out">
            <SocialButtons
              onShareTwitter={onShareTwitter}
              onShareTumblr={onShareTumblr}
              randomColor={randomColor}
            />
            <QuoteButton onClick={onClick} randomColor={randomColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteDisplay;
