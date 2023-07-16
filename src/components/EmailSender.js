import emailjs from "@emailjs/browser";

const sendEmail = (name,subject, body) => {
  var receiverEmail = "vidittayal21@gmail.com";

  const templateParams = {
    sender_name: name,
    to_email: receiverEmail,
    email_subject: subject,
    email_body: body,
  };

  emailjs
    .send("service_3o2o9lp", "template_jzsz508", templateParams, "Q-tZOD6C_mHdbkRVc")
    .then((response) => {
      console.log("Email sent successfully!", response);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};

export default sendEmail;
