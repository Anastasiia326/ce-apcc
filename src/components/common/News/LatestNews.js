import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import NewsImage from "../../../assets/images/stage-4.png";

function LatestNews() {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-20 mb-20">
      <div className="col-span-1">
        <h4 className="text-[#1BAE70] text-2xl font-medium leading-[60px] mb-4">Latest news</h4>
        <h4 className="text-[#333333] text-[35px] font-bold leading-[60px] mb-5">The Collaboration for the Establishment of an African Population Cohorts Consortium (CE-APCC)</h4>
        <p className="text-[#333333] text-2xl font-medium leading-[40px] tracking-wide mb-6">Recent events including the Covid-19 syndemic1 and climate change-related extreme weather crises have highlighted the role of scientific collaboration to understand and intervene in a global health emergency.</p>
        <Link to="/news/detail/1" className="relative flex flex-row items-center w-fit z-10 text-[#1BAE70] hover:text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px]">
          Read more <BsArrowRight className="ml-4" />
        </Link>
      </div>
      <div className="col-span-1">
        <img src={NewsImage} alt="News Image" className="w-full rounded-2xl" />
      </div>
    </div>
  )
}

export default LatestNews;