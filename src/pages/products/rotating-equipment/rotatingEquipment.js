import React from "react";
import Drilling from "../../../images/large_images/drilling.jpg";
import PressurePipes from "../../../images/small_images/High-Pressure-Pipes.jpg";
import Butech from "../../../images/small_images/butech-products.jpg";

const RotatingEquipment = () => {
  return (
    <>
      <img src={Drilling} alt="drilling equipment" />
      <p>
        Matrod Petroserve is in the business of procuring, marketing and
        servicing pumps of quality brand names. The company’s product line
        includes: Single stage liquid ring vacuum pumps, Two-stage liquidizing
        vacuum pumps, Liquid ring compressors, Rotary vane vacuum pumps, single
        stage centrifugal pumps, multi-stage centrifugal pumps, multistage
        self-priming pumps, full engineered vacuum systems and compressors.
      </p>
      <br />

      <p>
        <img src={PressurePipes} alt="" />
      </p>
      <br />

      <p>
        <img src={Butech} alt="" />
      </p>

      <ul>
        <li>Fire water pumps</li>
        <li>High speed reciprocating pumps</li>
        <li>High speed centrifugal pumps</li>
        <li>Dosing pumps</li>
        <li>High speed compressors</li>
      </ul>
    </>
  );
};

export default RotatingEquipment;
