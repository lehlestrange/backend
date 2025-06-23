const express = require ("express") //busca biblioteca express
const app = express() // utilizando express
const port = 6661 // porta

app.use(express.json()) //middleware, para usar body

//body nao pode ser usado como GET
app.post("/user", (req, res) => {
    const body = req.body
    res.json(body).status(201)
})

app.get ('/', (req, res) => {
    res.send("heyhey")
})

/*app.listen (6661, () => {
    console.log ("Servidor iniciado")
})

//colocar : que vai passar a ser a variavel
app.get("/:name"), (req, res) => {
    const name = req.params.name 
    res.send (`Ola ${name}`)
}

app.get("/:soma/:x/:y"), (req, res) => {
    const {x, y} = req.params
    res.send (Resultado: `${Number(x) + Number(y)}`)

app.get("/:subtrair"), (req, res) => {
    const {x, y} = req.query
    res.send (Resultado: `${Number(x) - Number(y)}`)
}*/

app.listen(port) // sempre utilizar 

/*function calcularAreaDodecaedro(aresta) {
  if (aresta < 0) {
    return "Por favor insira um valor positivo.";
  }

  const fator = 3 * Math.sqrt(25 + 10 * Math.sqrt(5));
  const area = fator * Math.pow(aresta, 2);
  return Math.round(area);
}
