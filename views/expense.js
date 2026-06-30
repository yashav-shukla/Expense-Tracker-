const expenseForm =
document.getElementById(
    'expenseForm'
);

window.addEventListener(
    'DOMContentLoaded',

    async () => {

        try {

            const response =
                await axios.get(
                    'http://localhost:3000/expense/get-expenses'
                );

            response.data.forEach(
                expense => {

                    showExpenseOnScreen(
                        expense
                    );

                }
            );

        }

        catch (err) {

            console.log(err);

        }

    }
);

expenseForm.addEventListener(

    'submit',

    async (event) => {

        event.preventDefault();

        const expenseDetails = {

            amount:
                document
                    .getElementById('amount')
                    .value,

            description:
                document
                    .getElementById('description')
                    .value,

            category:
                document
                    .getElementById('category')
                    .value

        };

        try {

            const response =
                await axios.post(

                    'http://localhost:3000/expense/add-expense',

                    expenseDetails

                );

            showExpenseOnScreen(
                response.data.expense
            );

            expenseForm.reset();

        }

        catch (err) {

            console.log(err);

        }

    }

);

function showExpenseOnScreen(
    expense
) {

    const parent =
        document.getElementById(
            'expenseList'
        );

    const child =
        document.createElement(
            'li'
        );

    child.id =
        expense.id;

    child.textContent =

        `${expense.amount}
         - ${expense.description}
         - ${expense.category}`;

    const deleteBtn =
        document.createElement(
            'button'
        );

    deleteBtn.textContent =
        'Delete';

    deleteBtn.onclick =
        () =>
            deleteExpense(
                expense.id
            );

    child.appendChild(
        deleteBtn
    );

    parent.appendChild(
        child
    );

}

async function deleteExpense(
    expenseId
) {

    try {

        await axios.delete(

            `http://localhost:3000/expense/delete-expense/${expenseId}`

        );

        document
            .getElementById(
                expenseId
            )
            .remove();

    }

    catch (err) {

        console.log(err);

    }

}
function showExpenseOnScreen(expense) {

    const parent =
    document.getElementById('expenseList');

    const child =
    document.createElement('li');

    child.className =
    'expense-item';

    child.id =
    expense.id;

    child.innerHTML = `

        <div class="expense-details">
            <strong>₹${expense.amount}</strong>
            <br>
            ${expense.description}
            <br>
            <small>${expense.category}</small>
        </div>

        <button
            class="delete-btn"
            onclick="deleteExpense(${expense.id})">
            Delete
        </button>
    `;

    parent.appendChild(child);
}