const passport = require('passport')
const jwt = require('jsonwebtoken')
const serverResponse = require('../../server-responses/server-responses')
const User = require('../../api/models/user')
const Player = require('../../api/models/player')

const facebookAuthController = {
    facebook: passport.authenticate('facebook'),
    facebookCallBack: async (req, res) => {
        console.log('Facebook Callback req.user: ',req.user)

        const jwtPayload = {
            sessionId: req.user._id,
            logginType: 'facebook',
            userData: req.user,
            facebookLinked: req.user.facebookId == '' || req.user.facebookId == null ? false : true,
            instagramLinked: req.user.instagramId == '' || req.user.instagramId == null ? false : true,
        }

        const player = await Player.findOne({_id: req.user.player})
        if(player) {
            jwtPayload.playerId = player._id
            jwtPayload.clanId = player.clan
        }

        const token = await jwt.sign(jwtPayload, 'secretkey',{expiresIn: '6h'})
        const redirectURL = '/dashboard/'+req.user._id+'/?session='+token

        console.log("USER TOKEN: ", token)
        console.log("USER REDIRECTED TO: ", redirectURL)
        
        res.redirect(redirectURL)
    },
    facebookLogOut: async ( req, res) => {
        req.logout()
        res.redirect('/')
    },
    verifyLogin: passport.authenticate('facebook')
}

module.exports = facebookAuthController