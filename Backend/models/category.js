const mongoose=require("mongoose")
const {Schema}=mongoose


const categorySchema=new Schema({
    name:{type:String, require:true}
})

modules.exports=mongoose.model("Category",categorySchema)