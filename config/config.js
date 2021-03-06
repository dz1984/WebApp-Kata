var util = require('util'),
    path = require('path'),
    rootPath = path.normalize(__dirname + '/..');


module.exports = {
    appName: 'WebApp-Kata',

    development: {
        db: 'mongodb://localhost/books',
        port: process.env.PORT || '8080',
        ip: process.env.IP || '127.0.0.1',
        hostname: process.env.DNS || 'localhost',
        root: rootPath,
        viewPath: rootPath + '/app/views',
        staticPath: rootPath + '/public',
        viewEngine: 'jade',
        redirect: {
                successRedirect: '/',
                failureRedirect: '/login',
        },
        google: {
            secret: 'WebApp-Kata',
            returnURL: 'auth/google/return',
            realm: '/',
        },
        facebook: {
            clientID: '1440790956152522',
            clientSecret: 'd6c16805945b6841b71b99b0cd920b64'
        }
    },

    test: {
    },

    production:{
    }
};
