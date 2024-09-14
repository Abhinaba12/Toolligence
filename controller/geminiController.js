const dotenv = require("dotenv");
dotenv.config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


exports.summaryController = async (req, res) => {
    try {
        const { text } = req.body
        const prompt = `Summarize this\n${text}`;

        const result = await model.generateContent(prompt);
        const data = result.response.text();
        console.log(data)
        if (data) {

            return res.status(200).json(data)
        }

    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message: err.message

        })
    }
}

exports.paragraphController = async (req, res) => {
    try {
        const { text } = req.body
        const prompt = `Grenerate a detailed paragraph on the words\n${text}`;

        const result = await model.generateContent(prompt);
        const data = result.response.text();
        console.log(data)
        if (data) {

            return res.status(200).json(data)
        }

    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message: err.message

        })
    }
}

exports.chatController = async (req, res) => {
    try {
        const { text } = req.body
        const prompt = `Answer all my questions, similar to how AI would answer. Like me: 'whats your name'. AI:'my name is AI'. So always add "AI:" before answersing.\n${text}`;

        const result = await model.generateContent(prompt);
        const data = result.response.text();
        console.log(data)
        if (data) {

            return res.status(200).json(data)
        }

    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message: err.message

        })
    }
}

exports.jsController = async (req, res) => {
    try {
        const { text } = req.body
        const prompt = `Translate this english into js code\n${text}`;

        const result = await model.generateContent(prompt);
        const data = result.response.text();
        console.log(data)
        if (data) {

            return res.status(200).json(data)
        }

    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message: err.message

        })
    }
}