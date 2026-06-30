const Expense = require('../models/expense');

exports.addExpense = async (req, res) => {

    try {

        const {
            amount,
            description,
            category
        } = req.body;

        const expense = await Expense.create({
            amount,
            description,
            category
        });

        res.status(201).json({
            success: true,
            expense
        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: 'Something went wrong'
        });

    }

};

exports.getExpenses = async (req, res) => {

    try {

        const expenses =
            await Expense.findAll();

        res.status(200).json(expenses);

    }

    catch (err) {

        console.log(err);

        res.status(500).json({
            success: false
        });

    }

};

exports.deleteExpense = async (req, res) => {

    try {

        const expenseId =
            req.params.id;

        await Expense.destroy({
            where: {
                id: expenseId
            }
        });

        res.status(200).json({
            success: true
        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({
            success: false
        });

    }

};