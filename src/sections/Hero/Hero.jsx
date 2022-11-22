import { HeroImage, Cta } from "../../components";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <HeroImage />
        <div className="hero-text-container">
          <p>Elliot Robinson</p>
          <h1>Mixing Engineer</h1>
        </div>
        <Cta text={"Listen"} />
      </div>
    </section>
  );
}

export default Hero;
