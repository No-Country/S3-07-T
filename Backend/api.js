const express=require ("express")
const router=express.Router()

router.get("/prueba",async(req,res,next)=>{
    const prueba="prueba conexion"
    console.log(prueba)
})
module.exports=router
