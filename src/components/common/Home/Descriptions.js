import { Link } from "react-router-dom";
import ImageAndText from "./ImageAndText";
import TextAndImage from "./TextAndImage";
import Aboutus from "../../../assets/images/aboutus.png";
import Collaborators from "../../../assets/images/collaborators.png";
import Cohorts from "../../../assets/images/cohorts.png";
import Resources from "../../../assets/images/resources.png";
import { BsArrowRight } from "react-icons/bs";

function Descriptions() {
  return (
    <div className="descriptions py-2 mb-20">
      <div className="container mx-auto px-4">
        <ImageAndText className="py-2" imgPath={Aboutus} alt="About us">
          <Link to="/about" className="relative z-10 text-[#333333] hover:text-[#1BAE70]"><h1 className="text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] py-7">About us</h1></Link>
          <p className="relative text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px] z-10">The CE-APCC promotes multidisciplinary engagement and research that improves community health and well-being by harnessing Africa's large population cohorts and diversity.</p>
          <Link to="/about" className="relative flex flex-row items-center w-fit z-10 text-[#1BAE70] hover:text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] my-8">
            Learn more <BsArrowRight className="ml-4" />
          </Link>
          <div className="absolute bottom-0 right-0 z-0"><h1 className="text-[#1BAE70] text-[300px] sm:text-[500px] font-bold leading-[350px] opacity-10">A</h1></div>
        </ImageAndText>

        <TextAndImage className="mt-16 lg:mt-32 py-2" imgPath={Collaborators} alt="Collaborators">
          <Link to="/collaborators" className="relative z-10 text-[#333333] hover:text-[#1BAE70]"><h1 className="text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] py-7">Collaborators</h1></Link>
          <p className="relative text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px] z-10">The collaborators are a multidisciplinary team that is gathering evidence and resources to develop an APCC. The team will explore ways to help create an APCC from many angles.</p>
          <Link to="/collaborators" className="relative flex flex-row items-center w-fit z-10 text-[#1BAE70] hover:text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] my-8">
            Learn more <BsArrowRight className="ml-4" />
          </Link>
          <div className="absolute bottom-0 left-10 z-0"><h1 className="text-[#1BAE70] text-[300px] sm:text-[500px] font-bold leading-[350px] opacity-10">P</h1></div>
        </TextAndImage>

        <ImageAndText className="mt-16 lg:mt-32 py-2" imgPath={Cohorts} alt="Cohorts">
          <Link to="/cohorts" className="relative z-10 text-[#333333] hover:text-[#1BAE70]"><h1 className="text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] py-7">African Cohorts</h1></Link>
          <p className="relative text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px] z-10">Research institutions abound in Africa. They collaborate with stakeholders across the continent. They develop evidence-based solutions to enhance African healthcare.</p>
          <Link to="/cohorts" className="relative flex flex-row items-center w-fit z-10 text-[#1BAE70] hover:text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] my-8">
            Learn more <BsArrowRight className="ml-4" />
          </Link>
          <div className="absolute bottom-0 right-0 z-0"><h1 className="text-[#1BAE70] text-[300px] sm:text-[500px] font-bold leading-[350px] opacity-10">C</h1></div>
        </ImageAndText>

        <TextAndImage className="mt-16 lg:mt-32 py-2" imgPath={Resources} alt="Resources">
          <Link to="/resource" className="relative z-10 text-[#333333] hover:text-[#1BAE70]"><h1 className="text-3xl xl:text-5xl font-bold leading-[40px] xl:leading-[60px] py-7">Resources</h1></Link>
          <p className="relative text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] xl:leading-[60px] z-10">The CE-APCC is assessing the status of existing consortia and collecting evidence-based and practice-informed resources to inform an Africa population cohort.</p>
          <Link to="/resource" className="relative flex flex-row items-center w-fit z-10 text-[#1BAE70] hover:text-[#333333] text-2xl xl:text-3xl font-normal leading-[40px] my-8">
            Learn more <BsArrowRight className="ml-4" />
          </Link>
          <div className="absolute bottom-0 left-10 z-0"><h1 className="text-[#1BAE70] text-[300px] sm:text-[500px] font-bold leading-[350px] opacity-10">C</h1></div>
        </TextAndImage>
      </div>
    </div>
  )
}

export default Descriptions;