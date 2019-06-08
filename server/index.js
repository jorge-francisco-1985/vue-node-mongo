const express=require('express');
const session = require('express-session');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
// mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://jorge:1234@localhost:27017/vue',{
    useNewUrlParser:true
})
.then(db=>console.log("Conectado a mongodb"))
.catch(err=>console.error(err));

const app = express();

//middleWare
app.use(bodyParser.json());
app.use(session({
    secret:'Esto es secreto',
    resave:true,
    saveUninitialized:true

}));
app.get('/',(req,res)=>{
    req.session.cuenta=req.session.cuenta?req.session.cuenta+1:1;
    res.send(`${req.session.cuenta}`)
});
app.use(cors());

///////// start Rutas
const posts =require('./routes/api/posts');
app.use('/api/posts',posts);
app.use('/api/usuarios',require('./routes/api/usuarios'));
////////////// end Rutas

const port =process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));
