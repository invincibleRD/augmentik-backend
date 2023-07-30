const Variable = require('../models/variables');

exports.getVariable = async (req, res) => {
    try {
        const data = await Variable.find();
        res.status(200).json({
            status: "Success",
            message: "data is saved in Database",
            data: data
        })
    } catch (error) {
        console.log(error)
    }

}

exports.getData = async (req, res) => {
    try {
        const variable = await Variable.findOne();
        if (!variable) {
            return res.status(404).send("No data found.");
        }
        res.render("variables", { variable });
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).send("Internal Server Error");
    }
};

exports.updateData = async (req, res) => {
    try {
        const newData = req.body;
        console.log(newData)
        const variable1 = await Variable.findOneAndUpdate({}, newData, {
            new: true,
            useFindAndModify: false,
        });
        if (!variable1) {
            return res.status(404).send("No data found.");
        }
        // res.status(200).json({
        //     status: "Success",
        //     message: "Data updated successfully",
        //     data: variable,
        // });
        const variable = await Variable.findOne();
        if (!variable) {
            return res.status(404).send("No data found.");
        }
        res.render("variables", { variable });
    } catch (err) {
        console.error("Error updating data:", err);
        res.status(500).send("Internal Server Error");
    }
};