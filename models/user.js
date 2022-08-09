import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, require: false },
  lastName: { type: String, require: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  roles: [{ type: Schema.Types.ObjectId, ref: "role" }],
  avatar: { type: String, required: false },
  description: { type: String, required: false },
  // projects:{type:Schema.Types.ObjectId, ref:"Project"},
  // idProject:{type:String,require:true},
  // role:Schema.Types.ObjectId,ref:"Role"
});

userSchema.statics.passwordCode = async (password) => {
  const encryp = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, encryp);
};

userSchema.statics.comparePassword = async (password, passwordRecep) => {
  return await bcrypt.compare(password.passwordRecep);
};

const User = mongoose.model("user", userSchema);

export default User;
