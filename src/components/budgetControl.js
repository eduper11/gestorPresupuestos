import React, { Fragment } from 'react';
import { budgetReview } from '../helper';

const BudgetControl = ({ budget, remaining }) => (
    <Fragment>
        <div className='alert alert-primary'>Presupuesto: ${budget}</div>
        <div className={budgetReview(budget, remaining)}>
            Restante: ${remaining}
        </div>
    </Fragment>
);

export default BudgetControl;
