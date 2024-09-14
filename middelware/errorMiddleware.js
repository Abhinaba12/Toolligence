const errorResponse = require("../utils/errorResponse")

const errorHandler = (err, req, res, next) => {
    let error = { ...err }
    error.message = err.message

    // mongoose cast error
    if (err.name === "castError") {
        const message = "Resources not found"
        error = new errorResponse(message, 404)
    }

    // duplicate key error
    if (err.code === 11000) {
        const message = "Dupliacte field value entered"
        error = new errorResponse(message, 400)
    }

    // mongoose validation
    if (err.code === "ValidationError") {
        const message = Object.values(err.errors).map(val => val.message) // replace val with message
        error = new errorResponse(message, 400)
        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message || "server error"
        })
    }
}

module.exports = errorHandler