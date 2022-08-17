import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const { Schema } = mongoose

const userSchema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  rolDes: { type: String, required: true },
  role: { type: Schema.ObjectId, ref: 'role' },
  avatar: { type: String, required: false },
  description: { type: String, required: false },
  status: { type: Boolean, default: true },
  projects: [{ type: Schema.ObjectId, ref: 'project' }],
  teams: [{ type: Schema.ObjectId, ref: 'team' }],
})

userSchema.statics.passwordCode = async (password) => {
  const encryp = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, encryp)
}

userSchema.statics.comparePassword = async (password, passwordRecep) => {
  return await bcrypt.compare(password, passwordRecep)
}

const User = mongoose.model('user', userSchema)

export default User
