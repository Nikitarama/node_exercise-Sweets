function message(req, res, next) {
    console.log("This message is coming from the middleware");
    next();
}

module.exports = {message};