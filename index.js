      const express = require('express');
      const { port } = require('./config/serverconfig');
      const app = express();
      const bodyParser = require("body-parser");
      const ApiRoutes = require('./routes/index.js');
      const cors = require('cors');
      const connect = require('./config/database');
    
      startserver = async () => {
      app.use(cors());
      app.use('/uploads', express.static('uploads'));
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

