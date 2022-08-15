import mongoose from 'mongoose'

const { Schema } = mongoose

const roleSchema = new Schema({
  name: { type: String, require: true },
})

const Role = mongoose.model('role', roleSchema)

export default Role
