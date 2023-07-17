
const signupValidate = (req, res, next) => {
    const { name, username, email, password, bio} = req.body

    if(req.body && name && username && email && password && bio) {
        next()
    }
    else{
        res.status(400).send("All inputs are required.")
    }
}

module.exports = signupValidate