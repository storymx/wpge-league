const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// import passport from 'passport';
const keys = require('./server/keys/keys.js');

//configure setup for passport credentials if required

//app start
const app = express();

//Database Connection
mongoose.connect(keys.mongodbAtlas.url, {useNewUrlParser: true, useUnifiedTopology: true});

//Database Start
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error'));
database.once('open', () => {
    mongoose.set('useFindAndModify', false);
    console.log('Sucessfully Connected to Valhalla ProTeam MongoDB Server.')
})

// APP CONFIGURATION
app.use(morgan('dev'))
    .use(cors());

app.use('/images', express.static('./uploads'));
app.use('/replays', express.static('./replays'))
    .use(bodyParser.json({limit: '50mb'}))
    .use(bodyParser.urlencoded({limit: '50mb', extended: true}))
    //INIT PASSPORT
    // .use(passport.initialize())
    // .use(passport.session(
    // .use('/auth', authRoutes)
    // .use('/api', apiRoutes)
//CONFIG PRODUCTION O DEV
if (process.env.NODE_ENV === 'production'){ //Necesita ir antes del ultimo app.use con el next
    //Folder statico
    console.log(process.env.NODE_ENV);
    app.use(express.static(__dirname + '/public/'));
    //Manejar SinglePageApplication
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html')); //Redirecciona  index.js
}
app.use((req, res, next) => {
});


//SERVER APPLICATION
const server = app.listen(process.env.PORT || 3000, () =>{
    const port = server.address().port;
    console.log('WPGE-League Application up and running in PORT: ', port);
});

