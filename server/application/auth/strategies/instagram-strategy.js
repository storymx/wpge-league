const passport = require('passport')
const InstagramStrategy = require('passport-instagram')
const keys = require('./auht-keys')
const mongoose = require('mongoose')
const User = require('../../api/models/user')
const UserType = require('../../api/models/usertype')

passport.serializeUser((user, done) => {
    console.log('serializing Instagram user: ',user)
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    console.log('deserializing Instagram user: id -', id)
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        const user = await User.findById({_id:id})
        if(!user) {
            done(null, null)
        } else {
            done(null, user)
        }
    }else{
        const user = await User.findOne({facebookId:id})
        if(user) {
            done(null, user)
        } else { 
            done(null, null)
        }
    }
})

passport.use(new InstagramStrategy({
        clientID: keys.instagram.clientID,
        clientSecret: keys.instagram.clientSecret,
        callbackURL: keys.instagram.callbackURL
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log("Passport Profile: ",profile)

        const currentUser = await User.findOne({instagramId: profile.id})
        console.log('currentUser')
        if(currentUser) {
            done(null, currentUser)
        } else {
            const newUser = await new User({
                googleId: '',
                facebookId: '',
                instagramId: profile.id,
                username:profile.username,
                password:'resetPassword',
                email:'username@example.com',
                country:'5ef3f24a1fd64321e85e4a70',
                userType:'5be1242c8d212d3b964f0bb9',
                signedUpWith: 'instagram',
                createdBy:'5c9ab4feadc7ad6c67e8b03d',
            })

            await newUser.save()
            console.log('new user has been created using Facebook Authentication: ', newUser)
            done(null, newUser)
        }
    })
)