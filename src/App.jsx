// CSS imports
import "./normalize.css";
import "./App.css";

// Component imports
import { Navbar, Hero } from "./components";

function App() {
  return (
    <>
      <Navbar title={"EAGR Productions"} />
      <Hero />
    </>
  );
}

export default App;
