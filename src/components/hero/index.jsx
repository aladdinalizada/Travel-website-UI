import React, { useState } from "react";
import heroImage from "../../assets/hero.png";
import Vector from "../../assets/vector.svg";

const cities = [
  "Baku",
  "Istanbul",
  "Antalya",
  "Bangkok",
  "London",
  "Mecca",
  "Dubai",
  "Paris",
  "Roma",
  "New York City",
];

const Hero = () => {
  const [formData, setFormData] = useState({
    destination: "",
    travelType: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, destination: value });
    setSelectedCity("");

    if (value.length > 0) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }

    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        destination: "Destination is required.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, destination: "" }));
    }
  };

  const handleSelectCity = (city) => {
    setFormData({ ...formData, destination: city });
    setSelectedCity(city);
    setFilteredCities([]);
    setErrors((prev) => ({ ...prev, destination: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required.` }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.destination.trim())
      newErrors.destination = "Destination is required.";
    if (!formData.travelType.trim())
      newErrors.travelType = "Please select a travel type.";
    if (!formData.date.trim()) newErrors.date = "Date is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({
      destination: "",
      travelType: "",
      date: "",
    });
    setSelectedCity("");
    setFilteredCities([]);
    setErrors({});
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat text-white px-4 py-8 flex flex-col justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <img src={Vector} alt="vector" className="w-16 md:w-20 mb-4" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58.51px] font-bold leading-tight mb-8 max-w-3xl">
          No matter where you’re going to, we’ll take you there
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#F3F3F3]/60 backdrop-blur-md rounded-lg p-6 flex flex-col md:flex-row flex-wrap gap-4"
          autoComplete="off"
        >
          {/* Destination */}
          <div className="flex flex-col flex-1 relative min-w-[250px]">
            <input
              type="text"
              name="destination"
              placeholder="Where to?"
              value={formData.destination}
              onChange={handleDestinationChange}
              className={`p-3 text-black rounded-md focus:outline-none focus:ring-2 ${
                errors.destination ? "ring-red-500" : "focus:ring-[#DF6951]"
              }`}
            />
            {filteredCities.length > 0 && (
              <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md max-h-48 overflow-y-auto z-20 shadow-md">
                {filteredCities.map((city, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                    onClick={() => handleSelectCity(city)}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
            {errors.destination && (
              <p className="text-red-600 text-sm mt-1">{errors.destination}</p>
            )}
          </div>

          {/* Travel Type */}
          <div className="flex flex-col flex-1 min-w-[200px]">
            <select
              name="travelType"
              value={formData.travelType}
              onChange={handleChange}
              className={`p-3 text-black rounded-md focus:outline-none focus:ring-2 ${
                errors.travelType ? "ring-red-500" : "focus:ring-[#DF6951]"
              }`}
            >
              <option value="">Travel Type</option>
              <option value="vacation">Vacation</option>
              <option value="business">Business</option>
              <option value="adventure">Adventure</option>
            </select>
            {errors.travelType && (
              <p className="text-red-600 text-sm mt-1">{errors.travelType}</p>
            )}
          </div>

          {/* Date */}
          <div className="flex flex-col flex-1 min-w-[180px]">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`p-3 text-black rounded-md focus:outline-none focus:ring-2 ${
                errors.date ? "ring-red-500" : "focus:ring-[#DF6951]"
              }`}
            />
            {errors.date && (
              <p className="text-red-600 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#DF6951] text-white rounded-2xl px-6 py-3 h-fit w-full md:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
