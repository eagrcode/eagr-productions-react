// CSS imports
import "./normalize.css";
import "./App.css";

// Component imports
import { Navbar, Hero, AudioPlayer, Services, Contact } from "./components";

function App() {
  return (
    <>
      <Navbar title={"EAGR Productions"} />
      <Hero />
      <AudioPlayer />
      <Services />
      <Contact />
    </>
  );
}

export default App;
