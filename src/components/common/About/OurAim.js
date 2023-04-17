import AfricaMap from "../../../assets/images/Africa.png";

function OurAim() {
  return (
    <div className="our-aim container mx-auto px-4">
      <div className="block xl:flex items-center rounded-xl bg-[#1BAE70] my-14">
        <div className="africa-map w-full md:w-[400px] h-full md:h-[450px] relative float-none md:float-left mx-auto">
          <img src={AfricaMap} alt="Africa Map" className="w-full h-full" />
          <h6 className="w-full text-center bg-[#1BAE70] text-white text-[54px] leading-[50px] text-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Our aim</h6>
        </div>
        <div className="text-white text-xl md:text-4xl leading-[40px] md:leading-[60px] p-6 md:p-12 flex-1 text-center md:text-left">
          Our aim is to create a transformational capability and forum on&nbsp;
          population-based cohorts, bringing together a broad spectrum&nbsp;
          of African scientists, policymakers, community contributors,&nbsp;
          and other stakeholders throughout the formative phase to&nbsp;
          co-create an evidence-based APCC and build enthusiasm&nbsp;
          and support for its eventual implementation and long-term&nbsp;
          sustenance.
        </div>
      </div>
    </div>
  )
}

export default OurAim;
