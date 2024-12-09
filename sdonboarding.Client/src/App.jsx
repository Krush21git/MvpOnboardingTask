import './App.css'
import { useEffect, useState, Component } from 'react';
import './App.css';
import { CustomerTable } from './components/customers/CustomerTable';

function App() {
  return (
    <>
      <h1>MVP Studio Onboarding</h1>
      <CustomerTable />
    </>
  )
}

export default App
