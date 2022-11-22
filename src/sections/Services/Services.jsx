import { SiAudiomack } from "react-icons/si";
import { BsFileEarmarkMusicFill } from "react-icons/bs";
import { FaDrum } from "react-icons/fa";
import { RiScissorsFill } from "react-icons/ri";

import ServiceCard from "../../components/ServiceCard";

function Services() {
  return (
    <section id="services">
      <div className="services-container">
        <h2 id="services-header">Services</h2>
        <em>more about what I do</em>

        <div className="card-grid">
          <ServiceCard icon={<SiAudiomack size={50} />} title={"Mixing"} />
          <ServiceCard
            icon={<BsFileEarmarkMusicFill size={50} />}
            title={"Mastering"}
          />
          <ServiceCard icon={<FaDrum size={50} />} title={"Drum Programming"} />
          <ServiceCard icon={<RiScissorsFill size={50} />} title={"Editing"} />
        </div>
      </div>
    </section>
  );
}

export default Services;
