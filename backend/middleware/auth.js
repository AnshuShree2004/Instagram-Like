const JWT = require('jsonwebtoken')

const authValidate = (res, req, next) => {

    const token = (req.cookies && req.cookies.token) || null

    if(!token) {
        return res.status(400).send('Not Authorized')
    }
    

    try{
        const payload = JWT.verify(token, process.env.SECRET)

        req.user = { id: payload.id, username: payload.username }
    } 
    catch (e) {
        return res.status(400).send({
            msg: e.msg
        })
    }

    next()
}

module.exports = authValidate