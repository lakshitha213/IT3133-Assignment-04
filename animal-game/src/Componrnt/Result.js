import React from "react";
import "../assets/css/Result.css";

export default function Result({ result, onPlayAgain, buttonText = "Play Again", customClasses = {} }) {
  const { containerClass = "container", buttonClass = "button", resultClass = "result" } = customClasses;

  return (
    <div className={containerClass}>
      {result && <h3 className={resultClass}>{result}</h3>}
      <button onClick={onPlayAgain} className={buttonClass}>
        {buttonText}
      </button>
    </div>
  );
}