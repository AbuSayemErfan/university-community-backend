import nodemailer from "nodemailer";

export const sendEmail = async (to: string, html: string, subject: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "abusayemerfandesigner@gmail.com",
      pass: "jyvg jzcl fmtg dlfy",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: '"Uni-Nexus-Community" <abusayemerfandesigner@gmail.com>',
    to,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
};
