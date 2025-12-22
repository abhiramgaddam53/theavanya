"use client";

import React, { useState } from 'react';
import { getHeaderIcon } from '@/lib/headerIcons';
import { useTableSort } from '@/lib/useTableSort';

export interface Column<T> {
    key: string;
    header: string;
    render?: (row: T) => React.ReactNode;
    sortable?: boolean;
}

interface AdminTableProps<T> {
    data: T[];
    columns: Column<T>[];
    defaultItemsPerPage?: number;
}

export function AdminTable<T extends Record<string, any>>({
    data,
    columns,
    defaultItemsPerPage = 10
}: AdminTableProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

    // Sorting
    const { items: sortedData, requestSort, getSortIcon } = useTableSort(data);

    // Pagination
    const totalResults = sortedData.length;
    const totalPages = Math.ceil(totalResults / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="overview-table-wrapper">
            <table className="overview-table">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                onClick={() => col.sortable !== false && requestSort(col.key)}
                                className={col.sortable !== false ? "cursor-pointer hover:bg-gray-50" : ""}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    {getHeaderIcon(col.header)}
                                    {col.header}
                                    {col.sortable !== false && getSortIcon(col.key)}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((row, rowIndex) => (
                        <tr key={row.id || row.reservationId || row.bookingId || rowIndex}>
                            {columns.map((col) => (
                                <td key={`${col.key}-${rowIndex}`}>
                                    {col.render ? col.render(row) : row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <footer className="overview-footer" style={{ marginTop: '20px' }}>
                <div className="overview-show">
                    Show
                    <select
                        value={itemsPerPage}
                        onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                        style={{ margin: '0 8px', padding: '4px', borderRadius: '4px', border: '1px solid #e5e7eb' }}
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                    <span style={{ color: '#48494C', marginLeft: '10px' }}>
                        {totalResults > 0 ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, totalResults)} of {totalResults} results
                    </span>
                </div>

                <div className="overview-pagination">
                    <button
                        className="page-btn"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
                    >
                        ‹
                    </button>
                    <button
                        className="page-btn"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
                    >
                        ›
                    </button>
                </div>
            </footer>
        </div>
    );
}
