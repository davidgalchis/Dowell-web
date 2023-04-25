import Banner from "../../components/Banner/Banner";
import "./home.css";
import { Statement } from "../../Data";
import { Link, useLocation } from "react-router-dom";
import Partner from "../../components/Partners/Partner";

const Home = () => {
  const location = useLocation();

  return (
    <section className="home_container">
      <Banner />
      <div className="about_us">
        <div className="stitch" />
        <div>
          <div className="description">
            <h2>Welcome To Matro Petro Serve</h2>
            <p>
              Our primary focus is to employ our specialized, technical
              expertise and motivate our team of professionals in contributing
              positively to the improving Petroleum and Energy main industry. We
              are a powerhouse of technology, creativity and expertise. We
              possess unrivalled problem solving proficiency and acumen in the
              Petroleum industry.
            </p>
          </div>

          <button className="readmore">
            <Link to="/company/about-us"> Read More</Link>
          </button>
        </div>

        <div className="stitch" />
      </div>

      <div className="statement">
        {Statement.map((statement) => (
          <div className={statement.class} key={statement.id}>
            <img src={statement.image} alt="statement thumbnail" />
            <h2>{statement.title}</h2>
            <p>{statement.description}</p>
          </div>
        ))}
      </div>

      <div>
        <Partner />
      </div>
    </section>
  );
};

export default Home;
