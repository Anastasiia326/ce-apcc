import {useEffect} from "react";
import MapText from "../common/Home/MapText";
import Descriptions from "../common/Home/Descriptions";
import OurAim from "../common/About/OurAim";
import Institutions from "../common/Home/Institutions";
import Funders from "../common/Home/Funder";

function Home() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <div className="home">
        <div className="container mx-auto flex flex-col xl:flex-row justify-between items-center mb-16 px-4">
          <div className="home-title text-center xl:text-left w-full">
            <h1 className="text-4xl md:text-7xl text-black font-bold leading-[60px] md:leading-[100px]">
              Collaboration for the Establishment of an African Population Cohort Consortium <br />
              <span className="text-4xl md:text-5xl text-[#1BAE70] font-bold leading-[60px] md:leading-[100px]">(CE-APCC)</span>
            </h1>
            <h3 className="text-xl md:text-3xl text-[#686868] font-bold leading-[40px] md:leading-[70px]">Towards better health and well-being in Africa</h3>
          </div>

          <div className="africa-map w-full">
            <MapText />
          </div>
        </div>

        <OurAim />

        <Descriptions />

        <Institutions />

        <Funders />
      </div>
    </>
  );
}

export default Home;