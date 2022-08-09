import mongoose from "mongoose";

const { Schema } = mongoose;

const publicationSchema = new Schema({
  categories: Schema.Types.ObjectId,
  ref: "Category",
  contents: { type: String, require: true },
  image: { type: String, require: true },
  countrySide: { type: String, require: true },
  type: { type: String, require: true },
});

const Publication = mongoose.model("Publication", publicationSchema);

export default Publication;

//queda pendiente autor
//queda pendiente comments
//countrySide:{type:} typo??
