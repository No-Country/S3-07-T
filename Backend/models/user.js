const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  avatar: { type: String, require: true },
  description: { type: String, require: true },
  projects:{type:Schema.Types.ObjectId, ref:"Project"},
  idProject:{type:String,require:true},
  role:Schema.Types.ObjectId,ref:"Role"
});


module.exports=mongoose.model("User",userSchema)

//consultar por role