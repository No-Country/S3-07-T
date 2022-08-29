import { Router } from 'express'

import teamController from '../controllers/team.controller'

const router = Router()

const {
  addTeam,
  listTeams,
  getTeamById,
  updateTeam,
  activateTeam,
  deactivateTeam,
  removeTeam,
} = teamController

router.get('/team', listTeams)

router.post('/team', addTeam)

router.get('/team/:id', getTeamById)

router.put('/team/:id', updateTeam)

router.patch('/team_activate/:id', activateTeam)

router.patch('/team_deactivate/:id', deactivateTeam)

router.delete('/team/:id', removeTeam)

export default router
