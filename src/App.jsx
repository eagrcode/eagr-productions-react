// CSS imports
import "./normalize.css";
import "./App.css";

// Component imports
import { Navbar, Hero, AudioPlayer, Services } from "./components";

function App() {
  return (
    <>
      <Navbar title={"EAGR Productions"} />
      <Hero />
      <AudioPlayer />
      <Services />
    </>
  );
}

export default App;
