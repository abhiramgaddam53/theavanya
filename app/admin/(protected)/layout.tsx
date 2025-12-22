import React from 'react';
import DashNavbar from '@/components/DashNavbar';
import Sidebar from '@/components/SideBar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <DashNavbar />
            <Sidebar />
            <main className="dashboard-main font-poppins">
                {children}
            </main>
        </>
    );
}
