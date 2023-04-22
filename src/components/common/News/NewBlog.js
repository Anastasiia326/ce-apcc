import { HiPlus, HiMinus } from "react-icons/hi";
import Collapsible from 'react-collapsible';
import { useState } from "react";

function NewBlog(props) {
  const [opend, setOpend] = useState(false);

  const Trigger = ({ title, imgPath, opend }) => {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-5 justify-between items-center py-5 px-6 md:px-16 ${opend?"bg-[#DDF3EA]":"bg-transparent"}`}>
        <div className="col-span-3 xl:col-start-1 xl:col-end-4">
          <h4 className="text-black text-2xl xl:text-[35px] text-center sm:text-center font-medium leading-[30px] xl:leading-[42px]">{title}</h4>
        </div>
        <div className="col-span-2 xl:col-end-6 xl:col-span-1 flex justify-around">
          <img src={imgPath} alt="Blog Image" className="rounded-lg w-[80%] sm:w-auto my-4 sm:my-0" />
          <button className="hidden md:block">{opend?<HiMinus className="text-[#1BAE70] text-3xl " />:<HiPlus className="text-[#1BAE70] text-3xl " />}</button>
        </div>
      </div>
    )
  }

  return (
    <div className="collapsible border border-solid my-8">
      <Collapsible
        onOpen={()=>setOpend(true)}
        onClose={()=>setOpend(false)}
        trigger={<Trigger title={props.title} imgPath={props.imgPath} opend={opend} />}
        easing="cubic-bezier(0.2, 0.1, 0.2, 1)"
      >
        <div className="p-8 sm:p-16">
          {props.children}
        </div>
      </Collapsible>
    </div>
  )
}

export default NewBlog;