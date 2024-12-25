import { useEffect, useRef } from "react";
import useToggleStore from "../store/useToggleStore";

const AudioControl = () => {
  const isSoundOn = useToggleStore((state) => state.isSoundOn);
  const toggleSound = useToggleStore((state) => state.toggleSound);
  const audioRef = useRef(null);

  // Play the audio when the sound is toggled on
  useEffect(() => {
    if (audioRef.current && isSoundOn) {
      // Try to play the audio if sound is turned on
      audioRef.current.play().catch((error) => {
        console.log("Autoplay failed:", error); // Log error if autoplay is blocked
      });
    } else {
      audioRef.current.pause(); // Pause the audio if sound is turned off
    }
  }, [isSoundOn]);

  return (
    <>
      <button
        onClick={toggleSound}
        aria-label="Toggle sound"
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <img
          src={isSoundOn ? "/icons/bell.svg" : "/icons/muted-bell.svg"}
          alt={isSoundOn ? "Sound On" : "Sound Off"}
          width={50}
          height={50}
          style={{ display: "block", margin: "auto" }}
        />
      </button>
      <audio ref={audioRef} loop autoPlay>
        <source src="/sounds/jinglebell.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default AudioControl;
