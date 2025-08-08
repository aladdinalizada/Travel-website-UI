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
  // Form datanı idarə edən state
  const [formData, setFormData] = useState({
    destination: "",
    travelType: "",
    date: "",
  });

  // Errorlar üçün state
  const [errors, setErrors] = useState({});

  // Autocomplete üçün filtrlenmiş şəhərlər
  const [filteredCities, setFilteredCities] = useState([]);

  // Seçilmiş şəhər (göstərmək üçün)
  const [selectedCity, setSelectedCity] = useState("");

  // Input dəyişəndə çağırılır
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

    // Error yoxlaması
    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        destination: "Destination is required.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, destination: "" }));
    }
  };

  // Şəhər seçildikdə çağırılır
  const handleSelectCity = (city) => {
    setFormData({ ...formData, destination: city });
    setSelectedCity(city);
    setFilteredCities([]);
    setErrors((prev) => ({ ...prev, destination: "" }));
  };

  // Digər inputlar üçün dəyişiklik
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Sadə validation
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required.` }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Submit funksiyası
  const handleSubmit = (e) => {
    e.preventDefault();

    // Formun tam yoxlanması
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

    // Reset
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
      className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center pl-3 md:pl-[10%] lg:pl-[25%] text-white px-4 flex-wrap"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <img src={Vector} alt="vector" className="w-20" />
      <h1 className=" text-start font-bold max-w-2xl mb-6 w-[70%] text-[58.51px]">
        No matter where you’re going to, we’ll take you there
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl w-full bg-[#F3F3F3]/60 pt-6 pb-6 px-6 rounded-lg flex flex-wrap md:flex-nowrap gap-4 justify-between items-start backdrop-blur-md flex-wrap"
        autoComplete="off"
      >
        {/* Destination with autocomplete */}
        <div className="flex flex-col flex-1 relative">
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
          {/* Autocomplete dropdown */}
          {filteredCities.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md max-h-48 overflow-y-auto z-20">
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

        <div className="w-[1px] h-10 bg-[#D0D0D0] hidden md:block mt-3"></div>

        {/* Travel Type */}
        <div className="flex flex-col flex-1">
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

        <div className="w-[1px] h-10 bg-[#D0D0D0] hidden md:block mt-3"></div>

        {/* Date */}
        <div className="flex flex-col flex-1">
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

        <button
          type="submit"
          className="bg-[#DF6951] text-white rounded-2xl px-6 py-3 mt-2 md:mt-0 h-fit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Hero;
