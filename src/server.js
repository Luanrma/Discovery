// Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Início da configuração do servidor
server
// Receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// Configurar arquivos estáticos (css, scripts, imagens) - neste caso estão na pasta "public"
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

// Porta:
.listen(5500)