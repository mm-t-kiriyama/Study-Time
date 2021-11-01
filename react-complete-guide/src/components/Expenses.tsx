import React from 'react';

import ExpenseItem, { ExpenseItemProps } from './ExpenseItem';

const Expenses: React.FC<ExpenseItemProps> = (props) => {
  const expense: ExpenseItemProps = props;

  return (
    <ExpenseItem
      id={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  );
};

export default Expenses;
