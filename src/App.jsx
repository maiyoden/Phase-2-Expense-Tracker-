// App.jsx - Main Component
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  // State management
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', category: 'Food', amount: 50, date: '2023-04-10' },
    { id: 2, description: 'Movie Tickets', category: 'Entertainment', amount: 20, date: '2023-04-08' },
    { id: 3, description: 'Electricity Bill', category: 'Utilities', amount: 75, date: '2023-04-05' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  
  // Add a new expense
  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: expenses.length > 0 ? Math.max(...expenses.map(e => e.id)) + 1 : 1
    };
    setExpenses([...expenses, newExpense]);
  };
  
  // Delete an expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };
  
  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(expense => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort expenses if sortBy is set
  const sortedExpenses = sortBy 
    ? [...filteredExpenses].sort((a, b) => a[sortBy].localeCompare(b[sortBy])) 
    : filteredExpenses;
  
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseTable 
        expenses={sortedExpenses} 
        deleteExpense={deleteExpense} 
        setSortBy={setSortBy} 
      />
    </div>
  );
}

export default App;