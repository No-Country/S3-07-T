import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({
  image: { type: String, require: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  teamLeader: { type: String, require: true },
  title: { type: String, require: true },
  video: { type: String, require: true },
  publicateAt: { type: Date, require: true },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;

//queda la consulta por los members