var userService = require('./userService');

var createUserControllerFn = async(req, res) =>{
    var status = await userService.createUserDBService(req.body);
    if(status) res.send({"status": true, "message": "User Create Successfully!"});
    else res.send({"status": false, "message": "Error creating user"});
}

var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

module.exports = {createUserControllerFn, loginUserControllerFn};