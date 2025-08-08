import React from "react";
import Partner1 from "../../assets/partners/fly-emirates.png";
import Partner2 from "../../assets/partners/trivago.png";
import Partner3 from "../../assets/partners/airbnb.png";
import Partner4 from "../../assets/partners/turkishairlines.png";
import Partner5 from "../../assets/partners/swiss.png";
const SponsorBanner = () => {
  const partners = [
    { id: 1, name: "Fly Emirates", logo: Partner1 },
    { id: 2, name: "Trivago", logo: Partner2 },
    { id: 3, name: "Airbnb", logo: Partner3 },
    { id: 4, name: "Turkish Airlines", logo: Partner4 },
    { id: 5, name: "Swiss", logo: Partner5 },
  ];
  return (
    <div className="w-full h-[200px] bg-[#f7f7f7]">
      <div className="px-9 flex gap-6 justify-around lg:justify-center items-center h-full">
        {partners.map((partner) => (
          <div key={partner.id} className="w-full">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-14 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorBanner;
