const express = require('express');

const app = express();

//CORS------------------

const bodyparser = require('body-parser');
app.use(bodyparser.json());//usar siempre el body parser para cada peticion http
    
//importar las rutas
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//iniciar el servidor
app.listen(3000);



//Middlewares : función que se ejecuta cuando las rutas son disparadas, por ejemplo para validar la auth (cuando el usuario esta logeado)
// app.use('/post', ()=> {
    //     console.log('mi middleware');
    // });    