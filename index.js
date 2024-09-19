require('dotenv').config();
const os = require('os');
const port = process.env.VUE_APP_PORT;
const express = require('express');
const app = express();
const cors = require('cors');
const server = require("http").createServer(app);
const {connect} = require('./db/setting.js');
const configRouter = require('./routers/index');
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// app.use(cors({origin: ['http://localhost:8080', 'http://192.168.53.83:8080']}))
connect();
configRouter(app);
const networkInterfaces = os.networkInterfaces();
const ip = networkInterfaces.Ethernet?.find(item => item.family === "IPv4")?.address;
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message
  });
})
server.listen(port, () => console.log(`${ip}:${port}`));