import Banner from "../../components/Banner/Banner";
import "./home.css";
import { Statement } from "../../Data";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  console.log(location);

  return (
    <section className="home_container">
      <Banner />
      <div className="about_us">
        <div className="stitch" />
        <div>
          <div className="description">
            <h2>Welcome To Dowell Group Limited</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              excepturi ipsum pariatur, praesentium, repellendus dicta iste
              asperiores enim voluptate qui non necessitatibus et error,
              provident voluptates sapiente vitae animi iure accusamus eum quo
              adipisci. Expedita accusamus officia cupiditate inventore cum.
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
    </section>
  );
};

export default Home;
