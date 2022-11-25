const nodemailer = require("nodemailer");

const handler = async (event, context, callback) => {
  let data = JSON.parse(event.body);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "testymcmailface@gmail.com",
      pass: "uxljsggzufjphwxs",
    },
  });

  transporter.sendMail(
    {
      from: "EAGR Productions Contact", // sender address
      to: "eagrproductions92@gmail.com", // list of receivers
      subject: "New Contact Form Submission", // subject line

      html: `<h3>Contact Details</h3>   
      <p>Name: ${data.fName} ${data.lName}<P>      
      <p>Email Address: ${data.email}</p>    
      <h3>Message</h3>
      <p>${data.message}</p>`,
    },

    function (error, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            result: "success",
          }),
        });
      }
    }
  );
};

export default handler;
