'use client';

import React, { useState } from 'react';
import { Pencil, MoreVertical, Funnel, Upload } from 'lucide-react';
import dashboardData from "@/lib/data.json";
import { getStatusBg } from "@/lib/adminUtils";

interface Guest {
    reservationId: string;
    guestName: string;
    roomNumber: string;
    totalAmount: number;
    amountPaid: number;
    status: string;
    originalId: string;
    statusColor: string;
    checkInDate: string;
    checkOutDate: string;
}

// Ensure unique reservation IDs for the key prop
const MOCK_GUESTS: Guest[] = [
    ...dashboardData.todayOverview.rows.map((row, index) => ({
        reservationId: `${row.bookingId}-${index}`, // Make unique
        originalId: row.bookingId, // Keep original for display
        guestName: row.guestName,
        roomNumber: row.roomNumber,
        totalAmount: 45000,
        amountPaid: 40000,
        status: row.status,
        statusColor: row.statusColor,
        checkInDate: row.expectedCheckIn,
        checkOutDate: "2025-11-08",
    })),
    // Add some dummy data to fill the table if needed
    {
        reservationId: "#2735162-extra",
        originalId: "#2735162",
        guestName: "Pradhyumn Dhondi",
        roomNumber: "204 - A",
        totalAmount: 45000,
        amountPaid: 40000,
        status: "Checked-In",
        statusColor: "#0D824B",
        checkInDate: "2025-11-05",
        checkOutDate: "2025-11-08",
    },
];

