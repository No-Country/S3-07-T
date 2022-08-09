const mongoose=require("mongoose")
const {Schema}=mongoose

const roleSchema=new Schema({
    name:{type:String, require:true}
})

module.exports=mongoose.model("Role",roleSchema)