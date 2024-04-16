const express = require("express");
const app = express();
const User = require("../models/user");
app.use(express.json());
const userService = require("../services/user-service");
const User= require("../model/user")
const {
    createOneUser,
    deleteOneUser,
    retrieveOneUser,
    updateOneUser,
    retrieveManyUser,
  } = userService;



  const createUser=[
    async (req, res, next) =>{
      try{
        const {fullName,emailSubject,message,email,phoneNumber} = req.body;
        if(req.body){
          const result=await createOneUser({fullName,emailSubject,message,email,phoneNumber});
          res.status(200).json({data:result,message:"email sent successfully"});
        }
        else{
          res.status(400).json({message:"please provide all the details"});
        }
      }
      catch(error){
        res.status(500).json({message:error.message});
      }
    }
  ]
