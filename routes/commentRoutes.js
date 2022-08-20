import { Router } from 'express'

import commentController from '../controllers/comment.controller'

const router = Router()

const {
  addComment,
  getCommentById,
  updateComment,
  removeComment,
  likeComment,
} = commentController

router.post('/comment', addComment)

router.get('/comment/:id', getCommentById)

router.put('/comment/:id', updateComment)

router.delete('/comment/:id', removeComment)

router.patch('/comment/:id', likeComment)

module.exports = router
