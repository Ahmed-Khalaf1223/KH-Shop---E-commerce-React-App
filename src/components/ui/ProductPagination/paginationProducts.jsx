import React from "react";

function paginationProducts({ totalPages, currentPage, setCurrentPage }) {
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="pagination">
      <button
        className="page-btn"
        onClick={prevPage}
        disabled={currentPage === 1}
        style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        ← Previous
      </button>
      <span className="page-number active">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="page-btn"
        onClick={nextPage}
        disabled={currentPage === totalPages}
        style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
      >
        Next →
      </button>
    </div>
  );
}

export default paginationProducts;
