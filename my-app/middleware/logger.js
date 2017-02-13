exports.logger = function(req, res, next) {
    console.log('logger function exec');
    next();
};