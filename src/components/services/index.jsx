import React from "react";
import Icon1 from "../../assets/svgs/categories/tour.png";
import Icon2 from "../../assets/svgs/categories/plane.png";
import Icon3 from "../../assets/svgs/categories/hands.png";
import Icon4 from "../../assets/svgs/categories/medical.png";

const Services = () => {
  const categories = [
    {
      id: 1,
      title: "Guided Tours",
      desc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
      img: Icon1,
    },
    {
      id: 2,
      title: "Best Flights Options",
      desc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
      img: Icon2,
    },
    {
      id: 3,
      title: "Religious Tours",
      desc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
      img: Icon3,
    },
    {
      id: 4,
      title: "Medical insurance",
      desc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
      img: Icon4,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center my-28 px-4">
      <div className="max-w-[1282px] w-full">
        <div className="text-center flex flex-col gap-5">
          <p className="text-[#DF6951] text-[18px] uppercase font-semibold">
            category
          </p>
          <h2 className="text-[#181E4B] font-bold text-3xl sm:text-4xl lg:text-5xl">
            We Offer Best Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-full h-[300px] flex flex-col items-center justify-center gap-2 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:rounded-xl"
            >
              <img
                src={category.img}
                alt={category.title}
                className="h-16 w-16 object-contain"
              />
              <h3 className="text-[#181E4B] font-semibold text-lg sm:text-xl">
                {category.title}
              </h3>
              <p className="text-[#181E4B] text-center text-sm sm:text-[16px] w-3/4">
                {category.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
