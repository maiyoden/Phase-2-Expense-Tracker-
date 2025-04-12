import { useState } from 'react';

 function ExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    amount: '',
    date: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.description || !formData.category || !formData.amount || !formData.date) {
      alert('Please fill in all fields');
      return;
    }
    
    addExpense({
      ...formData,
      amount: parseFloat(formData.amount)
    });
    
    // Reset form
    setFormData({
      description: '',
      category: '',
      amount: '',
      date: ''
    });
  };
  
  return (
    <div className="expense-form">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="add-button">Add Expense</button>
      </form>
    </div>
  );
}
export default ExpenseForm