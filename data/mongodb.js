const {MongoClient} = require ("mongodb");

//Connectio URL - padrao do mongo
const url = "mongodb://localhost:27017";

// Database Name
const defaultDbName = "teste";

let client = null;

async function GetMongoClient() {
    if (!client) {
        try {
            client = await MongoClient.connect(url);
        } catch (err) {
            console.error("Erro ao conectar ao MongoDB", err);
        }
    }
    return client;
}

async function CloseConnection() {
    const client = await GetMongoClient()
    console.log(client)
    return await client.close();
}

async function GetCollection(collectionName) {
    const cli = await GetMongoClient();
    const db = cli.db(defaultDbName);
    return db.collection(collectionName);
}

module.exports = {CloseConnection, GetCollection}