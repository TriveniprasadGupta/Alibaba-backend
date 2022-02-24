const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    role:{type:String, required:false, default:"customer"},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    companyName:{type:String, required:true},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    telNo:{type:String, required:true},
});

userSchema.pre("save",function(next){
    if(! this.isModified("password")) return next();

    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    next();
});

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("user", userSchema);