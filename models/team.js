import mongoose from 'mongoose'

const { Schema } = mongoose

const teamSchema = new Schema({
  cohortType: {
    type: String,
    required: true,
  },
  cohortNumber: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  teamLeader: {
    type: Schema.ObjectId,
    ref: 'user',
    required: false,
  },
  technologies: [
    {
      type: Schema.ObjectId,
      ref: 'technology',
    },
  ],
  devs: [
    {
      type: Schema.ObjectId,
      ref: 'user',
    },
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
})

const Team = mongoose.model('team', teamSchema)

export default Team
