import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="form-header">
          <h2>Contact</h2>
          <em>get in touch for a personalised quote</em>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
