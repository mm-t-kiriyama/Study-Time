import React from 'react';

interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate: React.FC<ExpenseDateProps> = (props) => {
  const { date } = props;

  return (
    <div className="space-x-3">
      <div className="inline-block">
        {date.toLocaleString('en-US', { month: 'long' })}
      </div>
      <div className="inline-block">
        {date.toLocaleString('en-US', { day: '2-digit' })}
      </div>
      <div className="inline-block">{date.getFullYear()}</div>
    </div>
  );
};

export default ExpenseDate;
