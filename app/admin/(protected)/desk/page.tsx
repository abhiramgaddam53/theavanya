"use client";

import React, { useState } from 'react';
import { Pencil, MoreVertical, Upload, Calendar as CalendarIcon, SlidersHorizontal, MoreHorizontal } from 'lucide-react';
import { AdminTable, Column } from '@/app/admin/components/AdminTable';

interface FrontDeskRow {
    roomNumber: string;
    roomType: string;
    status: string; // Occupied, Available, Cleaning, Reserved, Out-Of Order
    guestName: string;
    checkOutTime: string;
    checkOutDelay?: string; // e.g. +00:00:00
    nextCheckIn: string;
    occupancy: string;
    houseKeeping: string; // Do-Not Disturb, Clean, In-Progress, Dirty
    id: string;
    [key: string]: string | undefined; // Index signature for sorting
}

// Mock Data Enrichment based on dashboardData or static generation
const MOCK_FRONT_DESK_DATA: FrontDeskRow[] = Array.from({ length: 20 }).map((_, i) => {
    const statusOptions = ['Occupied', 'Available', 'Cleaning', 'Reserved', 'Out-Of Order'];
    const hkOptions = ['Do-Not Disturb', 'Clean', 'In-Progress', 'Dirty'];
    const types = ['Suite Executive', 'Single Sharing', 'Double Deluxe'];

    const status = statusOptions[i % statusOptions.length];

    return {
        id: `fd-${i}`,
        roomNumber: `20${i % 9} - ${(i % 3) === 0 ? 'A' : (i % 3) === 1 ? 'B' : 'C'}`,
        roomType: types[i % types.length],
        status: status,
        guestName: status === 'Occupied' || status === 'Cleaning' || status === 'Reserved' ? 'Pradhyumn Dhondi' : '-',
        checkOutTime: '11:00:00',
        checkOutDelay: i % 3 === 0 ? '+00:00:00' : undefined,
        nextCheckIn: '02:00:00',
        occupancy: status === 'Occupied' || status === 'Reserved' ? '1 A, 0 C' : '0 A, 0 C',
        houseKeeping: hkOptions[i % hkOptions.length],
    };
});

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Occupied': return { bg: '#eef2ff', text: '#314cdd' }; // Blueish
        case 'Available': return { bg: '#ecfdf5', text: '#059669' }; // Green
        case 'Cleaning': return { bg: '#fefce8', text: '#ca8a04' };// Yellow
        case 'Reserved': return { bg: '#fff7ed', text: '#c2410c' }; // Orange
        case 'Out-Of Order': return { bg: '#fef2f2', text: '#dc2626' }; // Red
        default: return { bg: '#f3f4f6', text: '#374151' };
    }
};

const getHKStatusColor = (status: string) => {
    switch (status) {
        case 'Do-Not Disturb': return { bg: '#fee2e2', text: '#991b1b' };
        case 'Clean': return { bg: '#ecfdf5', text: '#059669' };
        case 'In-Progress': return { bg: '#fffbeb', text: '#b45309' };
        case 'Dirty': return { bg: '#eff6ff', text: '#1d4ed8' };
        default: return { bg: '#f3f4f6', text: '#374151' };
    }
};

