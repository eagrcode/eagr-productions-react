import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
    sent: false,
    err: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    setData({
      ...data,
    });

    axios
      .post("/api/sendMail", data)
      .then((res) => {
        if (res.data.result !== "success") {
          setData({
            ...data,
            sent: false,
            err: "fail",
          });
          setTimeout(() => {
            resetForm();
          }, 6000);
        } else {
          setData({
            ...data,
            sent: true,
            err: "success",
          });
          setTimeout(() => {
            resetForm();
          }, 6000);
        }
      })
      .catch((err) => {
        //console.log(err.response.status)
        setData({
          ...data,
          err: "fail",
        });
      });
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      message: "",
      sent: false,
      err: "",
    });
  };

  return (
    <div className="form-container">
      <form id="form" method="POST" onSubmit={formSubmit}>
        <input
          type="text"
          id="first-name"
          name="fName"
          placeholder="First Name"
          required
          minLength="2"
          value={data.fName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="last-name"
          name="lName"
          placeholder="Last Name"
          required
          minLength="2"
          value={data.lName}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Adress"
          minLength="5"
          required
          value={data.email}
          onChange={handleChange}
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          maxLength="250"
          required
          value={data.message}
          onChange={handleChange}
        ></textarea>
        <button id="submit-btn" type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
