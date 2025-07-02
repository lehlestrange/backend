const {GetCollection} = require("./mongodb")

const USER_COLLECTION = "users"

async function findByEmail(email) {
    const col = await GetCollection(USER_COLLECTION)
    const result = await col.findOnde({email: email})
    return result
    
}

async function insertUser(user_data){
    const col = await GetCollection(USER_COLLECTION)
    const result = await col.insertUserOne(user_data)
}

module.exports = {findByEmail, insertUser}