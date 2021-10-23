const nodemailer = require('nodemailer');
const pug = require('pug');
const { htmlToText } = require('html-to-text');

module.exports = class publicEmail {
  constructor(email, url) {
    this.to = email;
    this.from = process.env.EMAIL_FROM;
    this.url = url;
  }

  newTransport() {
    // REAL EMAIL
    return nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    try {
      const html = pug.renderFile(`${__dirname}/../emails/${template}.pug`, {
        subject,
      });

      const mailOptions = {
        from: this.from,
        to: this.to,
        subject,
        html,
        text: htmlToText(html),
      };

      await this.newTransport().sendMail(mailOptions);
    } catch (err) {
      console.log(err);
    }
  }

  async sendNewsletter() {
    try {
      await this.send('newsLetter', 'Welcome to the ImmoStore!');
    } catch (err) {
      console.log(err);
    }
  }

  async sendPasswordReset() {
    try {
      await this.send(
        'passwordReset',
        'Your password reset token (valid for 10min)'
      );
    } catch (err) {
      console.log(err);
    }
  }
};
