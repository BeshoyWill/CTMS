import React, { useState } from 'react';
import customersData from '../data/customers.json';
import transactionsData from '../data/transactions.json';
import TransactionChart from './TransactionChart';
import SearchBar from './SearchBar';

const CustomerTable = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [filteredCustomers, setFilteredCustomers] = useState(customersData);

  const handleSearch = (searchTerm) => {
    const filtered = customersData.filter(customer =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filtered);
  };

  const handleShowTransactions = (customerId) => {
    if (selectedCustomerId === customerId) {
      setSelectedCustomerId(null); // Hide transactions if the same button is clicked again
    } else {
      setSelectedCustomerId(customerId);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Customer Transactions</h2>
      <SearchBar onSearch={handleSearch} />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="customerTable">
          {filteredCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleShowTransactions(customer.id)}
                >
                  {selectedCustomerId === customer.id ? 'Hide Transactions' : 'View Transactions'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCustomerId && (
        <TransactionChart
          customerId={selectedCustomerId}
          transactions={transactionsData.filter(t => t.customer_id === selectedCustomerId)}
        />
      )}
    </div>
  );
};

export default CustomerTable;
