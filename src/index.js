const express = require('express');
const app = express();
const morgan = require('morgan');

//asignar puerto
app.set('port',2918);
app.set('json spaces',2);

app.use(morgan('dev')); //dev o combined

//rutas
app.use('/api',require('./routes/rutas'));

app.listen(3000);

//mensaje de encendido
console.log('JSON on');