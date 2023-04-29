var userModel = require('./userModel');

module.exports.createUserDBService = (userDetails) => {
    console.log("Received request data:", userDetails); 
    return new Promise(function myFn(resolve, reject) {

        var userModelData = new userModel();

        userModelData.name = userDetails.name;
        userModelData.email = userDetails.email;
        userModelData.password = userDetails.password;

        userModelData.save().then(() => {
            resolve(true);
            console.log(`Data inserted successfully with Username: ${userDetails.name}`)
        }).catch((error) => {
            console.error(error);
            reject(false);
        });
    });
}

module.exports.loginuserDBService = async (userDetails) => {
    try {
      const result = await userModel.findOne({ email: userDetails.email });
      if (result) {
        if (result.password === userDetails.password) {
          return { status: true, msg: "User validated successfully" };
        } else {
          throw { status: false, msg: "User validation failed" };
        }
      } else {
        throw { status: false, msg: "User not found" };
      }
    } catch (error) {
      throw { status: false, msg: error };
    }
  };
  
