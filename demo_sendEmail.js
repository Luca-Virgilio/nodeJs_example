var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'l.virgilio1@campus.unimib.it', 
        pass: 'bicocca.energy10' 
    } 
 });
 var mailOptions = { 
     from: 'l.virgilio1@campus.unimib.it', 
     to: 'energy.luca@hotmail.com',
      subject: 'Sending Email using Node.js', 
      text: 'That was easy!' 
    }; 
 transporter.sendMail(mailOptions, function(error, info){
      if (error) { console.log(error);
    } else { console.log('Email sent: ' + info.response); 
    }
 });