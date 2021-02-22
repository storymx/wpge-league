module.exports = {
    google: {
        clientID: '863039149905-gkkh1rvpmpsus17gp0uor0rukkvvs4d1.apps.googleusercontent.com',
        clientSecret:'NNC2_-dED95yA4d9rLQChJyU',
        callbackURL: 'https://www.valhalla-team.com/auth/google/redirect',
    },
    instagram: {
        clientID: '3812de948fcc4029b5343d5f5d17b25a',
        clientSecret: '7c4f281901a1410f923bed4d82dd5501',
        callbackURL: 'https://www.valhalla-team.com/auth/instagram/callback'
    },
    facebook: {
        clientID: '322792224972589',
        clientSecret: 'f3540ea4dc1cf2b814b8c352f5c6acab',
        callbackURL: 'https://www.valhalla-team.com/auth/facebook/callback'
    },
    mongoose: {
        url: 'mongodb://story_mx:1a2a3a4a5a@ds029715.mlab.com:29715/valhalla-team'
    },
    mongodbAtlas: {
        url: "mongodb+srv://story_mx:1a2a3a4a5a@valhalla-team.ubwtz.mongodb.net/valhalla-team?retryWrites=true&w=majority",
    },
    session:{
        cookieKey: 'valhallateam'
    }
}