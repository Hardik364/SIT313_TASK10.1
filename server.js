const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const cors = require('cors');


const app = express();
// Mailgun configuration
const domain = 'sandboxb9261f482a0848539672b514df7ec90a.mailgun.org';
const api_key = 'key-6ddebfdae7e0afbfc8c41080398784ef'; 
const mailgunInstance = mailgun({ apiKey: api_key, domain: domain });

const corseOptions = {
    origin: 'http://localhost:3000',
}
app.use(cors(corseOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API endpoint for subscription
app.post('/', (req, res) => {
    const email = req.body.email;
    const mailData = {
        from: 'Hardik <hardik23bajaj@gmail.com.com>',
        to:email,
        subject: 'Welcome to Our Newsletter!',
        text: 'Dear subscriber,\n\nThank you for signing up for our newsletter. We are excited to have you on board!\n\nBest regards,\nThe Newsletter Team',
    };

    mailgunInstance.messages().send(mailData, function (error, body) {
        if (error) {
            console.error(error);
            return res.status(500).send("Error sending email");
        } else {
            console.log(body);
            res.status(200).send("Email sent successfully");
        }
    });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`The Server is running at port ${PORT}!`);
});