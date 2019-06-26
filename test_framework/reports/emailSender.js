var nodemailer = require('nodemailer');
var mailerhbs = require('nodemailer-express-handlebars');

var mailer = nodemailer.createTransport({
    service: 'gmail',  // More at https://nodemailer.com/smtp/well-known/#supported-services
    auth: {
        user: "emrah.dautbegovic.qa@gmail.com", // Your email id
        pass:  "EmrahQA123!"// Your password
    }
});

const mailOptions = {
    from: 'noreply@emrahqa.com', // sender address
    to: 'edautbegov1@gmail.com', // receiver (can be list of receivers also)
    subject: 'Sympony Challenge test results', // Subject line
    html: { path: './reports/report.html' }// path to report
};

mailer.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });