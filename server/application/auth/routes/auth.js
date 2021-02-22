const router = require('express').Router()
const passport = require('passport')
const instagramAuthController = require('../controlllers/instagram.auth.controller')
const facebookAuthController = require('../controlllers/facebook.auth.controller')

router.route('/instagram').get(instagramAuthController.instagram)
router.route('/instagram/callback').get(passport.authenticate('instagram',{failureRedirect:"/"}),
                                        instagramAuthController.instagramCallBack)
router.route('/instagram/logout').get(instagramAuthController.instagramLogOut)

router.route('/facebook').get(facebookAuthController.facebook)
router.route('/facebook/callback').get(passport.authenticate('facebook',{failureRedirect:"/"}), facebookAuthController.facebookCallBack)
router.route('/facebook/logout').get(facebookAuthController.facebookLogOut)

module.exports = router