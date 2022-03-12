const express = require('express');
const app = express();
const morgan = require('morgan');

//asignar puerto
app.set('port',3000)
app.set('json spaces',2);

app.use(morgan('dev')); //dev o combined

//rutas
app.use('/',require('./routes/rutas'));

app.listen(3000);


console.log('JSON on');