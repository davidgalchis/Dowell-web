import { useLocation } from "react-router";
import "./contactUs.css";

const Contact_us = () => {
  const location = useLocation();
  const myLocation = location.pathname.split("/");

  console.log(myLocation[1]);
  return (
    <section className="contact_us_wrapper">
      <div className="tab">
        <span style={{ textTransform: "uppercase" }}> {myLocation[1]} </span>
      </div>
      <section className="row">
        <section className="container">
          <p>
            Dovewell Oilfield Services Limited is always open for communication
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
                <h1>Lagos Office</h1>
                <span>Plot 21B Akwuzu Street,</span>
                <span>Lekki Phase 1, Lagos,</span>
                <span>Lagos State,</span>
                <span>Nigeria.</span>
                <span>
                  Email:
                  <a href="mailto:https://dovewellgroup.com/">
                    info@dovewellgroup.com
                  </a>
                </span>
                <span>
                  website:
                  <a href="mailto:https://dovewellgroup.com/">
                    info@dovewellgroup.com
                  </a>
                </span>
              </div>
              <div className="state">
                <h1>Port Harcourt Office</h1>
                <span>Plot 21B Akwuzu Street,</span>
                <span>Lekki Phase 1, Lagos,</span>
                <span>Lagos State,</span>
                <span>Nigeria.</span>
                <span>
                  Email:
                  <a href="mailto:https://dovewellgroup.com/">
                    info@dovewellgroup.com
                  </a>
                </span>
                <span>
                  website:
                  <a href="mailto:https://dovewellgroup.com/">
                    info@dovewellgroup.com
                  </a>
                </span>
              </div>
            </div>
            <div className="contact">
              <div className="state">
                <h1>YARD LOCATION</h1>
                <span>Plot 21B Akwuzu Street,</span>
                <span>Lekki Phase 1, Lagos,</span>
                <span>Lagos State,</span>
                <span>Nigeria.</span>
                <span>
                  Email:
                  <a href="mailto:https://dovewellgroup.com/">
                    info@dovewellgroup.com
                  </a>
                </span>
                <span>
                  website:
                  <a href="mailto:https://dovewellgroup.com/">
                    info@dovewellgroup.com
                  </a>
                </span>
              </div>
              <div className="state">
                <h1>CALL LINES</h1>
                <div className="state">
                  <span>+1 333 333 3334</span>
                  <span>+1 333 333 3334</span>
                  <span>+1 333 333 3334</span>
                  <span>+1 333 333 3334</span>
                </div>
              </div>
            </div>
          </div>
          <div className="country">
            <h1>Angola</h1>
            <div className="state">
              <h1>Lagos Office</h1>
              <span>Plot 21B Akwuzu Street,</span>
              <span>Lekki Phase 1, Lagos,</span>
              <span>Lagos State,</span>
              <span>Nigeria.</span>
              <span>
                Email:
                <a href="mailto:https://dovewellgroup.com/">
                  info@dovewellgroup.com
                </a>
              </span>
              <span>
                website:
                <a href="mailto:https://dovewellgroup.com/">
                  info@dovewellgroup.com
                </a>
              </span>
            </div>
            <div className="contact">
              <div className="state">
                <h1>CALL LINES</h1>
                <div className="state">
                  <span>+1 333 333 3334</span>
                  <span>+1 333 333 3334</span>
                </div>
              </div>
            </div>
          </div>
          <div className="country">
            <h1>Ghana</h1>
            <div className="state">
              <h1>Lagos Office</h1>
              <span>Plot 21B Akwuzu Street,</span>
              <span>Lekki Phase 1, Lagos,</span>
              <span>Lagos State,</span>
              <span>Nigeria.</span>
              <span>
                Email:
                <a href="mailto:https://dovewellgroup.com/">
                  info@dovewellgroup.com
                </a>
              </span>
              <span>
                website:
                <a href="mailto:https://dovewellgroup.com/">
                  info@dovewellgroup.com
                </a>
              </span>
            </div>
            <div className="contact">
              <div className="state">
                <h1>CALL LINES</h1>
                <div className="state">
                  <span>+1 333 333 3334</span>
                  <span>+1 333 333 3334</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default Contact_us;
