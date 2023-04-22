import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import NewsImage from "../../../assets/images/news-2.png";

function LatestPublication() {
  return (
    <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-20 px-4 mb-20">
      <div className="col-span-1">
        <h4 className="text-[#1BAE70] text-2xl font-medium leading-[60px] mb-4">Latest publication</h4>
        <h4 className="text-[#333333] text-center xl:text-left text-2xl sm:text-[35px] font-bold leading-[60px] mb-5">Considerations for an integrated population health databank in Africa: lessons from global best practices [version 1; peer review: 2 approved]</h4>
        <p className="text-[#333333] text-center xl:text-left text-2xl font-medium leading-[40px] tracking-wide mb-6">Background: The rising digitisation and proliferation of data sources and repositories cannot be ignored.</p>
        <Link to="/publication/detail/1" className="relative flex flex-row items-center w-fit z-10 text-[#1BAE70] hover:text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] mx-auto xl:mx-0">
          Read more <BsArrowRight className="ml-4" />
        </Link>
      </div>
      <div className="col-span-1">
        <img src={NewsImage} alt="News Image" className="w-full rounded-2xl" />
      </div>
    </div>
  )
}

export default LatestPublication;