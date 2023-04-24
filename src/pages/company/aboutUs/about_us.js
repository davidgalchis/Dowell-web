import "./about_us.css";
import AboutImage from "../../../images/large_images/Who-We-Are.jpg";

const About_us = () => {
  return (
    <>
      <img src={AboutImage} alt="Who We Are" />
      <h1>About MatroPetroServe</h1>

      <p>
        MatroPetro is an oil and gas service company. Our primary focus is to
        employ our specialized, technical expertise and motivate our team of
        professionals in contributing positively to the Petroleum and Energy
        main industry. We are a powerhouse of technology, creativity and
        expertise. We possess unrivaled problem solving proficiency and acumen
        in the Petroleum industry.
      </p>
      <p>
        The depth and variety of oil industry knowledge, experience and
        expertise available within MatroPetroserve and Principals lends credence
        to the earlier assertions. The company is led by a team of seasoned oil
        industry professionals with an excess of 25 years combined hands-on and
        top management experience in all phases of the upstream oil and gas
        industry in Petroleum, Mechanical, Production Engineering and Materials
        Procurement services backgrounds. This is in addition to a wealth of
        experience and technology of our affiliates and technical partners.
      </p>
      <p>
        MatroPetroserve aims to be a force and significant player across the
        entire value chain of the oil & gas industry around the west, and World
        in general. We are poised to deliver solutions to our client’s technical
        problems and provide project management services as needed.
      </p>
    </>
  );
};

export default About_us;
