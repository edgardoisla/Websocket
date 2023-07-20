import express from 'express';
import {Server} from 'socket.io';
import handlebars from 'express-handlebars';

const app= express();

app.use(express.json());

app.use(express.urlencoded({ extended: true}))

app.engine('handlebars', handlebars.engine());

app.set('views','./views');                                         //Seteo las vistas

app.set('view engine','handlebars');                               // Seteo el motor, en este caso es handlebars

app.use(express.static('./public'))

app.get('/', (req, res) => {
    
    res.render('index', {nombre: 'Edgardo'})
})

app.get('/realTimeProducts', (req, res) => {
    
    res.render('realTimeProducts', {products: 'productos'})
})

const appServer = app.listen(8080, () => console.log('listening on port 8080'));

const socketServer = new Server(appServer);

socketServer.on('connection',(socket) => {
    console.log(socket)
})