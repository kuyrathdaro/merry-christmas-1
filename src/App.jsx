import "./App.css";
import ParticlesBackground from "./components/ParticleBackground";
import AudioControl from "./components/AudioControl";
import SnowGlobe from "./components/SnowGlobe";
import ChristmasText from "./components/ChristmasText";
import ChristmasCard from "./components/ChristmasCard";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <ParticlesBackground />
      <AudioControl />
      <ChristmasText />
      <div className="app-container">
        <Parallax className="section" y={[0, 50]}>
          <ChristmasCard />
        </Parallax>
        <Parallax className="section" y={[50, 0]}>
          <SnowGlobe />
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default App;
