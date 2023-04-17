import React from "react";

function ImageAndText(props) {
  return (
    <div className={`flex flex-col lg:flex-row ${props.className}`}>
      <div className="w-50 flex-1 order-2">
        <div className="px-4"><img src={props.imgPath} alt="Children Playing" className="w-full h-auto rounded-2xl"/></div>
      </div>
      <div className="w-50 flex-1 order-1">
        <div className="px-8">{props.children}</div>
      </div>
    </div>
  );
}

export default ImageAndText;