import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="logo">Wong L</div>
      <div className="description">
        Rules of the game: <br />
        Every new card selected, you will earn a points.
        <br />
        Try to select the card that is new in the list, otherwise it is a game over.
      </div>
      <div className="scores">
        <div>Current Score: 1</div>
        <div>Highest Score: 5</div>
      </div>
    </div>
  );
}

export default Navbar;
