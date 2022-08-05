const express=require ("express")
const router=express.Router()

router.get("/prueba1",async(req,res,next)=>{
    const prueba1="prueba conexion"
    console.log(prueba1)
})
module.exports=router
