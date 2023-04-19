import Stream from "../../../assets/images/workstream.png";

function OurWorkstream () {
  return (
    <div className="workstream container mx-auto mb-20">
      <h1 className="text-[#333333] text-center font-bold text-4xl sm:text-6xl mt-32 mb-14">Our workstreams</h1>
      <div>
        <img src={Stream} alt="Our workstreams" className="px-0 sm:px-8"/>
      </div>
    </div>
  )
}

export default OurWorkstream;