"use client";

import React, { useState } from 'react';
import { Pencil, MoreVertical, Funnel, Upload } from 'lucide-react';
import dashboardData from "@/lib/data.json";
import { getStatusBg } from "@/lib/adminUtils";
import { AdminTable, Column } from '@/app/admin/components/AdminTable';

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
    [key: string]: string | number | undefined;
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

 const filteredGuests = MOCK_GUESTS.filter((guest) => {
  // Tab logic
  let matchesTab = true;
  if (activeTab === 'Check In') {
    matchesTab = guest.status === 'Expected' || guest.status === 'Checked-In';
  } else if (activeTab === 'Check Out') {
    // OLD:
    // matchesTab = guest.status === 'Checked-Out' || guest.status === 'Checked-In';

    // NEW: only show Checked-Out guests
    matchesTab = guest.status === 'Checked-Out';
  }

  const matchesSearch =
    guest.guestName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guest.originalId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    guest.roomNumber.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesTab && matchesSearch;
});


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

    const columns: Column<Guest>[] = [
        { key: 'originalId', header: 'Reservation ID' },
        { key: 'guestName', header: 'Guest Name' },
        { key: 'roomNumber', header: 'Room Number' },
        {
            key: 'totalAmount',
            header: 'Total Amount',
            render: (row) => `₹${row.totalAmount.toLocaleString('en-IN')}.00`
        },
        {
            key: 'amountPaid',
            header: 'Amount Paid',
            render: (row) => `₹${row.amountPaid.toLocaleString('en-IN')}.00`
        },
        {
            key: 'status',
            header: 'Status',
            render: (row) => (
                <span
                    className="status-pill"
                    style={{
                        color: row.statusColor,
                        backgroundColor: getStatusBg(row.statusColor),
                    }}
                >
                    {row.status}
                </span>
            )
        },
        {
            key: 'actions',
            header: 'Actions',
            sortable: false,
            render: (row) => (
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6B7280' }}>
                        <Pencil size={16} />
                    </button>
                    <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6B7280' }}>
                        <MoreVertical size={16} />
                    </button>
                </div>
            )
        }
    ];

    return (
        <div className='bg-[#F3F4F6]'>
            <section className="dash-header">
                <div>
                    <h1 className="dash-title">Guest List</h1>
                    <p className="dash-subtitle">Manage Your Guest List</p>
                </div>
            </section>

            <section className="overview-section font-poppins">
                <header className="overview-header" style={{ paddingBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>

                    {/* Left side: Tabs */}
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <button
                            onClick={() => { setActiveTab('Check In'); }}
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
                            onClick={() => { setActiveTab('Check Out'); }}
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
                                onChange={(e) => { setSearchQuery(e.target.value); }}
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

                <AdminTable
                    key={activeTab + searchQuery} // Force reset pagination when filters change
                    data={filteredGuests}
                    columns={columns}
                    defaultItemsPerPage={10}
                />
            </section>
        </div>
    );
}
