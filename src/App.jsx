import "./App.css";
import ParticlesBackground from "./components/ParticleBackground";
import AudioControl from "./components/AudioControl";
import SnowGlobe from "./components/SnowGlobe";
import ChristmasText from "./components/ChristmasText";
import ChristmasCard from "./components/ChristmasCard";

function App() {
  return (
    <>
      <ParticlesBackground />
      <AudioControl />
      <ChristmasText />
      <ChristmasCard />
      {/* <SnowGlobe /> */}
    </>
  );
}

export default App;
