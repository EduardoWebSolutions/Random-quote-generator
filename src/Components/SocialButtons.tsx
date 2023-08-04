import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../index.css";
interface SocialButtonsProps {
  onShareTwitter: () => void;
  onShareTumblr: () => void;
  randomColor: string;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({
  onShareTwitter,
  onShareTumblr,
  randomColor,
}) => {
  return (
    <div className="">
      <a href="#" onClick={onShareTwitter}>
        <button
          className="h-[40px] w-[40px] text-white text-lg rounded transition duration-1000 fade-in-out"
          style={{ backgroundColor: randomColor }}
          id="tweet-quote"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </button>
      </a>
      <a href="#" onClick={onShareTumblr}>
        <button
          className="h-[40px] w-[40px] m-2 text-lg text-white rounded transition duration-1000 fade-in-out"
          style={{ backgroundColor: randomColor }}
        >
          <FontAwesomeIcon icon={["fab", "tumblr"]} />
        </button>
      </a>
    </div>
  );
};

export default SocialButtons;
