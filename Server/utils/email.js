const nodemailer = require('nodemailer')
const pug = require('pug')
const { htmlToText } = require('html-to-text')

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email
    this.firstName = user.firstName
    this.url = url
    this.from = process.env.EMAIL_FROM
  }

  newTransport() {
    // REAL EMAIL
    return nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    })

    // FOR TESTING

    // return nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: process.env.EMAIL_PORT,
    //   auth: {
    //     user: process.env.EMAIL_USERNAME,
    //     pass: process.env.EMAIL_PASSWORD,
    //   },
    // })
  }

  async send(template, subject) {
    try {
      const html = pug.renderFile(`${__dirname}/../emails/${template}.pug`, {
        firstName: this.firstName,
        url: this.url,
        subject,
      })

      const mailOptions = {
        from: this.from,
        to: this.to,
        subject,
        html,
        text: htmlToText(html),
      }

      await this.newTransport().sendMail(mailOptions)
    } catch (err) {
      console.log(err)
    }
  }

  async sendPasswordReset() {
    try {
      await this.send(
        'passwordReset',
        'Your password reset token (valid for 10min)'
      )
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = class publicEmail {
  constructor(email) {
    this.to = email
    this.from = process.env.EMAIL_FROM
  }

  newTransport() {
    // REAL EMAIL
    return nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    })
  }

  async send(template, subject) {
    try {
      const html = pug.renderFile(`${__dirname}/../emails/${template}.pug`, {
        subject,
      })

      const mailOptions = {
        from: this.from,
        to: this.to,
        subject,
        html,
        text: htmlToText(html),
      }

      await this.newTransport().sendMail(mailOptions)
    } catch (err) {
      console.log(err)
    }
  }

  async sendNewsletter() {
    try {
      await this.send('newsLetter', 'Welcome to the ImmoStore!')
    } catch (err) {
      console.log(err)
    }
  }
}
