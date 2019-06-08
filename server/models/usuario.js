const mongoose=require ("mongoose");
const bcript=require('bcrypt-nodejs');
const Schema=mongoose.Schema;
mongoose.set('useCreateIndex', true);
const Usuarios= new Schema({
    email:{type:String,unique:true,lowercase:true},
    pass:{type:String,select:false},
    nombre:String,
    paterno:String,
    materno:String,
    edad:Number,
    signupDate:{type:Date,default:Date.now()}
},{
    versionKey: false // You should be aware of the outcome after set to false
});

Usuarios.pre('save',function(next){
    var user=this;
    if(!user.isModified('pass')) return next();
    bcript.hash(user.pass,null, null,(err,hash)=>{
        if(err) return next(err);
        user.password=hash;
        next();
    }); 
});
module.exports=mongoose.model('Usuarios',Usuarios);