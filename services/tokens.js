const {insertToken} = require("../data/tokens");

function createToken(){
    return insertToken()
}

module.exports = {createToken}