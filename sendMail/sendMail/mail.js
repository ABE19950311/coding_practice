const nodemailer = require("nodemailer");

const smtp_host="smtp.gmail.com"
const smtp_port=587
const smtp_user=""
const smtp_passwd="m"
const mail_subject="hoge fuu hooooo"
const mail_text="mail test desu yo"
const mail_from=""
const mail_to_list=""

const smtpOption = {
    host:smtp_host,
    port:smtp_port,
    secure:false,
    auth: {
        user:smtp_user,
        pass:smtp_passwd
    },
    tls: {
        rejectUnauthorized: false,
    }
}

async function sendMail() {
    const msg = {
        from:mail_from,
        to:mail_to_list,
        subject:mail_subject,
        text:mail_text
    }
    try {
        const transport = nodemailer.createTransport(smtpOption);
        await transport.sendMail(msg)
    } catch(e) {
        console.error(e)
    }
}

sendMail()