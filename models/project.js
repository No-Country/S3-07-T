import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const { Schema } = mongoose

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.ObjectId,
      ref: 'user',
    },
    team: {
      type: Schema.ObjectId,
      ref: 'team',
    },
    teamLeader: {
      type: Schema.ObjectId,
      required: true,
    },
    categories: [
      {
        type: Schema.ObjectId,
        ref: 'category',
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
)

projectSchema.plugin(mongoosePaginate)

const Project = mongoose.model('project', projectSchema)

export default Project
