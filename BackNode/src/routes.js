//const {router, Router} = require ('express');
import {Router} from 'express';
import User from './app/models/User';
import UserController from './app/controller/UserController'

const routes = new Router();

routes.post('/user', UserController.store)

/*routes.get('/', async (req, res) => {
    await User.create({
        nome: 'Cesar',
        email: 'cesar@celke.com.br',
        senha: '12345'
    }, function(err, small){
        if(err)return res.status(400).json({error: "Erro: Usuário não foi cadastrado"});

        return res.status(200).json({error: "Usuário cadastrado com sucesso!"});
    });
})*/

//module.exports = routes;
export default routes;