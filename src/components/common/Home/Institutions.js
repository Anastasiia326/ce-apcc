import APHRC from "../../../assets/images/APHRC.svg";
import AFIDEP from "../../../assets/images/AFIDEP.svg";
import ARIN from "../../../assets/images/ARIN.svg";
import MEIRU from "../../../assets/images/MEIRU.svg";
import AHRI from "../../../assets/images/AHRI.svg";

function Institutions () {
  return (
    <div className="container mx-auto py-2 px-4 mb-16">
      <h1 className="text-[#333333] text-3xl sm:text-5xl text-center font-bold leading-[60px] my-4">CORE COLLABORATING INSTITUTIONS</h1>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <img src={APHRC} alt="APHRC" className="my-2"/>
        <img src={ARIN} alt="ARIN" className="my-2"/>
        <img src={AFIDEP} alt="AFIDEP" className="my-2"/>
        <img src={MEIRU} alt="MEIRU" className="my-2"/>
        <img src={AHRI} alt="AHRI" className="my-2"/>
      </div>
    </div>
  )
}

export default Institutions;