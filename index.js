const http = require('http')
const port = 3000


const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.end('<h1> Home </h1>')
    }
    if(req.url == '/contato'){
        res.end('<h1> Contato </h1>')
    }
})

server.listen(port, () => {
    console.log(`http://localhost:` + port) /*ou ${port} */
    console.log(`Derrubar o servidor: crtl + c`)
})