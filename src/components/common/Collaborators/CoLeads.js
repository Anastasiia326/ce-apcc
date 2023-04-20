import Lead1 from "../../../assets/images/collaborator-1.png";
import Lead2 from "../../../assets/images/collaborator-2.png";

function CoLeads () {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-[#333333] text-4xl sm:text-6xl text-center font-bold leading-[54px] my-6 sm:my-14">Project co-leads</h1>
      <div className="flex flex-col lg:flex-row justify-center py-2">
        <div className="px-4 sm:px-20 my-8 sm:my-20">
          <img src={Lead1} alt="Co-Leads" className="w-full h-auto border border-solid rounded-2xl mb-4" />
          <h4 className="text-[#333333] text-3xl sm:text-[45px] text-center font-bold leading-[40px] sm:leading-[60px] my-2 sm:my-8">Dr Evelyn Gitau</h4>
          <h6 className="text-[#333333] text-2xl sm:text-[35px] text-center font-normal leading-[30px] sm:leading-[60px] break-all">(egitau@aphrc.org)</h6>
        </div>
        <div className="px-4 sm:px-20 my-8 sm:my-20">
          <img src={Lead2} alt="Co-Leads" className="w-full h-auto border border-solid rounded-2xl mb-4" />
          <h4 className="text-[#333333] text-3xl sm:text-[45px] text-center font-bold leading-[40px] sm:leading-[60px] my-2 sm:my-8">Dr Kobus Herbst</h4>
          <h6 className="text-[#333333] text-2xl sm:text-[35px] text-center font-normal leading-[30px] sm:leading-[60px] break-all">(Kobus.herbst@mrc.ac.za)</h6>
        </div>
      </div>
    </div>
  )
}

export default CoLeads;