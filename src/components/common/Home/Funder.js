import WELLCOME from "../../../assets/images/WELLCOME.svg";
import UKRI from "../../../assets/images/UKRI.svg";
import BILLMELINDA from "../../../assets/images/BILLMELINDA.svg";

function Funders () {
  return (
    <div className="container mx-auto py-2 px-4 mb-20">
      <h1 className="text-[#333333] text-3xl sm:text-5xl text-center font-bold leading-[60px] my-4">OUR FUNDERS</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center pl-0 lg:pl-32">
        <img src={WELLCOME} alt="WELLCOME" className="h-16 my-2"/>
        <img src={BILLMELINDA} alt="BILLMELINDA" className="h-16 my-2 mx-0 lg:mx-28"/>
        <img src={UKRI} alt="UKRI" className="h-16 my-2"/>
      </div>
    </div>
  )
}

export default Funders;