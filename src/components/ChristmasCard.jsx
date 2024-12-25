import React, { useState } from "react";
import "../assets/ChristmasCard.css";
import useToggleStore from "../store/useToggleStore";

const ChristmasCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isSoundOn = useToggleStore((state) => state.isSoundOn);
  const toggleSound = useToggleStore((state) => state.toggleSound);

  const toggleCard = () => {
    setIsOpen(!isOpen);
    if (!isOpen && !isSoundOn) {
      toggleSound();
    } else if (isOpen && isSoundOn) {
      toggleSound();
    }
  };

  return (
    <div className="christmas-card">
      <input id="open" type="checkbox" checked={isOpen} onChange={toggleCard} />
      <label className="open" htmlFor="open"></label>
      <div className={`card-front ${isOpen ? "hidden" : ""}`}>
        <div className="christmas-tree"></div>
        <div className="ribbon"></div>
        <div className="text">Click to Open</div>
        <div className="star"></div>
        <div className="balls"></div>
      </div>
      <div className={`card-inside ${isOpen ? "" : "hidden"}`}>
        <div className="title">
          Merry
          <br />
          Christmas
        </div>
        <div className="wishes">
          Wishing you a Christmas filled with endless love, boundless joy, and all the little things that
          make your heart smile. You light up my life everyday!
        </div>
        <div className="gift">
          <div className="bow"></div>
        </div>
      </div>
    </div>
  );
};

export default ChristmasCard;
