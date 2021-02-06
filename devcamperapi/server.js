const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');


//ENV File
dotenv.config({path:'./config/config.env'});

connectDB();

//Route Files
const bootcamps = require('./routes/bootcamps');

const app = express();

//Body Parse
app.use(express.json());


//Dev loggine middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps',bootcamps);

app.use(errorHandler);


const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server in ${process.env.NODE_ENV} mode listening on port ${PORT}.`.yellow.bold);
});


//Handle unhandled promise rejections

process.on('unhandledRejection',(err,promise) => {
    console.log(`Error: ${err.message}`.red);
    //close server
    server.close(() => process.exit(1));
});