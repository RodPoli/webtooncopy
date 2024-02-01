import React, { useState } from "react";
import "./App.css";

function Header() {
  const [activeTop, setActiveTop] = useState(null);
  const [activeBot, setActiveBot] = useState(null);

  const handleTopClick = (index) => {
    setActiveTop(index);
  };

  const handleBotClick = (index) => {
    setActiveBot(index);
  };

  return (
    <div>
      <div className="header">
        <ul className="top">
          <li>
            <img className="logo" src="images/webtoon.png" alt="Webtoon Logo" />
          </li>
          <li>
            <a
              onClick={() => handleTopClick(1)}
              className={activeTop === 1 ? "active" : ""}
            >
              ORIGINALS
            </a>
          </li>
          <li>
            <a
              onClick={() => handleTopClick(2)}
              className={activeTop === 2 ? "active" : ""}
            >
              GENRES
            </a>
          </li>
          <li>
            <a
              onClick={() => handleTopClick(3)}
              className={activeTop === 3 ? "active" : ""}
            >
              POPULAR
            </a>
          </li>
          <li>
            <a
              onClick={() => handleTopClick(4)}
              className={activeTop === 4 ? "active" : ""}
            >
              CANVAS
            </a>
          </li>
        </ul>
        <ul className="bot">
          <li>
            <a
              onClick={() => handleBotClick(1)}
              className={activeBot === 1 ? "active" : ""}
            >
              DRAMA
            </a>
          </li>
          <li>
            <a
              onClick={() => handleBotClick(2)}
              className={activeBot === 2 ? "active" : ""}
            >
              FANTASY
            </a>
          </li>
          <li>
            <a
              onClick={() => handleBotClick(3)}
              className={activeBot === 3 ? "active" : ""}
            >
              COMEDY
            </a>
          </li>
          <li>
            <a
              onClick={() => handleBotClick(4)}
              className={activeBot === 4 ? "active" : ""}
            >
              ACTION
            </a>
          </li>
          <li>
            <a
              onClick={() => handleBotClick(5)}
              className={activeBot === 5 ? "active" : ""}
            >
              SLICE OF LIFE
            </a>
          </li>
          <li>
            <a
              onClick={() => handleBotClick(6)}
              className={activeBot === 6 ? "active" : ""}
            >
              ROMANCE
            </a>
          </li>
          <li>
            <a
              onClick={() => handleBotClick(7)}
              className={activeBot === 7 ? "active" : ""}
            >
              SUPERHERO
            </a>
          </li>
          <li>
            <a
              onClick={() => handleBotClick(8)}
              className={activeBot === 8 ? "active" : ""}
            >
              SCI-FI
            </a>
          </li>
          <li>
            <a
              onClick={() => handleBotClick(9)}
              className={activeBot === 9 ? "active" : ""}
            >
              THRILLER
            </a>
          </li>
          <li>
            <a
              onClick={() => handleBotClick(10)}
              className={activeBot === 10 ? "active" : ""}
            >
              SUPERNATURAL
            </a>
          </li>
          <li>
            <a
              onClick={() => handleBotClick(11)}
              className={activeBot === 11 ? "active" : ""}
            >
              OTHERS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
