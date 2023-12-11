      const express = require('express');
      const { port } = require('./config/serverconfig');
      const app = express();
      const bodyParser = require("body-parser");
      const ApiRoutes = require('./routes/index.js');
      const connect = require('./config/database');

      startserver = async () => {
      
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));

      app.use('/api', ApiRoutes);
    
      app.listen(port, async () => {
      console.log('Server Started at ' + port);
      await connect();
      console.log('Connected to database');
      });
      };
      startserver();

