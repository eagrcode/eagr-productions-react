function ContactForm() {
  return (
    <div className="form-container">
      <form name="contact" id="form" netlify>
        <input
          type="text"
          id="first-name"
          name="fName"
          placeholder="First Name"
          required
          minLength="2"
        />
        <input
          type="text"
          id="last-name"
          name="lName"
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
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          maxLength="250"
          required
        ></textarea>
        <button id="submit-btn" type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
