import "../styles/SearchFilter.css";

function SearchFilter({searchTerm,setSearchTerm,selectedCategory,setSelectedCategory}) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder=" Search transactions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Salary">Salary</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Rent">Rent</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
}

export default SearchFilter;