const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  image: { type: String, require: true },
  user: { type: Schema.type.ObjectId, ref: "User" },
  teamLeader:{type:String,require:true},
  title:{type:String,require:true},
  video:{type:String,require:true},
  publicateAt:{type:Date,require:true}
});

module.exports=mongoose.model("Project",projectShema)


//queda la consulta por los members
