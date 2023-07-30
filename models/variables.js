const mongoose = require("mongoose");

const variableSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "Title"
    },
    focus: {
        type: String,
        default: "Skill"
    },
    text: {
        type: String,
        default: "Speed up the skill equitipon process by finding unlimites courses that matches your Niche."
    },
    reveiws: {
        type: String,
        default: "4.5"
    },
    enrollments: {
        type: String,
        default: "30 M"
    },
    learners: {
        type: String,
        default: "2M+"
    },
    courses: {
        type: String,
        default: "1k"
    }
});

const VariableFinal = mongoose.model('Variable', variableSchema);

module.exports = VariableFinal;