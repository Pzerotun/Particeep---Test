import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage, setItemsPerPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <select onChange={(e) => setItemsPerPage(Number(e.target.value))} value={itemsPerPage}>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
            </select>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                Précédent
            </button>
            {pageNumbers.map(number => (
                <button key={number} onClick={() => paginate(number)} className={number === currentPage ? 'active' : ''}>
                    {number}
                </button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
                Suivant
            </button>
        </div>
    );
};

export default Pagination;
