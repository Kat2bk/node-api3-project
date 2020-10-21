module.exports = () => {
    return (req, res, next) => {
            const requestTime = new Date();
            console.log(`${req.method} request to ${req.path} at ${requestTime.toISOString().slice(0, 10)}`)
            next();
    }
}