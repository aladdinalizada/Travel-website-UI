import React from "react";
import Banner from "../../assets/honeymoon.png";
const SpecialBanner = () => {
  return (
    <div className="my-16 flex gap-[calc(30%-300px)] justify-center items-center">
      <img
        src={Banner}
        alt=""
        className="rounded-tl-[280px] rounded-tr-[280px]"
      />
      <div className="flex flex-col max-w-[583px] gap-y-5">
        <div>
          {" "}
          <p className="text-[#DF6951] text-[18px] uppercase font-semibold">
            category
          </p>
          <h2 className="text-[#181E4B] font-bold text-3xl sm:text-4xl lg:text-5xl">
            We Offer Best Services
          </h2>
        </div>
        <p className="text-black text-[16px]">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
        <button className="bg-[#DF6951] w-32 rounded-[10px] py-2 text-white ">
          View Packages
        </button>
      </div>
    </div>
  );
};

export default SpecialBanner;
