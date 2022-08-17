import mongoose from 'mongoose'

const { Schema } = mongoose

const publicationSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  countrySide: { type: String, required: true },
  type: { type: String, required: true },
  likes: {
    type: Number,
    default: 0,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'category',
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comment',
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
})

const Publication = mongoose.model('publication', publicationSchema)

export default Publication
