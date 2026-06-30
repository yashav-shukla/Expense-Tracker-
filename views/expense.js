const expenseForm =
document.getElementById('expenseForm');

const token =
localStorage.getItem('token');

console.log('TOKEN:', token);

window.addEventListener(
    'DOMContentLoaded',
    async () => {

        try {

            const response =
            await axios.get(
                'http://localhost:3000/expense/get-expenses',
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            response.data.forEach(expense => {
                showExpenseOnScreen(expense);
            });

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
            document.getElementById('amount').value,

            description:
            document.getElementById('description').value,

            category:
            document.getElementById('category').value

        };

        try {

            const response =
            await axios.post(
                'http://localhost:3000/expense/add-expense',
                expenseDetails,
                {
                    headers: {
                        Authorization: token
                    }
                }
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
            <strong>₹${expense.amount}</strong><br>
            ${expense.description}<br>
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

async function deleteExpense(expenseId) {

    try {

        await axios.delete(
            `http://localhost:3000/expense/delete-expense/${expenseId}`,
            {
                headers: {
                    Authorization: token
                }
            }
        );

        document
        .getElementById(expenseId)
        .remove();

    }

    catch (err) {

        console.log(err);

    }

}