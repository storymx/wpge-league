const serverResponses = require('./server-responses')

module.exports.verifyToken = (req, res, next) => {
    //get header value
    const bearerHeader = req.headers['authorization']

    if ( typeof bearerHeader !== 'undefined') {

        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        
        next()

    } else {
        serverResponses.statusForbidden("Token wasn't verified", res);
    }

}