const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
//Route Files
const bootcamps = require('./routes/bootcamps');

//ENV File
dotenv.config({path:'./config/config.env'});


const app = express();


//Dev loggine middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/bootcamps',bootcamps);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server in ${process.env.NODE_ENV} mode listening on port ${PORT}.`);
});