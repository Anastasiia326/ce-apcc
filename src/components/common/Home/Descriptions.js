import ImageAndText from "./ImageAndText";
import TextAndImage from "./TextAndImage";
import Scientist from "../../../assets/images/scientist.png";
import Community from "../../../assets/images/community.png";
import Policy from "../../../assets/images/policy.png";
import Contributor from "../../../assets/images/contiributor.png";

function Descriptions () {
  return (
    <div className="container mx-auto descriptions px-4 py-2 mb-44">
      <ImageAndText className="mt-16 lg:mt-32 py-2" imgPath={Scientist} alt="Scientist">
        <h1 className="text-[#333333] text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] my-7">African scientists</h1>
        <p className="text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dui sit amet urna tempor eleifend at vitae libero. Integer sed metus quis neque finibus vehicula ut sed augue. In commodo fringilla neque sit amet tempor.</p>
      </ImageAndText>

      <TextAndImage className="mt-16 lg:mt-32 py-2" imgPath={Policy} alt="Policy">
        <h1 className="text-[#333333] text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] my-7">Policymakers</h1>
        <p className="text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dui sit amet urna tempor eleifend at vitae libero. Integer sed metus quis neque finibus vehicula ut sed augue. In commodo fringilla neque sit amet tempor.</p>
      </TextAndImage>

      <ImageAndText className="mt-16 lg:mt-32 py-2" imgPath={Community} alt="Community">
        <h1 className="text-[#333333] text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] my-7">Community</h1>
        <p className="text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dui sit amet urna tempor eleifend at vitae libero. Integer sed metus quis neque finibus vehicula ut sed augue. In commodo fringilla neque sit amet tempor.</p>
      </ImageAndText>

      <TextAndImage className="mt-16 lg:mt-32 py-2" imgPath={Contributor} alt="Contributors">
        <h1 className="text-[#333333] text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] my-7">Contributors</h1>
        <p className="text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dui sit amet urna tempor eleifend at vitae libero. Integer sed metus quis neque finibus vehicula ut sed augue. In commodo fringilla neque sit amet tempor.</p>
      </TextAndImage>
    </div>
  )
}

export default Descriptions;