export default function GuestListPage() {
    const [activeTab, setActiveTab] = useState<'Check In' | 'Check Out'>('Check In');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const filteredGuests = MOCK_GUESTS.filter((guest) => {
        // Tab logic
        let matchesTab = true;
        if (activeTab === 'Check In') {
            matchesTab = guest.status === 'Expected' || guest.status === 'Checked-In';
        } else if (activeTab === 'Check Out') {
            matchesTab = guest.status === 'Checked-Out' || guest.status === 'Checked-In'; // Assuming checked-in guests might be checking out
        }

        const matchesSearch =
            guest.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            guest.originalId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            guest.roomNumber.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesTab && matchesSearch;
    });

    // Pagination Logic
    const totalResults = filteredGuests.length;
    const totalPages = Math.ceil(totalResults / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredGuests.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleExportCSV = () => {
        const headers = ["Reservation ID", "Guest Name", "Room Number", "Total Amount", "Amount Paid", "Status", "Check In", "Check Out"];
        const rows = filteredGuests.map(g => [
            g.originalId,
            g.guestName,
            g.roomNumber,
            g.totalAmount,
            g.amountPaid,
            g.status,
            g.checkInDate,
            g.checkOutDate
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(r => r.join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `guest_list_${activeTab.toLowerCase().replace(" ", "_")}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <section className="dash-header">
                <div>
                    <h1 className="dash-title">Guest List</h1>
                    <p className="dash-subtitle">Manage Your Guest List</p>
                </div>
            </section>

            <section className="overview-section font-poppins" style={{ minHeight: '80vh' }}>
                <header className="overview-header" style={{ paddingBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>

                    {/* Left side: Tabs */}
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <button
                            onClick={() => { setActiveTab('Check In'); setCurrentPage(1); }}
                            style={{
                                border: 'none',
                                background: 'none',
                                padding: '8px 0',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: activeTab === 'Check In' ? '#2563eb' : '#5b5a64',
                                borderBottom: activeTab === 'Check In' ? '2px solid #2563eb' : 'none',
                                cursor: 'pointer'
                            }}
                        >
                            Check In
                        </button>
                        <button
                            onClick={() => { setActiveTab('Check Out'); setCurrentPage(1); }}
                            style={{
                                border: 'none',
                                background: 'none',
                                padding: '8px 0',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: activeTab === 'Check Out' ? '#2563eb' : '#5b5a64',
                                borderBottom: activeTab === 'Check Out' ? '2px solid #2563eb' : 'none',
                                cursor: 'pointer'
                            }}
                        >
                            Check Out
                        </button>
                    </div>

                    {/* Right side: Actions (Search, Filter, Export) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="navbar-search" style={{ width: '240px' }}>
                            <img className="navbar-search-icon" src="/miscellaneous/search.png" alt="search" />
                            <input
                                type="text"
                                placeholder="Search Rooms, Transactions"
                                className="navbar-search-input"
                                value={searchQuery}
                                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                            />
                        </div>

                        <button style={{
                            display: 'flex', alignItems: 'center', gap: '6px',
                            padding: '8px 12px', borderRadius: '8px', border: '1px solid #E5E7EB',
                            backgroundColor: 'white', cursor: 'pointer', fontSize: '14px', color: '#374151'
                        }}>
                            <Funnel size={16} />
                            Filters
                        </button>

                        <button onClick={handleExportCSV} style={{
                            display: 'flex', alignItems: 'center', gap: '6px',
                            padding: '8px 12px', borderRadius: '8px', border: '1px solid #E5E7EB',
                            backgroundColor: 'white', cursor: 'pointer', fontSize: '14px', color: '#374151'
                        }}>
                            <Upload size={16} />
                            Import/Export
                        </button>
                    </div>
                </header>

                <div className="overview-table-wrapper">
                    <table className="overview-table">
                        <thead>
                            <tr>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <img src="/miscellaneous/grid.png" alt="" style={{ width: '16px' }} onError={(e) => e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iNyIgaGVpZ2h0PSI3IiBzdHJva2U9IiMzNzQxNTEiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjE0IiB5PSIzIiB3aWR0aD0iNyIgaGVpZ2h0PSI3IiBzdHJva2U9IiMzNzQxNTEiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjE0IiB5PSIxNCIgd2lkdGg9IjciIGhlaWdodD0iNyIgc3Ryb2tlPSIjMzc0MTUxIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSIzIiB5PSIxNCIgd2lkdGg9IjciIGhlaWdodD0iNyIgc3Ryb2tlPSIjMzc0MTUxIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4='} />
                                        Reservation ID
                                    </div>
                                </th>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <img src="/miscellaneous/user.png" alt="" style={{ width: '16px' }} onError={(e) => e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiIgc3Ryb2tlPSIjMzc0MTUxIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiIHN0cm9rZT0iIzM3NDE1MSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+'} />
                                        Guest Name
                                    </div>
                                </th>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <img src="/miscellaneous/bed.png" alt="" style={{ width: '16px' }} onError={(e) => e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiA0djE2IiBzdHJva2U9IiMzNzQxNTEiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0yIDhoMjB2OGgzIiBzdHJva2U9IiMzNzQxNTEiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0yIDhoMTB2OCIgc3Ryb2tlPSIjMzc0MTUxIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMiA0djEyIiBzdHJva2U9IiMzNzQxNTEiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg=='} />
                                        Room Number
                                    </div>
                                </th>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <img src="/miscellaneous/wallet.png" alt="" style={{ width: '16px' }} onError={(e) => e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxIiB5PSI0IiB3aWR0aD0iMjIiIGhlaWdodD0iMTYiIHJ4PSIyIiByeT0iMiIgc3Ryb2tlPSIjMzc0MTUxIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMSIgeTE9IjEwIiB4Mj0iMjMiIHkyPSIxMCIgc3Ryb2tlPSIjMzc0MTUxIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4='} />
                                        Total Amount
                                    </div>
                                </th>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <img src="/miscellaneous/wallet.png" alt="" style={{ width: '16px' }} onError={(e) => e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxIiB5PSI0IiB3aWR0aD0iMjIiIGhlaWdodD0iMTYiIHJ4PSIyIiByeT0iMiIgc3Ryb2tlPSIjMzc0MTUxIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMSIgeTE9IjEwIiB4Mj0iMjMiIHkyPSIxMCIgc3Ryb2tlPSIjMzc0MTUxIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4='} />
                                        Amount Paid
                                    </div>
                                </th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((guest) => (
                                <tr key={guest.reservationId}>
                                    <td>{guest.originalId}</td>
                                    <td>{guest.guestName}</td>
                                    <td>{guest.roomNumber}</td>
                                    <td>₹{guest.totalAmount.toLocaleString('en-IN')}.00</td>
                                    <td>₹{guest.amountPaid.toLocaleString('en-IN')}.00</td>
                                    <td>
                                        <span
                                            className="status-pill"
                                            style={{
                                                color: guest.statusColor,
                                                backgroundColor: getStatusBg(guest.statusColor),
                                            }}
                                        >
                                            {guest.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6B7280' }}>
                                                <Pencil size={16} />
                                            </button>
                                            <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6B7280' }}>
                                                <MoreVertical size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

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
                            {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalResults)} of {totalResults} results
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
            </section>
        </div>
    );
}
