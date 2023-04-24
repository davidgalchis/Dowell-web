import { Link } from "react-router-dom";
import "./nav.css";
import Logo from "../../images/small_images/main_logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useEffect } from "react";

const Nav = () => {
  const [mobile, setMobile] = useState(true);
  const [menu, setMenu] = useState(false);
  const isWindow = typeof window !== "undefined";

  useEffect(() => {
    const handleResize = () => {
      if (isWindow) {
        if (window.innerWidth > 700) {
          setMobile(false);
          console.log(window.innerWidth);
          console.log(mobile);
        } else {
          setMobile(true);
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isWindow, mobile]);

  return (
    <nav className="navbar_container">
      <Link to="/" className="logo_link">
        <img src={Logo} alt="" />
      </Link>

      {mobile ? (
        <span>
          <RxHamburgerMenu
            style={{ fontSize: "2rem", color: "#fff", marginRight: "1rem" }}
            onClick={() => setMenu(!menu)}
          />
          <div className="mobile_menu" style={{ left: !menu ? "-100%" : 0 }}>
            <Link to="/" onClick={() => setMenu(!menu)}>
              Home
            </Link>

            <Link to="company/about-us" onClick={() => setMenu(!menu)}>
              Company
            </Link>

            <div className="hoverLink">
              <span>Services</span>
              <div className="hoverMenu">
                <Link
                  to="services/marine-support"
                  onClick={() => setMenu(!menu)}
                >
                  marine support
                </Link>
                <Link
                  to="services/onshore-and-offshore-maintenance"
                  onClick={() => setMenu(!menu)}
                >
                  maintenance
                </Link>
              </div>
            </div>

            <div className="hoverLink">
              <span>Products</span>
              <div className="hoverMenu">
                <Link
                  to="products/drilling-equipment"
                  onClick={() => setMenu(!menu)}
                >
                  drilling equipment
                </Link>
                <Link
                  to="products/rotating-equipment"
                  onClick={() => setMenu(!menu)}
                >
                  rotating equipment
                </Link>
              </div>
            </div>

            <Link to="careers" onClick={() => setMenu(!menu)}>
              Careers
            </Link>
            <Link to="contact-us" onClick={() => setMenu(!menu)}>
              Contact
            </Link>
          </div>
        </span>
      ) : (
        <div className="navbar_menu">
          <Link to="/">Home</Link>

          <Link to="company/about-us">Company</Link>

          <div className="dropdown">
            <span className="dropbtn">Services</span>
            <div className="dropdown-content">
              <Link to="services/marine-support">Marine Support</Link>
              <br />
              <Link to="/services/onshore-and-offshore-maintenance">
                Maintenance
              </Link>
            </div>
          </div>

          <div className="dropdown">
            <span className="dropbtn">Products</span>
            <div className="dropdown-content">
              <Link to="products/drilling-equipment">Drilling equipment</Link>
              <br />
              <Link to="products/rotating-equipment">Rotating equipment</Link>
            </div>
          </div>

          <Link to="careers">Careers</Link>
          <Link to="contact-us">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
