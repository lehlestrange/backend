const express = require ("express") 
const app = express() 
const {verifyEmailOnDB, verifyPasswords, createUser} = require("./services/users")
const port = 6661 

app.use(express.json()) 


app.post("/api/auth/singup", async (req, res) => {

    const {password, passwordConfirmation, email} = req.body

    //verificar se o email recebido ja existe na BD
    const email_ok = await verifyEmailOnDB(email)

    //verificar se o password esta correto
    const password_ok = verifyPasswords(password, passwordConfirmation)

    if (!email_ok || !password_ok){ 
        return res.status(400).json(
            {
                message: "Os dados introduzidos não são válidos.",
	            errors: {
		        email: !email_ok ? "O endereço introduzido já está registado.": undefined,
		        passwordConfirmation: !password_ok ? "As passwords não coincidem.": undefined
                }
            }
        )
    }
    const user_id = await createUser({password, email})
})
/*POST /api/auth/signup
{
    "email": "teste@teste.com",
    "password": "A1b2C3d$",
    "passwordConfirmation": "A1b2C3d$"
}
{
	"message": "Os dados introduzidos não são válidos.",
	"errors": {
		"email": "O endereço introduzido já está registado.",
		"passwordConfirmation": "As passwords não coincidem."
	}
}

{ 
    "message": "Utilizador Criado com Sucesso!",
    "_id": "61db50c23dc51c6a5d88d4ff"
}\*/



app.post("/api/auth/login", (req, res) => {

const {email, pasword} = req.body
const token = createToken()
return res.status(200).jason({token:token})
})




//POST /api/auth/login

/*{ "message": "O utilizador não foi encontrado!" }
 { "message": "A password introduzida é inválida!" }
*/

//GET /api/user
app.get("/api/user", (req, res) => {

})
//GET /api/user/:id
