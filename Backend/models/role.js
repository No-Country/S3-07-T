const mongoose=require("mongoose")
const {Schema}=mongoose

const roleSchema=new Schema({
    typeRole:{type:String, require:true}
})

module.export=Schema.model("Role",roleSchema)