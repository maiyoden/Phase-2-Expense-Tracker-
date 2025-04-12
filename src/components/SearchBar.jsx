function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search expenses by description or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  }
  export default SearchBar