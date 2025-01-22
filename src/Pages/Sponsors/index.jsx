import React from "react";
import styles from "./styles/home.module.css";
import { useState, useEffect } from "react";
import App from "./Swiper.jsx";
import circle from "./circleplus.png";
import sideBar from "./sideBar.png";

const Sponsors = () => {
  const initialValues = {
    name: "",
    company: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const [result, setResult] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.REACT_APP_API_KEY);

    if (
      formValues.name &&
      formValues.company &&
      formValues.email &&
      formValues.message
    ) {
      setResult("Success");
    } else {
      setResult("Error");
    }

    setFormValues({
      name: "",
      company: "",
      email: "",
      message: "",
    });
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    console.log("Yo");
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //   if (!values.fullName) {
  //     errors.fullName = "Full name is required!";
  //   }

  //   if (!values.company) {
  //     errors.company = "Company name is required!";
  //   }

  //   if (!values.email) {
  //     errors.email = "E-mail is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This e-mail is not valid";
  //   }
  //   return errors;
  // };
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Our Sponsors</h1>
      <App />
      <div className={styles.whysponsorus}>
        <div className={styles.siteContent}>
          <h2 className={styles.subheading}>Why<br></br>Sponsor Us?</h2>
          {/* First Para */}
          <ul className={styles.listStyle}>
            <div className={styles.sponsorPara}>
              <span className={styles.sponsorText}>Youth Hub:&nbsp;</span>
              The Youth hub of the organization is a huge reach, as it has a
              large student population of 10000+ people on campus.
            </div>
            {/* Second Para */}
            <div className={styles.sponsorPara}>
              <span className={styles.sponsorText}>
                Connecting Tech Enthusiasts all over India:&nbsp;
              </span>
              MLSC is an Open-Source community that connects tech enthusiasts
              all across India. Its discord server has a reach of over a
              thousand people, which includes members from some of the country's
              most prominent educational institutions such as IITs and NITs.
            </div>
            {/* Third Para */}
            <div className={styles.sponsorPara}>
              <span className={styles.sponsorText}>Flagship Events:&nbsp;</span>
              MLSC is known for conducting various events throughout the year,
              which are designed to reach a massive audience. Some of these
              being Abhyudaya and Makeathon, which are very popular annual
              events that have the potential to increase the awareness and reach
              of your brand.
            </div>
            {/* Fourth Para */}
            <div className={styles.sponsorPara}>
              <span className={styles.sponsorText}>
                Ultimate Social Media Reach:&nbsp;
              </span>
              MLSC has an extensive social media presence that includes over
              8000 followers on various platforms such as Facebook, Instagram,
              and LinkedIn. Thus strategically helping boost your brand's
              reputation, reach and attract the youth.
            </div>

            <div className={styles.sponsorPara}>
              <span className={styles.sponsorText}>
                Best way to kickstart your campaign:&nbsp;
              </span>
              Collaborating with MLSC, a group of over a hundred individuals who
              are dedicated to learning all the traits that make up a successful
              team will help you organize various promotional events and
              learning workshops.
            </div>
          </ul>
        </div>
      </div>
      <img src={sideBar} className={styles.sideBar} />
      <div>
        <img src={circle} className={styles.circle} />
        <div className={styles.siteContent}>
          <h1 className={styles.sponsorUsHead}>
            Want To Sponsor Our
            <br></br>Upcoming Event?
          </h1>
          <div className={styles.sponsorForm}>
            <div className={styles.ctContainer1}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formWrapper}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    required
                    className={styles.contactField}
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  <input
                    type="company"
                    placeholder="Company Name"
                    name="company"
                    required
                    className={styles.contactField}
                    value={formValues.company}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                    className={styles.contactField}
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Leave a Message for us!"
                    required
                    className={styles.contactText}
                    value={formValues.message}
                    onChange={handleChange}
                  ></textarea>
                  <input
                    type="hidden"
                    name="redirect"
                    value="localhost:3000/sponsors"
                  />
                  <button type="submit" className={styles.submitButton}>
                    Submit!
                  </button>
                </div>
                {result && (
                  <p
                    className={styles.submissionStatus}
                    style={{ color: result === "Success" ? "green" : "red" }}
                  >
                    {result === "Success"
                      ? "Form submitted successfully!"
                      : "Form submission failed."}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className={styles.ctContainer2}>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
