import React from "react";
import MapText from "../common/Home/MapText";
import Descriptions from "../common/Home/Descriptions";
import OurAim from "../common/About/OurAim";

function Home() {
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
      </div>
    </>
  );
}

export default Home;