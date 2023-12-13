const nodemailer = require("nodemailer");

async function sendMail() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kg819687@gmail.com',
            pass: 'cwqx gniw lnrs idwh',
        },
    });

    const mailOptions = {
        from: 'kg819687@gmail.com', // sender address
        to: "kriti.jindal.37@gmail.com", // list of receivers
        subject: "Welcome to node js app", // Subject line
        text: "this is a nodemailer mail", // plain text body
        html: "<b>Hello world?</b>", // html body
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent: ');
    }
    catch (err) {
        console.log('email sent failed' + err);
    }
}

sendMail();
