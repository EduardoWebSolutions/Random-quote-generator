import React from "react";

interface QuoteButtonProps {
  onClick: () => void;
  randomColor: string;
}

const QuoteButton: React.FC<QuoteButtonProps> = ({ onClick, randomColor }) => {
  return (
    <div className="">
      <button
        className="py-2 px-4 m-2 text-white rounded transition duration-1000 fade-in-out"
        onClick={onClick}
        style={{ backgroundColor: randomColor }}
        id="new-quote"
      >
        New quote
      </button>
    </div>
  );
};

export default QuoteButton;
