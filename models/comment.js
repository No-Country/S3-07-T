<<<<<<< HEAD
import mongoose from "mongoose";

const { Schema } = mongoose;
=======
import mongoose from 'mongoose'

const { Schema } = mongoose
>>>>>>> development

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  author: {
    type: Schema.ObjectId,
<<<<<<< HEAD
    ref: "user",
  },
});

const Comment = mongoose.model("comment", commentSchema);

export default Comment;
=======
    ref: 'user',
  },
})

const Comment = mongoose.model('comment', commentSchema)

export default Comment
>>>>>>> development
