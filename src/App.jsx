// CSS imports
import "./normalize.css";
import "./App.css";

// Component imports
import { Navbar, Footer } from "./components";
// Page section imports
import { Hero, Portfolio, Services, Contact } from "./sections";

function App() {
  return (
    <>
      <Navbar title={"EAGR Productions"} />
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
