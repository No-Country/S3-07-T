const { Schema } = require('mongoose')

const comentsSchema = new Schema({
  content: {
    type: Schema.Types.String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

const Coments = mongoose.model('coments', comentsSchema)

module.exports = Coments
