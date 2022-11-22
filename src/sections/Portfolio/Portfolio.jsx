import AudioPlayer from "../../components/AudioPlayer";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="portfolio-wrapper">
        <h2 id="portfolio-header">Portfolio</h2>
        <em>listen to my previous work</em>
        <AudioPlayer />
      </div>
    </section>
  );
}

export default Portfolio;
