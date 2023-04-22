import "./maintenance.css";
import MaintenanceImage from "../../../images/large_images/maintenance.jpg";
import { Cranes } from "../../../Data";

const Maintenance = () => {
  return (
    <>
      <img src={MaintenanceImage} alt="Who We Are" />
      <h1>MARINE SUPPORT</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        deserunt, corrupti tenetur est eaque quas odio voluptate aperiam
        asperiores alias quasi laborum doloribus, molestias iusto libero ut ex,
        mollitia dolorum esse repellendus assumenda ad accusantium amet! Nemo
        hic eaque ad iste, accusamus possimus iure itaque quod, atque
      </p>
      <div>
        <h1>Ship Crane parts</h1>
        <p>
          sint voluptatibus sit quas doloremque culpa voluptatem eum quidem in
          impedit deserunt ratione at! Et repudiandae quis molestias illum
          quibusdam tenetur quisquam tempora magnam suscipit unde at autem
          temporibus adipisci aliquid enim vitae, excepturi non. Magnam ullam
          eos necessitatibus suscipit quod quidem, perferendis quae facere
          ducimus autem, explicabo eaque beatae animi veniam sequi!
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
        sint voluptatibus sit quas doloremque culpa voluptatem eum quidem in
        impedit deserunt ratione at! Et repudiandae quis molestias illum
        quibusdam tenetur quisquam tempora magnam suscipit unde at autem
        temporibus adipisci aliquid enim vitae, excepturi non. Magnam ullam eos
        necessitatibus suscipit quod quidem, perferendis quae facere ducimus
        autem, explicabo eaque beatae animi veniam sequi!
      </p>

      <div>
        <h1>Offshore Crane parts</h1>
        <p>
          sint voluptatibus sit quas doloremque culpa voluptatem eum quidem in
          impedit deserunt ratione at! Et repudiandae quis molestias illum
          quibusdam tenetur quisquam tempora magnam suscipit unde at autem
          temporibus adipisci aliquid enim vitae, excepturi non. Magnam ullam
          eos necessitatibus suscipit quod quidem, perferendis quae facere
          ducimus autem, explicabo eaque beatae animi veniam sequi!
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
        sint voluptatibus sit quas doloremque culpa voluptatem eum quidem in
        impedit deserunt ratione at! Et repudiandae quis molestias illum
        quibusdam tenetur quisquam tempora magnam suscipit unde at autem
        temporibus adipisci aliquid enim vitae, excepturi non. Magnam ullam eos
        necessitatibus suscipit quod quidem, perferendis quae facere ducimus
        autem, explicabo eaque beatae animi veniam sequi!
      </p>

      <div>
        <h1>Mobile Crane parts</h1>
        <p>
          sint voluptatibus sit quas doloremque culpa voluptatem eum quidem in
          impedit deserunt ratione at! Et repudiandae quis molestias illum
          quibusdam tenetur quisquam tempora magnam suscipit unde at autem
          temporibus adipisci aliquid enim vitae, excepturi non. Magnam ullam
          eos necessitatibus suscipit quod quidem, perferendis quae facere
          ducimus autem, explicabo eaque beatae animi veniam sequi!
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
        sint voluptatibus sit quas doloremque culpa voluptatem eum quidem in
        impedit deserunt ratione at! Et repudiandae quis molestias illum
        quibusdam tenetur quisquam tempora magnam suscipit unde at autem
        temporibus adipisci aliquid enim vitae, excepturi non. Magnam ullam eos
        necessitatibus suscipit quod quidem, perferendis quae facere ducimus
        autem, explicabo eaque beatae animi veniam sequi!
      </p>
    </>
  );
};

export default Maintenance;
