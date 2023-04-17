import { DiReact } from "react-icons/di";
import { AiOutlineLock, AiOutlineLineChart } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";

import Objectives from "./Objectives";

function OurObjectives() {
  return (
    <div className="our-objectives">
      <h1 className="text-[#333333] text-center font-bold text-6xl mt-32 mb-14">Our objectives</h1>
      <div className="objectives">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <Objectives text="To harness the genetic, socio-economic cultural and environmental diversity of Africa for scientific discovery">
              <DiReact className="text-[#333333] text-5xl mr-4" />
              <h4 className="text-[#333333] text-3xl font-bold leading-[54px]">Scientific discovery</h4>
            </Objectives>
            <Objectives text="Unlock the potential of population cohorts in Africa by enabling interoperability, data harmonization, safe harbour to allow data transfer">
              <AiOutlineLock className="text-[#333333] text-5xl mr-4" />
              <h4 className="text-[#333333] text-3xl font-bold leading-[54px]">Unlock cohorts</h4>
            </Objectives>
            <Objectives text="Use investment and expertise in existing cohorts to build research capacity">
              <BsCurrencyDollar className="text-[#333333] text-5xl mr-4" />
              <h4 className="text-[#333333] text-3xl font-bold leading-[54px]">Maximise investments</h4>
            </Objectives>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-16 my-16">
            <Objectives className="lg:col-start-2 lg:col-end-4" text="Identify and fill gaps by establishing new scientific collaborations across cohorts or new cohorts where needed">
              <AiOutlineLineChart className="text-[#333333] text-5xl mr-4" />
              <h4 className="text-[#333333] text-3xl font-bold leading-[54px]">Fill gaps</h4>
            </Objectives>
            <Objectives className="lg:col-start-4 lg:col-end-6" text="Engage a broad spectrum of African scientists, policymakers, community contributors and other stakeholders to co-create the APC">
              <DiReact className="text-[#333333] text-5xl mr-4" />
              <h4 className="text-[#333333] text-3xl font-bold leading-[54px]">Engage</h4>
            </Objectives>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurObjectives;
