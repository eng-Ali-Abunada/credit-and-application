// 3rd Party Modules
const express = require('express');
var morgan = require('morgan')
const cors = require('cors');

require('dotenv/config');
const bodyParser = require('body-parser');

// Local Modules
const myRoute = require('./routes/myRoute.js');
const authRoutes = require('./routes/auth/authRoute');
  
// Server Initialization
const app = express();
const PORT = process.env.PORT;
  
// Middlewares
app.use(express.json());
// setup the logger
app.use(morgan('tiny'))

  
// Routes will be written here
app.use('/route', myRoute); 
app.use('/auth', authRoutes);
  
// Server Listen Along with Database 
// connection(in case of data persistence)
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occured, server can't start", error);
    }
);