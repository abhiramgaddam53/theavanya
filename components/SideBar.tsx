'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Users, HelpCircle, Settings, BedDouble, LayoutList, GripVertical, LogOut } from 'lucide-react';
import Cookies from 'js-cookie';

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove('admin_auth');
        router.push('/admin');
    };

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <span className="sidebar-label">Menu</span>

                <nav className="sidebar-nav">
                    <Link
                        href="/admin/dashboard"
                        className={`sidebar-item ${isActive('/admin/dashboard') ? 'sidebar-item-active' : ''}`}
                    >
                        <Home className="icon" size={18} color={isActive('/admin/dashboard') ? '#fff' : '#5b5a64'} />
                    </Link>
                    <Link
                        href="/admin/desk"
                        className={`sidebar-item ${isActive('/admin/desk') ? 'sidebar-item-active' : ''}`}
                    >
                        <BedDouble className="icon" size={18} color={isActive('/admin/desk') ? '#fff' : '#5b5a64'} />
                    </Link>
                    <button className="sidebar-item">
                        <GripVertical className="icon" size={18} color="#5b5a64" />
                    </button>
                    <Link
                        href="/admin/guests"
                        className={`sidebar-item ${isActive('/admin/guests') ? 'sidebar-item-active' : ''}`}
                    >
                        <Users className="icon" size={18} color={isActive('/admin/guests') ? '#fff' : '#5b5a64'} />
                    </Link>
                    <button className="sidebar-item">
                        <LayoutList className="icon" size={18} color="#5b5a64" />
                    </button>
                </nav>
            </div>

            <div className="sidebar-bottom">
                <button className="sidebar-item">
                    <HelpCircle className="icon" size={18} color="#5b5a64" />
                </button>
                <button className="sidebar-item">
                    <Settings className="icon" size={18} color="#5b5a64" />
                </button>
                <button className="sidebar-item" onClick={handleLogout} title="Log Out">
                    <LogOut className="icon" size={18} color="#ef4444" />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
