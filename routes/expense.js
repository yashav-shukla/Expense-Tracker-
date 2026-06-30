const express = require('express');

const router = express.Router();

const expenseController =
require('../controllers/expense');

const auth =
require('../middleware/auth');

router.post(
    '/add-expense',
    auth,
    expenseController.addExpense
);

router.get(
    '/get-expenses',
    auth,
    expenseController.getExpenses
);

router.delete(
    '/delete-expense/:id',
    auth,
    expenseController.deleteExpense
);

module.exports = router;