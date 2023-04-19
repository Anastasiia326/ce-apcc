import WELLCOME from "../../../assets/images/WELLCOME.svg";
import UKRI from "../../../assets/images/UKRI.svg";
import BILLMELINDA from "../../../assets/images/BILLMELINDA.svg";

function Funders () {
  return (
    <div className="container mx-auto py-2 px-4 mb-20">
      <h1 className="text-[#333333] text-5xl text-center font-bold leading-[60px]">Funders</h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img src={WELLCOME} alt="WELLCOME" className="h-16 my-2 mx-8"/>
        <img src={UKRI} alt="UKRI" className="h-16 my-2 mx-8"/>
        <img src={BILLMELINDA} alt="BILLMELINDA" className="h-16 my-2 mx-8"/>
      </div>
    </div>
  )
}

export default Funders;