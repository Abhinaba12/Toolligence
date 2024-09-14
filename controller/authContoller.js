const userModel = require("../models/userModel")
const errorResponse = require("../utils/errorResponse")


// jwt token
exports.sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken(res)
    res.status(statusCode).json({
        user,
        success: true,
        token,
    })
}

// register
exports.registerController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body

        //existing user
        const existingEmail = await userModel.findOne({ email })
        if (existingEmail) {
            return next(new errorResponse("email is already registered", 500))
        }
        const user = await userModel.create({ username, email, password })
        this.sendToken(user, 201, res)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// login
exports.loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body

        // validation
        if (!email || !password) {
            return next(new errorResponse("please provide email or password"))
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return next(new errorResponse("invalid credential", 401))
        }
        const isMatch = await user.matchPassword(password)
        if (!isMatch) {
            return next(new errorResponse("invalid credential", 401))
        }
        this.sendToken(user, 200, res)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// logout
exports.logoutController = async (req, res) => {
    res.clearCookie("refreshToken")
    return res.status(200).json({
        success: true,
        message: "logout successfully"
    })
}