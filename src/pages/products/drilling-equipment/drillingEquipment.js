import React from "react";
import Drilling from "../../../images/large_images/OCTG-Line-PIPE.jpg";
import Valve from "../../../images/small_images/ButterFly-Valve.jpg";
import Fittings from "../../../images/small_images/fittings.jpg";
import Flanges from "../../../images/small_images/flanges.jpg";

const DrillingEquipment = () => {
  return (
    <>
      <img src={Drilling} alt="drilling equipment" />
      <p>
        We offer procurement management of valves and actuator that is
        technically based with design engineers, production engineers, valve
        technologists, and QA/QC personnel. Quality, safety, and customer
        service remain the highest priority to us. We monitor our manufacturers
        and suppliers to ensure they meet these same high standards.
      </p>
      <img src={Valve} alt="" />

      <p>
        We would be proud to earn your business and become partners in the
        industry. Allow us the opportunity to serve you. You will experience
        first class service along with best in class products.
        <strong>MatroPetroserve</strong> is your valve and automation connection
        to the world.
      </p>

      <img src={Fittings} alt="" />

      <p>
        <img src={Flanges} alt="" />
      </p>

      <p>
        MatroPetroserve provides different sizes of flanges/fittings from 1/2″
        to 60″, ANSI classes 150lbs to 2500lbs API6D & API6A and API 2000 to API
        20000 in Carbon Steel, Stainless Steel, Duplex Steel, Super Duplex
        Steel, Alloy Steel, Incoloy-Monel, Titanium etc.
      </p>

      <ul>
        <li>
          Carbon steel/Carbon-Manganese (ASTM A206) Low temperature carbon steel
          (ASTM A33)
        </li>
        <li>Alloy steels (ASTM A691)</li>
        <li>
          High yield line pipes for sour/non-sour applications (API 5L)
          structural steels
        </li>
        <li>Wide flange beams</li>
        <li>Complete piles</li>
        <li>Conductor pipes</li>
        <li>Pre-fabricated components</li>
      </ul>
    </>
  );
};

export default DrillingEquipment;
