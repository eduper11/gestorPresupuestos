import React from 'react';

const Expense = ({ expense }) => (
    <li className='gastos'>
        <p>
            {expense.expenseName}
            <span className='gasto'>${expense.expenseQuantity}</span>
        </p>
    </li>
);

export default Expense;
