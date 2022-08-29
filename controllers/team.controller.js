import Team from '../models/team'

const addTeam = async (req, res) => {
  try {
    const team = await Team.create({
      cohortType: req.body.cohortType,
      cohortNumber: req.body.cohortNumber,
      group: req.body.group,
      teamLeader: req.body.teamLeader,
      technologies: req.body.technologies,
      devs: req.body.devs,
    })
    res.status(201).json(team)
  } catch (e) {
    res.status(500).json({
      message: 'Error while adding team',
    })
  }
}
const listTeams = async (req, res) => {
  const { page, limit, team } = req.query
  let query = {}
  const options = {
    page: page ?? 1,
    limit: limit ?? 10,
  }
  const findAll = {
    isActive: true,
  }
  const findByTeam = {
    $or: [
      { cohortType: { $regex: team, $options: '-i' } },
      { cohortNumber: { $regex: team, $options: '-i' } },
      { group: { $regex: team, $options: '-i' } },
    ],
  }
  if (team) query = findByTeam
  else query = findAll

  try {
    const teams = await Team.paginate(query, options)
    res.status(200).json(teams)
  } catch (e) {
    res.status(500).json(e)
  }
}

const listAllTeams = async (req, res) => {
  const { page, limit, team } = req.query
  let query = {}
  const options = {
    page: page ?? 1,
    limit: limit ?? 10,
  }
  const findByTeam = {
    $or: [
      { cohortType: { $regex: team, $options: '-i' } },
      { cohortNumber: { $regex: team, $options: '-i' } },
      { group: { $regex: team, $options: '-i' } },
    ],
  }
  if (team) query = findByTeam

  try {
    const teams = await Team.paginate(query, options)
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

const activateTeam = async (req, res) => {
  try {
    await Team.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        isActive: true,
      },
    )
    res.status(200).json({
      msg: 'team activated',
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error while activating a team',
    })
  }
}

const deactivateTeam = async (req, res) => {
  try {
    await Team.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        isActive: false,
      },
    )
    res.status(200).json({
      msg: 'team deactivated',
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error while deactivating a team',
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
      message: 'Error while removing a team',
    })
  }
}

export default {
  addTeam,
  listTeams,
  listAllTeams,
  getTeamById,
  updateTeam,
  activateTeam,
  deactivateTeam,
  removeTeam,
}
