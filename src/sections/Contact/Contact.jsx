import ContactForm from "../../components/ContactForm";

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
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
