import { useEffect } from "react";
import OurObjectives from "../common/About/OurObjectives";
import OurWorkstream from "../common/About/Workstream";
import OurVision from "../common/About/OurVision";
import Post from "../common/About/Post";

function AboutUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <div className="about-us">
      <div className="about-logo py-[120px]">
        <h1 className="text-7xl text-white font-bold text-center leading-[54px] mb-16">Our aim</h1>
        <p className="container mx-auto px-4 lg:px-40 text-xl sm:text-3xl text-white font-bold text-center leading-[30px] sm:leading-[50px]">Our aim is to create a transformational capability and forum on population-based cohorts, bringing together a broad&nbsp;
          spectrum of African scientists, policymakers, community contributors, and other stakeholders throughout the formative&nbsp;
          phase to co-create an evidence-based APCC and build enthusiasm and support for its&nbsp;
          eventual implementation and long-term sustenance.</p>
      </div>

      <OurObjectives />

      <OurWorkstream />

      <OurVision />

      <Post />
    </div>
  )
}

export default AboutUs;
