import React from 'react';

export default function PaginationControls({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-ink-soft border-t border-mist/10">
      <div className="text-sm text-mist/60">
        Showing page {currentPage} of {totalPages}
      </div>
      <div className="flex gap-2">
        <button
          className="px-3 py-1 bg-mist/10 text-mist/60 hover:text-ember transition-colors rounded-md disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <span className="material-symbols-outlined text-sm">chevron_left</span>
        </button>
        <button
          className="px-3 py-1 bg-mist/10 text-mist/60 hover:text-ember transition-colors rounded-md disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
