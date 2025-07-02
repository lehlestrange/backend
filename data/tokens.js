const { ObjectId } = require("mongodb");

const tokens_db = [];

function insertToken() {
    const new_id = nem ObjectId()
    tokens_db.push({ _id: new_id })
    return new_id
}
module.exports = { insertToken }


