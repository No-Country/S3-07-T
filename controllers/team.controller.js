import Team from '../models/team'

const addTeam = async (req, res) => {
  try {
    const team = await Team.create({
      cohortType: req.body.cohortType,
      cohortNumber: req.body.cohortNumber,
      group: req.body.group,
      teamLeader: req.body.teamLeader,
      technologies: req.body.technologies,
    })
    res.status(201).json(team)
  } catch (e) {
    res.status(500).json({
      message: 'Error while adding team',
    })
  }
}
const listTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('technologies', 'name')
    res.status(200).json(teams)
  } catch (e) {
    res.status(500).json(e)
  }
}

const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate(
      'technologies',
      'name',
    )
    if (!team) {
      res.status(404).json({
        message: 'Team not found',
      })
    } else {
      res.status(200).json(team)
    }
  } catch (e) {
    res.status(500).json({
      message: 'Error while...',
    })
  }
}

const updateTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        cohortType: req.body.cohortType,
        cohortNumber: req.body.cohortNumber,
        group: req.body.group,
        teamLeader: req.body.teamLeader,
        technologies: req.body.technologies,
      },
    )
    res.status(205).json(team)
  } catch (e) {
    res.status(500).json({
      message: 'Error while updating a team',
    })
  }
}

const removeTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete({
      _id: req.params.id,
    })
    res.status(200).json(team)
  } catch (e) {
    res.status(500).json({
      message: 'Error while...',
    })
  }
}

export default {
  addTeam,
  listTeams,
  getTeamById,
  updateTeam,
  removeTeam,
}