import "./careers.css";
import oilRig from "../../images/large_images/careers.jpg";

const Careers = () => {
  return (
    <>
      <img src={oilRig} alt="oil rig thumbnail" />
      <p>
        <strong>MatroPetroserve Oilfield Services </strong>
        seeks talented individuals who share our passion and drive for
        excellence and hard work. MatroPetroserve has the technology and vision
        that are needed to dramatically improve productivity and change the way
        people work. People are the essential component for the development of
        our technology and the execution of our vision. We are always on the
        lookout for talented individuals across all functions who share our
        passion for technology, excellence and innovation.
      </p>

      <p>
        Please upload your CV using the CV Upload Form. Please note that only
        short listed applicants will be contacted.
      </p>

      <p>
        MatroPetroserve is an equal opportunity employer. We do not discriminate
        on grounds of gender, race or colour. To contact us via e-mail, please
        send to
      </p>

      <form>
        <div className="input_container">
          <label htmlFor="firstname">First Name</label>
          <input type="text" placeholder="First Name" id="firstname" />
        </div>

        <div className="input_container">
          <label htmlFor="last_name">First Name</label>
          <input type="text" placeholder="Last Name" id="last_name" />
        </div>

        <div className="input_container">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" id="email" />
        </div>

        <div className="input_container">
          <label htmlFor="subject">Subject</label>
          <input type="text" placeholder="Subject" id="subject" />
        </div>

        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea type="text" placeholder="Message" id="message" />
        </div>

        <div className="submit_button">
          <button>Send</button>
        </div>
      </form>
    </>
  );
};

export default Careers;
