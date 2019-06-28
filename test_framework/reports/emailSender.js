var nodemailer = require('nodemailer');
var mailerhbs = require('nodemailer-express-handlebars');
var fs = require('fs');
var path = require('path');
var parser = require('xml2json');

const resultsPath = path.join(__dirname, "/junitresults-SymphonyQATestAutomationChallengetestsTask1.xml")

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

var prepareAndSendTestResults = function() {
  fs.readFile(resultsPath, 'utf8', function (err, data) {
    if(err){
      console.log(err)
    }
    else{
      var json = parser.toJson(data);
      var results = JSON.parse(json);
      console.log(results)
    }
  })
}


prepareAndSendTestResults()

// mailer.sendMail(mailOptions, function (err, info) {
//     if(err)
//       console.log(err)
//     else
//       console.log(info);
//  });