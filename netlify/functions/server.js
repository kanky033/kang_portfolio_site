const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { firstName, lastName, email, message, phone } = JSON.parse(event.body);
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${firstName} ${lastName}`,
    to: "your_email@example.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${firstName} ${lastName}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ status: "Message Sent" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ status: "Error" }),
    };
  }
};
