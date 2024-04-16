const mongoose=require('mongoose');
const {Schema}=mongoose

const userSchema=new Schema({
    fullName:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    email:{
        type:String
      },
    message:{
        type:String
      },
    emailSubject:{
        type:String
      },   

})
module.exports=mongoose.model("user",userSchema)