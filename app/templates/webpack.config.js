function config(env) {
   return require('./config/webpack.' + env + '.conf.js')(env);
}

module.exports = config(process.env.NODE_ENV);
