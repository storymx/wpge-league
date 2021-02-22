const passport = require('passport')
const jwt = require('jsonwebtoken')
const serverResponse = require('../../server-responses/server-responses')
const User = require('../../api/models/user')
const Player = require('../../api/models/player')

const instagramAuthController = {
    instagram: passport.authenticate('instagram'),
    instagramCallBack: async (req, res) => {
        console.log('Instagram Callback req.user: ',req.user)

        const jwtPayload = {
            sessionId: req.user._id,
            logginType: 'instagram',
            userData: req.user,
            facebookLinked: req.user.instagramId == '' || req.user.instagramId == null ? false : true,
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
    instagramLogOut: async (req, res) => {
        req.logout()
        res.redirect('/')
    },
    verifyLogin: passport.authenticate('instagram')
}

module.exports = instagramAuthController