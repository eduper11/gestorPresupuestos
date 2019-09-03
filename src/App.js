import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/budgetControl';

function App() {
    //state del presup

    const [budget, setBudget] = useState(0);
    const [questionBudget, setQuestionBudget] = useState(true);
    const [expense, setExpense] = useState({});
    const [expenses, setExpenses] = useState([]);
    const [createdExpense, setCreatedExpense] = useState(false);
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        if (createdExpense) {
            const expenseList = [...expenses, expense];
            setExpenses(expenseList);
            console.log(expenseList);

            //restar al presupuesto

            const remainginBudget = remaining - expense.expenseQuantity;

            //salvamos restante
            setRemaining(remainginBudget);

            setCreatedExpense(false);
        }
    }, [createdExpense, expense, expenses]);

    return (
        <div className='App container'>
            <header>
                <h1>Gasto semanal</h1>
                <div className='contenido-principal contenido'>
                    {questionBudget ? (
                        <Question
                            setBudget={setBudget}
                            setQuestionBudget={setQuestionBudget}
                            setRemaining={setRemaining}
                        />
                    ) : (
                        <div className='row'>
                            <div className='one-half column'>
                                <Form
                                    setExpense={setExpense}
                                    setCreatedExpense={setCreatedExpense}
                                />
                            </div>
                            <div className='one-half column'>
                                <List expenses={expenses} />
                                <BudgetControl
                                    budget={budget}
                                    remaining={remaining}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
