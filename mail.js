const nodemiler = require('nodemailer');

function mailsend(sender,sub,text){
    const message = {
        form: 'rohitpandey123@gmail.com',
        to: sender,
        subject: sub,
        text: text
    };

    nodemiler.createTransport({
        service: 'gmail',
        auth: {
            user: 'rohitpandeyap123@gmail.com',
            pass: 'eaoaeafzklnatjvv'
        },
        port: 465,
        host: 'smtp.gmail.com'
    }).sendMail(message, (err) => {
        if (err) console.log('error', err);
        else console.log('mail sent to ',message);
    });

}

module.exports = mailsend;