const express = require('express');
const router = express.Router();
const Controller = require("../controller/index")

const routers = [
  {
    path: '/',
    name: 'home',
    method: 'get',
    handle: (req,res,next) => res.send("ok")
  },
  {
    path: '/getRamdom',
    name: 'getRamdom',
    method: 'get',
    handle: Controller.getRamdom
  },
];

const configRouter = (app) => {
  routers.forEach(item => {
    app.use('/', router[item.method](item.path,
      (req, res, next) => {
        return item.handle(req, res, next, req.userData);
      }
    ))
  })
};
module.exports = configRouter;