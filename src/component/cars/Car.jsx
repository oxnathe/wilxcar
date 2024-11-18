import React, { useState, useEffect } from "react";
import "./Car.css";
import Bmw from "../../assets/car24.png";
import Geely from "../../assets/geely.png";
import Tesla from "../../assets/tesla.png";
import Maybach from "../../assets/maybach.png";
import Acura from "../../assets/acura.png";

const CarDisplay = () => {
  const cars = [
    { name: "Bmw", image: Bmw },
    { name: "Geely", image: Geely },
    { name: "Tesla", image: Tesla },
    { name: "Maybach", image: Maybach },
    { name: "Acura", image: Acura },
  ];

  const [selectedCar, setSelectedCar] = useState(cars[0]); // Default to the first car
  const [fadeOut, setFadeOut] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarChange = (index) => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setSelectedCar(cars[index]);
      setFadeOut(false);
    }, 500); // Match this duration to the CSS transition duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % cars.length; // Cycle through cars
      handleCarChange(nextIndex);
    }, 3000); // Change car every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, cars.length]);

  return (
    <div className="car-display-container">
      <h1>Wilx Garage</h1>
      <div className="car-buttons">
        {cars.map((car, index) => (
          <button
            key={index}
            onClick={() => handleCarChange(index)}
            className={`car-button ${
              selectedCar.name === car.name ? "active" : ""
            }`}
          >
            {car.name}
          </button>
        ))}
      </div>
      <div className="car-info">
        <h2>{selectedCar.name}</h2>
        <img
          src={selectedCar.image}
          alt={selectedCar.name}
          className={`car-image ${fadeOut ? "fade-out" : ""}`}
        />
      </div>
      <div class="col-md-6 order-0">
        <p class="text-200 text-center text-md-start">
          All rights Reserved &copy; Wilx Innovations, 2024
        </p>
      </div>
      <div className="col-md-6 order-1">
  <p class="made-with">
    Made with&nbsp;
    <svg className="bi bi-suit-heart-fill heart-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#FFB30E" viewBox="0 0 16 16">
      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
    </svg>&nbsp;by&nbsp;<a class="author-link" href="#" target="_blank">UTI WILX</a>
  </p>
</div>

    </div>
  );
};

export default CarDisplay;
