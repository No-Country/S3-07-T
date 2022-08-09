import  User from '../models/user'
import jwt from 'jsonwebtoken'

const Auth = async (req, res, next) => {
    try {
        const strToken = req.headers.authorization

        if (!strToken) return res.status(403).json({msg:'Debes iniciar sesión!'})
        const token = strToken.includes(' ') ? strToken.split(' ')[1] : strToken
        const key = jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({ _id: key.id })
        if(!user) return res.status(401).json('Acceso denegado!')
        req.user = user
        next()

    } catch (error) {
        res.status(500).json({error})
    }
}

export default Auth