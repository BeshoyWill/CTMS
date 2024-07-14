import React from 'react';
import CustomerTable from './components/CustomerTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <div className="container-fluid">
      <CustomerTable />
    </div>
  );
};

export default App;
