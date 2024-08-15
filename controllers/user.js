import User from "../models/user.js";

export const getAllUsers = async(req,res)=>{
 
    // console.log(req.query);
    // const keyword = req.query.keyword;
    // console.log(keyword);

    const users = await User.find({});

    res.json({
        success:true,
        users:users
    })
}


export const registerNewUser = async(req,res)=>{
    const {name,email,password} = await req.body;
   
     await User.create({
      name,
      email,
      password
      })
   
       res.status(201).cookie("token","iamin").json({
           success:true,
          message: "Signed Up Successfully"
       })
       
   }

   export const specialFunc = (req,res)=>{
    res.json({
        Success: true,
        message:"Done"
    })
}

export const getUserById = async(req,res)=>{
    
    const id = req.params.id;
    console.log(id);

    const user = await User.findById(id);
    console.log(user);
    res.json({
        success:true,
        user
    })
}
export const deleteUserById = async(req,res)=>{
    
    // const id = req.params.id;
    // console.log(id);

    // const user = await User.findById(id);
    // console.log(user);
    res.json({
        success:true,
        message:"Deleted Successfully"
    })
}
export const updateUserById = async(req,res)=>{
    
    // const id = req.params.id;
    // console.log(id);

    // const user = await User.findById(id);
    // console.log(user);
    res.json({
        success:true,
        message:"Updated Successfully"
    })
}



