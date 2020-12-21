import mongoose from 'mongoose';

class Database{
    constructor(){
        this.mongoDataBase();
    }
    mongoDataBase(){
        mongoose.connect('mongodb+srv://admin:admin@cluster0.2rgsi.mongodb.net/celke?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Conexão com MongoDb realizada com sucesso!");
        }).catch((erro) =>{
            console.log("Erro: Conexão com MongoDb não foi realizada com sucesso: " + erro);
        });
    }
}

export default new Database();