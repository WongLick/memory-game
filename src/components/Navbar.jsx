import React from "react";
import "../styles/Navbar.css";

function Navbar({ currentScore }) {
  const highscore = localStorage.getItem("highscore");

  return (
    <div className="container">
      <div className="logo">Wong L</div>
      <div className="description">
        Rules of the game: <br />
        Every new card selected, you will earn one point.
        <br />
        Try to select the card that is new in the list, otherwise it is a game
        over.
      </div>
      <div className="scores">
        <div>Current Score: {currentScore}</div>
        <div>Highest Score: {highscore}</div>
      </div>
    </div>
  );
}

export default Navbar;
