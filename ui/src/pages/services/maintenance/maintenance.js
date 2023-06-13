import "./maintenance.css";
import MaintenanceImage from "../../../images/large_images/maintenance.jpg";
import { Cranes } from "../../../Data";

const Maintenance = () => {
  return (
    <>
      <img src={MaintenanceImage} alt="Who We Are" />
      <h1>MARINE SUPPORT</h1>

      <p>
        <strong>Matrod Petroserve</strong> supplies crane parts and carry out
        crane services. Crane parts and service are available for ship cranes,
        offshore cranes and mobile cranes. We also provide hydraulic repairs for
        crane pumps and motors as well as crane winch and crane gearbox repairs.
        Offshore crane sales and marine crane sales also available.
      </p>
      <div>
        <h1>Ship Crane parts</h1>
        <p>
          <strong>Matrod Petroserve </strong>
          provides: Ship crane parts, Ship crane Engineers, Hydraulic repairs,
          Gearbox repairs, Winch repairs, Crane sales and many other ship and
          marine crane services for:
        </p>

        <div className="row">
          {Cranes.map((crane) => (
            <div className="column" key={crane.id}>
              {crane.machines.map((machine, index) => (
                <div className="cranes">
                  {machine} <span>cranes</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p>
        Acta, Aker, Allied Marine, Asea, Bergen, Effer, Heila, Hochang, Huisman,
        Hydramarin, Kawasaki, Krupp, Marlift, Norlift, North Pacific, Norwinch,
        Palfinger, Towimor, TTS LMG, TTS Marine, TTS Norlift ship crane parts
        and Engineers are also available.
      </p>

      <div>
        <h1>Offshore Crane parts</h1>
        <p>
          {" "}
          <strong>Matrod Petroserve</strong>
          provides Offshore crane parts, Ship crane Engineers, Hydraulic
          repairs, Gearbox repairs, Winch repairs, Crane sales and many other
          offshore and pedestal crane services for:
        </p>

        <div className="row">
          {Cranes.map((crane) => (
            <div className="column" key={crane.id}>
              {crane.machines.map((machine, index) => (
                <div className="cranes">
                  {machine} <span>cranes</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p>
        Acta, Aker, American Aero, American Hoist, Ateinsa, BMC, Dreco, Dreggen,
        Effer, Hercules, Houston Systems, Le Tourneau, National, Nautilus, Nor
        Mar, Norlift, NOV, OS, Patriot, Peregrini, Seahorse, Seaking, Seatrax,
        Titan, Weatherford, Wolffkran and Unit Mariner offshore crane parts and
        Engineers are also available.
      </p>

      <div>
        <h1>Mobile Crane parts</h1>
        <p>
          Mobile crane parts for many types of mobile cranes and crawler cranes.
          Crane parts shipped worldwide. Crane types available include;
        </p>

        <div className="row">
          {Cranes.map((crane) => (
            <div className="column" key={crane.id}>
              {crane.machines.map((machine, index) => (
                <div className="cranes">
                  {machine} <span>cranes</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Maintenance;
