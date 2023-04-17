import Demo2 from "../../../assets/images/demo-2.png";
import Quote from "../../../assets/images/quote.png";

function OurVision () {
  return (
    <div className="our-vision relative mb-8 xl:mb-[240px]">
      <div className="vision-img">
        <img src={Demo2} alt="DEMO 2" className="w-full" />
      </div>
      <div className="container relative xl:absolute left-1/2 -translate-x-1/2 xl:-bottom-[25%]">
        <div className="text-xl md:text-4xl text-white font-bold text-center md:text-left leading-[28px] md:leading-[70px] bg-[#1BAE70] rounded-lg p-4 md:p-12 p-4 lg:p-24 m-4">
          <img src={Quote} alt="Quote" className="mx-auto"/>
          "Our vision is to harness the huge opportunity of population&nbsp;
          cohorts and diversity in Africa to champion new and innovative&nbsp;
          multidisciplinary engagement and research for positive impact&nbsp;
          on the health and well-being of communities in Africa."
          <img src={Quote} alt="Quote" className="mx-auto"/>
        </div>
      </div>
    </div>
  )
}

export default OurVision;