const { default: User } = require("../models/user")

export const verifyEmail=async(req,res,next)=>{
    const search=await User.findOne({email:req.body.email})
    if(search){
        res.status(204).json({
           msg:"email ya existe"
        })
    }else
      next()
}