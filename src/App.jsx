// CSS imports
import "./normalize.css";
import "./App.css";

// Component imports
import {
  Navbar,
  Hero,
  AudioPlayer,
  Services,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Navbar title={"EAGR Productions"} />
      <Hero />
      <AudioPlayer />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
