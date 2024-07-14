import React from 'react';
import CustomerTable from './components/CustomerTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <CustomerTable />
    </div>
  );
};

export default App;
