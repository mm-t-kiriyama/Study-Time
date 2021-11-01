import React from 'react';

import Card from './components/Card';
import './App.css';

const App: React.FC = () => {
  const expenses = [
    {
      id: 1,
      title: '私の百合はお仕事です！',
      amount: 294.68,
      date: new Date(),
    },
    {
      id: 2,
      title: 'ロンリーガールに逆らえない',
      amount: 294.68,
      date: new Date(),
    },
  ];

  return (
    <div className="App">
      <Card>
        <div>
          <h2>HELLO!</h2>
        </div>
      </Card>
    </div>
  );
};

export default App;
