//Dependencies
const express = require('express');
const app = express();
app.use(express.json());
//Handling Get request for / URI
app.get('/', (req, res) => {
res.send('Express App Running');
});

app.get('/time', (req, res) => {
    const time = new Date()
    res.send("Current server time is" + time)
    });
app.post('/testPostReq', (req, res) => {
    res.send("Server can handle POST requests")
    });

app.post('/recordTemp', (req, res) => {
    const sensorReading = req.query.temp || 0
    res.send("Temp is " + sensorReading)
    });


//Deploying the listener
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Express server listening on port
${port}`));
