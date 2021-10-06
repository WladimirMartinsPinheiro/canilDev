import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

// importa a rota

import mainRoutes from './routes/index';


dotenv.config();


//servidor

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());


// configurar a pasta public  ou pasta estatica

server.use(express.static(path.join(__dirname, '../public')));


//Rotas 

server.use(mainRoutes);

// pagina nao encontrada

server.use((req, res)=> {
    res.send('Página não encontrada!');
});

//colocar o servidor para rodar

server.listen(process.env.PORT);

