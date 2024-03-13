const express = require('express');
const app = express();
const { connect } = require('./config/config');
const userRouter = require('./router/userRouter.js');
const cronJob = require('./utils/cron');

const PORT = 3010;
app.use(express.json())
app.use(express.static(__dirname + '/public'));


connect();
app.use('/api/v1/user', userRouter);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');

});


app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/public/success.html');

});

cronJob.start();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
