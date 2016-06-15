
/*
 * GET home page.
 */

exports.index = function (req, res) {
    var fs = require('fs');
    require("jsreport").render("<h1>Hi there!</h1>").then(function (out) {
        //pipe pdf with "Hi there!"
        
        require("jsreport").render("<h1 style='color:blue'>Hi there!</h1>").then(function (out) {
            out.result.pipe(fs.createWriteStream('public\\reports\\helloworld.pdf'));
        });
    
        fs.close();
        console.log("The End");
    });
    
    
    
    //var nodemailer = require('nodemailer');
    
    //// create reusable transporter object using the default SMTP transport 
    //var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
    
    //// setup e-mail data with unicode symbols 
    //var mailOptions = {
    //    from: '"Pandi Praveen 👥" <pandi.bluewings@gmail.com>', // sender address 
    //    to: 'sruthikapro@gmail.com', // list of receivers 
    //    subject: 'Hello ✔', // Subject line 
    //    text: 'Hello world 🐴', // plaintext body 
    //    html: '<b> Pdf Created ...🐴</b>' // html body 
    //};
    
    //// send mail with defined transport object 
    //transporter.sendMail(mailOptions, function (error, info) {
    //    if (error) {
    //        return console.log(error);
    //    }
    //    console.log('Message sent: ' + info.response);
    //});
    

    console.log('tested');
    res.render('index', { title: 'hi pandi' });
   
}