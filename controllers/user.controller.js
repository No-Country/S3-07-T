import { ModulesOption } from "@babel/preset-env/lib/options";
import express from "express";
import User from "../models/user"
  
const searchxId=async (req,res,next)=>{
const id=req.params.id
const buscado=await User.findById(id)
if(buscado){
  res.status(200).json({
    buscado
  })
}else 
res.status(204).json({
  msg:"no se encontro el usuario"
})
}

module.exports=({
  searchxId
})