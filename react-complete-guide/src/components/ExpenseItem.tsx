import React from 'react';

import ExpenseDate from './ExpenseDate';

export interface ExpenseItemProps {
  expense: [
    {
      id: number;
      title: string;
      amount: number;
      date: Date;
    }
  ];
}

const ExpenseItem: React.FC<ExpenseItemProps[]> = (props) => {
  const expense: ExpenseItemProps = props;

  return (
    <div className="space-y-4">
      <ExpenseDate date={} />
      <div>
        <h2>{item.title}</h2>
        <div>
          $
          {item.amount}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
