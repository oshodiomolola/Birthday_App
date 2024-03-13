const cron = require('node-cron');
const User = require('../model/UserModel');
const sendEmail = require('./email');

function start() {
    console.log('Cron job started...');
    cron.schedule('0 6 * * *', async () => {

        const today = new Date();
        const monthDay = today.toISOString().slice(5, 10);
        console.log(monthDay);
        const users = await User.find({ birthdayMD: { $eq: monthDay }  });

        console.log(users);
        const message = `happy Birthday Bestie!! ${users[0].username}! Happy birthday to you`;
    users.forEach(user => {
        console.log(user.email);
        sendEmail(message, user)
        .then(result => {
            console.log('Email delivered...', result);
        })
    })
    });
}

module.exports = { start };