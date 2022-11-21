function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="form-header">
          <h2>Contact</h2>
          <p>
            If you would like a personalised quote, please get in touch through
            the form below.
          </p>
        </div>
        <div className="form-container">
          <form id="form" method="POST" action="send">
            <input
              type="text"
              id="first-name"
              name="firstName"
              placeholder="First Name"
              required
              minLength="2"
            />
            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Last Name"
              required
              minLength="2"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Adress"
              minLength="5"
              required
              pattern="[@]"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              maxLength="250"
              required
            ></textarea>
            <input id="submit-btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
