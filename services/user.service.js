


const register = (User) => async (user) =>{
   const _user= new User(user);
   try {
       const result = await user.save();
       if(result){
           return({
               status:'success',
               message:'user saved successfully',
               payload: result
           });
       }    
   } catch (error) {
    return({
        status:'fail',
        message:'user fail to register',
        payload: error
    });
   }
};


const authenticate = User => async (email,password)=>{

}

const getUserById  = User => async (id)=>{

}

const updateUser = User =>(id,newUser)=>{

}

const deleteUser = User => async (id) => {

}





module.exports  = (User)=>{
    return ({
        register:register(User),
        authenticate: authenticate(User),
        getUserById : getUserById(User),
        updateUser: updateUser(User),
        deleteUser : deleteUser(User)

    });
};