import React, { useState } from 'react';
import Error from './Error';
import uuid from 'uuid';

function Form({ setExpense, setCreatedExpense }) {
    //state

    const [expenseName, setExpenseName] = useState('');
    const [expenseQuantity, setExpenseQuantity] = useState(0);
    const [error, setError] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();

        //validar el gasto
        if (
            expenseQuantity < 1 ||
            isNaN(expenseQuantity) ||
            expenseName === ''
        ) {
            setError(true);
            return;
        }

        //construir el objeto gasto, y lo pasamos al componente App
        const expense = { expenseName, expenseQuantity, id: uuid() };
        setExpense(expense);

        //hacemos que no se ejecute el useEffect de App
        setCreatedExpense(true);

        //evitamos la alerta
        setError(false);

        //resetear el form
        setExpenseName('');
        setExpenseQuantity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agrega tus gastos aquí</h2>
            {error ? (
                <Error message='Los datos introducidos son incorrectos' />
            ) : null}
            <div className='campo'>
                <label>Nombre gasto</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    onChange={event => setExpenseName(event.target.value)}
                    value={expenseName}
                />
            </div>
            <div className='campo'>
                <label>Cantidad gasto</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Ej. 300'
                    onChange={event =>
                        setExpenseQuantity(parseInt(event.target.value, 10))
                    }
                    value={expenseQuantity}
                />
            </div>
            <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar gasto'
            />
        </form>
    );
}

export default Form;
