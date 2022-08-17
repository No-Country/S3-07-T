import mongoose from 'mongoose'

const { Schema } = mongoose

const publicationSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  countrySide: { type: String, required: true },
  type: { type: String, required: true },
  categories: [
    {
      type: Schema.ObjectId,
      ref: 'category',
    },
  ],
  comments: [
    {
      type: Schema.ObjectId,
      ref: 'comment',
    },
  ],
  author: {
    type: Schema.ObjectId,
    ref: 'user',
  },
})

const Publication = mongoose.model('publication', publicationSchema)

export default Publication
