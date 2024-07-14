import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import customersData from '../data/customers.json';

const TransactionChart = ({ customerId, transactions }) => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Sort transactions by date in ascending order
    const sortedTransactions = [...transactions].sort((a, b) => new Date(a.date) - new Date(b.date));

    const updateChart = () => {
      const amounts = sortedTransactions.map(transaction => transaction.amount);

      if (chartInstanceRef.current) {
        chartInstanceRef.current.data.labels = sortedTransactions.map((transaction, index) => `Transaction ${index + 1}: $${transaction.amount}`);
        chartInstanceRef.current.data.datasets[0].data = amounts;
        chartInstanceRef.current.update();
      } else {
        const ctx = canvasRef.current.getContext('2d');
        chartInstanceRef.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: sortedTransactions.map((transaction, index) => `Transaction ${index + 1}: $${transaction.amount}`),
            datasets: [{
              data: amounts,
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: 'right'
              }
            }
          }
        });
      }
    };

    updateChart();

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [transactions]);

  return (
    <div className="mt-4 text-center">
      <h4>Transactions for {customersData.find(customer => customer.id === customerId)?.name}</h4>
  
      <div className="chart-container" style={{ position: 'relative', height: '400px', width: '400px', margin: '0 auto' }}>
        <canvas ref={canvasRef} id={`transactionChart-${customerId}`} />
      </div>

      <div className="transaction-details mb-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Transaction Name</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.sort((a, b) => new Date(a.date) - new Date(b.date)).map(transaction => (
              <tr>
                <td>{customersData.find(customer => customer.id === customerId)?.name}</td>
                <td>{transaction.date}</td>
                <td>${transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionChart;
