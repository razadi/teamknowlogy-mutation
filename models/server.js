const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require('../models');

class Server {
  
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.path = '/mutation';

    this.conectarDB();

    this.middlewares();

    this.routes();
  }

  conectarDB() {
    db.sequelize.authenticate()
      .then(() => console.log('db connected...'))
      .catch(err => console.error(`Error: ${err}`));
  }


  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {        
    this.app.use(this.path, require('../routes/mutations.route'));
  }

  listen(){
    this.app.listen(this.port, () => console.log(`Server run in port ${this.port}`));
  }
};

module.exports = new Server();