

async function verifyEmailOnDB(email) {
    if(result === null){
        return true
    }   return false
}

function verifyPasswords (password, passwordConfirmation) {
    if(password === passwordConfirmation){
        return true
    }   return false
}

async function createUser(user_data) {
    const result = await insertUser(user_data)
    return result   
}

module.exports = {verifyEmailOnDB, verifyPasswords, createUser}