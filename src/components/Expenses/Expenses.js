import React, { useState } from 'react';
import ExpenseItem from './ExpenseItems';
import './Expenses.css'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');      

      const selectedYearFilterHandler = (selectedYear) => {
            setFilteredYear(selectedYear);
      };

      const selectedExpenses = props.items.filter(expense => {
           return expense.date.getFullYear().toString() === filteredYear; 
      });


    return (
        <>
            <div className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={selectedYearFilterHandler} />
                <ExpenseChart expenses={selectedExpenses}/>
                {selectedExpenses.length === 0 && <p className='null' >No Expenses Found.</p>}
                {selectedExpenses.length > 0 &&
                    selectedExpenses.map((expense) => (
                        < ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
                    )}
            </div>
        </>
    )
}

export default Expenses;