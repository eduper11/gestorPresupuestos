import React, { Fragment, useState } from 'react';
import Error from './Error';

function Question({ setBudget, setQuestionBudget, setRemaining }) {
    //definimos nuestro state
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

    //agregamos la entrada de datos

    const handleSubmit = event => {
        event.preventDefault();

        //validamos entrada
        if (quantity < 1 || isNaN(quantity)) {
            setError(true);
            return;
        }

        //enviamos los datos al state de App
        setError(false);
        setBudget(quantity);
        setRemaining(quantity);
        setQuestionBudget(false);
    };
    return (
        <Fragment>
            <h2>Coloca aquí tu presupuesto</h2>
            {error ? <Error message='El presupuesto es incorrecto' /> : null}
            <form onSubmit={handleSubmit}>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Agrega tu presupesto'
                    onChange={event =>
                        setQuantity(parseInt(event.target.value, 10))
                    }
                />
                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='definir presupuesto'
                />
            </form>
        </Fragment>
    );
}

export default Question;
