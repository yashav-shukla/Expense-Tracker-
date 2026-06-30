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
            category,
        
            userId:
            req.user.userId
        
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
        await Expense.findAll({

            where: {

                userId:
                req.user.userId

            }

        });

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

        const expense =
        await Expense.findOne({

            where: {

                id: expenseId,

                userId:
                req.user.userId

            }

        });

        if (!expense) {

            return res.status(404).json({

                success: false,

                message:
                'Expense not found'

            });

        }

        await Expense.destroy({

            where: {
        
                id: expenseId,
        
                userId:
                req.user.userId
        
            }
        
        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false

        });

    }

};