export default function FrontDeskPage() {
    const [activeTab, setActiveTab] = useState('All Rooms');

    // Simple filter logic for demonstration
    const filteredData = MOCK_FRONT_DESK_DATA.filter(item => {
        if (activeTab === 'All Rooms') return true;
        return item.roomType.includes(activeTab); // Simple string match
    });

    const columns: Column<FrontDeskRow>[] = [
        { key: 'roomNumber', header: 'Room No.' },
        { key: 'roomType', header: 'Room Type' },
        {
            key: 'status',
            header: 'Status',
            render: (row) => {
                const style = getStatusColor(row.status);
                return (
                    <span className="status-pill" style={{ backgroundColor: style.bg, color: style.text }}>
                        {row.status}
                    </span>
                );
            }
        },
        { key: 'guestName', header: 'Current Guest' },
        {
            key: 'checkOutTime',
            header: 'Check-Out Time',
            render: (row) => (
                <>
                    {row.checkOutTime}
                    {row.checkOutDelay && (
                        <span className="ml-2 text-[10px] text-red-500 bg-red-50 px-1 py-0.5 rounded">
                            {row.checkOutDelay}
                        </span>
                    )}
                </>
            )
        },
        { key: 'nextCheckIn', header: 'Next Check-In' },
        { key: 'occupancy', header: 'Occupancy' },
        {
            key: 'houseKeeping',
            header: 'House-Keeping',
            render: (row) => {
                const style = getHKStatusColor(row.houseKeeping);
                return (
                    <span className="status-pill" style={{ backgroundColor: style.bg, color: style.text }}>
                        {row.houseKeeping}
                    </span>
                );
            }
        },
        {
            key: 'actions',
            header: 'Actions',
            sortable: false,
            render: () => (
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
        <div className="bg-[#F3F4F6] min-h-[calc(100vh-56px)] pb-8">
            {/* Header */}
            <section className="dash-header mb-6">
                <div>
                    <h1 className="dash-title">Front Desk</h1>
                    <p className="dash-subtitle">Manage Your Room Booking Pipeline</p>
                </div>
            </section>

            {/* Stats Cards */}
            <section className="grid grid-cols-3 gap-6 mb-8">
                {/* Occupied Rooms */}
                <div className="rounded-2xl p-5 border border-blue-100 bg-linear-to-r from-blue-50/80 to-blue-50/20 shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-[15px] font-medium text-gray-600">Occupied Rooms</span>
                        <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-3xl font-semibold text-gray-800">32</span>
                        <span className="text-xs font-medium text-blue-600">+10% from last month</span>
                    </div>
                </div>

                {/* Available Rooms */}
                <div className="rounded-2xl p-5 border border-green-100 bg-linear-to-r from-green-50/80 to-green-50/20 shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-[15px] font-medium text-gray-600">Available Rooms</span>
                        <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-3xl font-semibold text-gray-800">12</span>
                        <span className="text-xs font-medium text-green-600">+10% from last month</span>
                    </div>
                </div>

                {/* Blocked Rooms */}
                <div className="rounded-2xl p-5 border border-red-100 bg-linear-to-r from-red-50/80 to-red-50/20 shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-[15px] font-medium text-gray-600">Blocked Rooms</span>
                        <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-3xl font-semibold text-gray-800">8</span>
                        <span className="text-xs font-medium text-red-600">-20% This Month</span>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="overview-section font-poppins">

                {/* Tabs & Top Actions */}
                <div className="flex justify-between items-center pb-4 mb-4">
                    <div className="flex gap-6">
                        {['All Rooms', 'Single', 'Double', 'VIP'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-sm cursor-pointer font-medium pb-4 -mb-4 transition-colors ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
                            <SlidersHorizontal size={16} />
                            Timeline
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
                            <Upload size={16} />
                            Import/Export
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-12 gap-4 mb-6 items-end">
                    <div className="col-span-2">
                        <label className="text-xs font-medium text-gray-500 mb-1 block">Check in</label>
                        <div className="relative">
                            <input type="text" placeholder="Tue, Mar 2" className="w-full pl-3 pr-8 py-2 border border-gray-200 rounded-lg text-sm" />
                            <CalendarIcon size={16} className="absolute right-3 top-2.5 text-gray-400" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-xs font-medium text-gray-500 mb-1 block">Check out</label>
                        <div className="relative">
                            <input type="text" placeholder="Wed, Mar 10" className="w-full pl-3 pr-8 py-2 border border-gray-200 rounded-lg text-sm" />
                            <CalendarIcon size={16} className="absolute right-3 top-2.5 text-gray-400" />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <label className="text-xs font-medium text-gray-500 mb-1 block">Adult</label>
                        <div className="relative">
                            <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm appearance-none bg-white">
                                <option>Older than 12 years</option>
                            </select>
                            <div className="absolute right-3 top-3 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-400 pointer-events-none" />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <label className="text-xs font-medium text-gray-500 mb-1 block">Children</label>
                        <div className="relative">
                            <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm appearance-none bg-white">
                                <option>0 - 10 years</option>
                            </select>
                            <div className="absolute right-3 top-3 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-400 pointer-events-none" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm transition-colors cursor-pointer">
                            Check Availability
                        </button>
                    </div>
                </div>

                {/* Table */}
                <AdminTable
                    key={activeTab} // Force reset pagination
                    data={filteredData}
                    columns={columns}
                />
            </div>
        </div>
    );
}
