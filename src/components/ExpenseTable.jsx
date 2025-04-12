function ExpenseTable({ expenses, deleteExpense, requestSort, sortConfig }) {
    const getSortDirection = (key) => {
      if (!sortConfig || sortConfig.key !== key) {
        return null;
      }
      return sortConfig.direction === 'ascending' ? '↑' : '↓';
    };
    
    return (
      <div className="expense-table">
        <h2>Expenses</h2>
        
        {expenses.length === 0 ? (
          <p className="no-expenses">No expenses found. Add some expenses or modify your search.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th 
                  onClick={() => requestSort('description')}
                  className="sortable"
                >
                  Description {getSortDirection('description')}
                </th>
                <th 
                  onClick={() => requestSort('category')}
                  className="sortable"
                >
                  Category {getSortDirection('category')}
                </th>
                <th>Amount</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map(expense => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>{expense.category}</td>
                  <td>${expense.amount.toFixed(2)}</td>
                  <td>{new Date(expense.date).toLocaleDateString()}</td>
                  <td>
                    <button 
                      onClick={() => deleteExpense(expense.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
  export default ExpenseTable