import { Router } from 'express'
import publicationController from '../controllers/publication.controller'

const router = Router()
const {
  addPublication,
  listPublications,
  getPublicationById,
  getPublicationByIdAllComments,
  updatePublication,
  removePublication,
  likePublication,
  addCategoryToPublication,
} = publicationController

router.post('/publication', addPublication)

router.get('/publication', listPublications)

router.get('/publication/:id', getPublicationById)

router.get('/publication_all_comments/:id', getPublicationByIdAllComments)

router.put('/publication/:id', updatePublication)

router.delete('/publication/:id', removePublication)

router.patch('/publication/:id', likePublication)

router.patch('/publication_add_category', addCategoryToPublication)

export default router
