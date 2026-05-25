export default function Header({ filter, setFilter }) {
  return (
    <>
      <div className="extension-list">
        <div className="text-extension">
          <h3>Extension List</h3>
        </div>
        <div className="btn-extension">
          <button
            className={filter == "all" ? "btn active" : "btn"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter == "active" ? "btn active" : "btn"}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={filter == "inactive" ? "btn active" : "btn"}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>
    </>
  );
}
