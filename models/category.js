import mongoose from 'mongoose'

const { Schema } = mongoose

const categorySchema = new Schema({
  name: { type: String, required: true },
  projects: [
    {
      type: Schema.ObjectId,
      ref: 'project',
    },
  ],
  publications: [
    {
      type: Schema.ObjectId,
      ref: 'publication',
    },
  ],
})

const Category = mongoose.model('category', categorySchema)

export default Category
