import { Router } from 'express'
import publicationController from '../controllers/publication.controller'

const router = Router()
const {
  addPublication,
  listPublications,
  getPublicationById,
  updatePublication,
  removePublication,
  likePublication,
} = publicationController

router.post('/publication', addPublication)

router.get('/publication', listPublications)

router.get('/publication/:id', getPublicationById)

router.put('/publication/:id', updatePublication)

router.delete('/publication/:id', removePublication)

router.patch('/publication/:id', likePublication)

module.exports = router
