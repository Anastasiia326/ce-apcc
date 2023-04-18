import { Link } from "react-router-dom";
import ImageAndText from "./ImageAndText";
import TextAndImage from "./TextAndImage";
import Scientist from "../../../assets/images/scientist.png";
import Community from "../../../assets/images/community.png";
import Policy from "../../../assets/images/policy.png";
import Contributor from "../../../assets/images/contiributor.png";

function Descriptions() {
  return (
    <div className="descriptions py-2 mb-44">
      <div className="container mx-auto px-4">
        <ImageAndText className="py-2" imgPath={Scientist} alt="Scientist">
          <Link to="#"><h1 className="text-[#333333] hover:text-[#1BAE70] text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] my-7">African scientists</h1></Link>
          <p className="relative text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px] z-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dui sit amet urna tempor eleifend at vitae libero. Integer sed metus quis neque finibus vehicula ut sed augue. In commodo fringilla neque sit amet tempor.</p>
          <div className="absolute bottom-0 right-0 z-0"><h1 className="text-[#1BAE70] text-[300px] sm:text-[500px] font-bold leading-[350px] opacity-10">A</h1></div>
        </ImageAndText>

        <TextAndImage className="mt-16 lg:mt-32 py-2" imgPath={Policy} alt="Policy">
          <Link to="#"><h1 className="text-[#333333] hover:text-[#1BAE70] text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] my-7">Policymakers</h1></Link>
          <p className="relative text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dui sit amet urna tempor eleifend at vitae libero. Integer sed metus quis neque finibus vehicula ut sed augue. In commodo fringilla neque sit amet tempor.</p>
          <div className="absolute bottom-0 left-10 z-0"><h1 className="text-[#1BAE70] text-[300px] sm:text-[500px] font-bold leading-[350px] opacity-10">P</h1></div>
        </TextAndImage>

        <ImageAndText className="mt-16 lg:mt-32 py-2" imgPath={Community} alt="Community">
          <Link to="#"><h1 className="relative text-[#333333] hover:text-[#1BAE70] text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] my-7">Community</h1></Link>
          <p className="text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dui sit amet urna tempor eleifend at vitae libero. Integer sed metus quis neque finibus vehicula ut sed augue. In commodo fringilla neque sit amet tempor.</p>
          <div className="absolute bottom-0 right-0 z-0"><h1 className="text-[#1BAE70] text-[300px] sm:text-[500px] font-bold leading-[350px] opacity-10">C</h1></div>
        </ImageAndText>

        <TextAndImage className="mt-16 lg:mt-32 py-2" imgPath={Contributor} alt="Contributors">
          <Link to="#"><h1 className="text-[#333333] hover:text-[#1BAE70] text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] my-7">Contributors</h1></Link>
          <p className="relative text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dui sit amet urna tempor eleifend at vitae libero. Integer sed metus quis neque finibus vehicula ut sed augue. In commodo fringilla neque sit amet tempor.</p>
          <div className="absolute bottom-0 left-10 z-0"><h1 className="text-[#1BAE70] text-[300px] sm:text-[500px] font-bold leading-[350px] opacity-10">C</h1></div>
        </TextAndImage>
      </div>
    </div>
  )
}

export default Descriptions;