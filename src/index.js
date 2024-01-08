import express from 'express'
import handlebars from 'express-handlebars'
import routerReceive from './routers/receive.route.js'
import { __dirname } from './utils.js'
import cors from 'cors'
import { PORT } from './config.js'
import path from 'path'







const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine("handlebars", handlebars.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts")
}));
app.set('views',  __dirname +'/views')
app.set('view engine', 'handlebars')

app.use(express.static( __dirname+'/public'))

app.use('/', routerReceive)


app.listen(PORT, ()=>console.log('Servidor corriendo.....'))

