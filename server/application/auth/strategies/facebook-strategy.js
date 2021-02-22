const passport = require('passport')
const FacebookStrategy = require('passport-facebook')
const keys = require('./auht-keys')
const mongoose = require('mongoose')
const User = require('../../api/models/user')
const UserType = require('../../api/models/usertype')

passport.serializeUser((user, done)=>{
    if (user.id.match(/^[0-9a-fA-F]{24}$/)) {
        // Yes, it's a valid ObjectId, proceed with `findById` call.
        done(null, user.id)
    }
})
passport.deserializeUser(async (id, done)=>{
    console.log('deserializing Facebook user: id - ',id)
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        // Yes, it's a valid ObjectId, proceed with `findById` call.
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

passport.use( new FacebookStrategy ({
        clientID: keys.facebook.clientID,
        clientSecret: keys.facebook.clientSecret,
        callbackURL: keys.facebook.callbackURL
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log("Passport Profile: ",profile)

        const currentUser = await User.findOne({facebookId: profile.id})
        if (currentUser) {
            console.log("CURRENT USER:  ", currentUser)
            done(null, currentUser)
        } else {
            //THIS STRATEGY DO NOT LOOKUP FOR EMAIL, SINCE IS NOT GMAIL
            console.log('do not exists and will create a new one, and log in the new user')
            const newUser = new User({
                googleId: '',
                facebookId: profile.id,
                instagramId: '',
                username: profile.displayName,
                password:'resetPassword',
                email:'username@example.com',
                country:'5ef3f24a1fd64321e85e4a70',
                userType:'5be1242c8d212d3b964f0bb9',
                signedUpWith: 'facebook',
                createdBy:'5c9ab4feadc7ad6c67e8b03d',
            })

            await newUser.save()
            console.log('new user has been created using Facebook Authentication: ', newUser)
            done(null, newUser)
        }
    }
))