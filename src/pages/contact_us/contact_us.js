import { useLocation } from "react-router";
import "./contactUs.css";

const Contact_us = () => {
  const location = useLocation();
  const myLocation = location.pathname.split("/");

  return (
    <section className="contact_us_wrapper">
      <div className="tab">
        <span style={{ textTransform: "uppercase" }}> {myLocation[1]} </span>
      </div>
      <section className="row">
        <section className="container">
          <p>
            Matrod Petroserve Oilfield Services is always open for communication
            on whatever questions you may have. So in case you do have questions
            (as we assume) just go ahead and complete the form below to let us
            know.
          </p>

          <p>
            <strong>We Usually respond within 24hours...</strong>
          </p>

          <div className="color_line">
            <div className="orange"></div>
          </div>

          <div className="contact_form_container">
            <h1>Send us a message</h1>

            <form>
              <div className="row">
                <div className="input_container">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="input_container">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Email" />
                </div>
              </div>
              <div className="row">
                <div className="input_container">
                  <label htmlFor="phone">Phone</label>
                  <input type="number" id="phone" placeholder="Phone Number" />
                </div>
                <div className="input_container">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Subject" />
                </div>
              </div>
              <div className="input_container">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message"
                  cols="40"
                  rows="10"
                ></textarea>
              </div>

              <div className="submit_button">
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </section>
        <aside className="contact_info">
          <div className="country">
            <h1>Nigeria</h1>
            <div className="branches">
              <div className="state">
                <h1>London Office</h1>
                <span>Park Royal Road,</span>
                <span>London,</span>
                <span>United Kingdom.</span>
                <span>
                  Email:
                  <a href="mailto:Rodavanmateo@gmail.com/">
                    Rodavanmateo@gmail.com
                  </a>
                </span>
                <span>
                  Phone: <span>+44 (752) 064 3398</span>
                </span>
              </div>
              <div className="state">
                <h1>Birmingham</h1>
                <span>Middlemore Industrial Estate,</span>
                <span>Birmingham,</span>
                <span>United Kingdom.</span>
              </div>
            </div>
          </div>
          <div className="country">
            <h1>South Africa </h1>
            <div className="state">
              <h1>South-western Office</h1>
              <span> South-western Cape region, </span>
              <span>South Africa.</span>
              <span>
                Email:
                <a href="mailto:info@matropetro.southafrica.com/">
                  info@matrod.southafrica.com
                </a>
              </span>
            </div>
          </div>
          <div className="country">
            <h1>New Zealand</h1>
            <div className="state">
              <h1>South Island Office</h1>
              <span>Queenstown Lakes District</span>
              <span>South Island</span>
              <span>New Zealand.</span>
              <span>
                Email:
                <a href="mailto:info@matropetro.newzealand.com/">
                  info@matrod.newzealand.com
                </a>
              </span>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default Contact_us;
