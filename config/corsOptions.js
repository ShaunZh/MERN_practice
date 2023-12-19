const allowedOrigins = require('./allowedOrigin')

const corsOptions = {
    origin: (origin, callback) => {
        // !origin: some of api test tools they havn't origin 
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },

    credentials: true,
    optionSuccessStatus: 200
}

module.exports = corsOptions