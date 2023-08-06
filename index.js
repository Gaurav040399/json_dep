const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const PORT = 8080;

server.use(middleware)
server.use(router)
console.log("Gaurav")
server.listen(PORT,()=>{
    console.log("Server running on port 8080" )
})

