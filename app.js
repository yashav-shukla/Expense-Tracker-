const express = require('express');
const cors = require('cors');
const path = require('path');
const User = require('./models/user');
const Expense = require('./models/expense');

const sequelize =
require('./util/database');


User.hasMany(Expense);

Expense.belongsTo(User);

const userRoutes =
require('./routes/user');

const expenseRoutes =
require('./routes/expense');

const app = express();

app.use(cors());

app.use(express.json());

app.use(
    express.static(
        path.join(
            __dirname,
            'views'
        )
    )
);

app.use(
    '/user',
    userRoutes
);

app.use(
    '/expense',
    expenseRoutes
);

app.get('/', (req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            'views',
            'signup.html'
        )
    );

});

sequelize.sync()
.then(() => {

    app.listen(3000, () => {

        console.log(
            'Server running on port 3000'
        );

    });

})
.catch(err => {

    console.log(err);

});