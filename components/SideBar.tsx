'use client';

import React from 'react';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-top">
                <span className="sidebar-label">Menu</span>

                <nav className="sidebar-nav">
                    <button className="sidebar-item sidebar-item-active">
                        <img className="icon" src="./miscellaneous/one.png" alt="" />
                    </button>
                    <button className="sidebar-item">
                        <img className="icon" src="./miscellaneous/two.png" alt="" />
                    </button>
                    <button className="sidebar-item">
                        <img className="icon" src="./miscellaneous/three.png" alt="" />
                    </button>
                    <button className="sidebar-item">
                        <img className="icon" src="./miscellaneous/four.png" alt="" />
                    </button>
                    <button className="sidebar-item">
                        <img className="icon" src="./miscellaneous/five.png" alt="" />
                    </button>
                </nav>
            </div>

            <div className="sidebar-bottom">
                <button className="sidebar-item">
                    <img className="icon" src="./miscellaneous/help.png" alt="" />
                </button>
                <button className="sidebar-item">
                    <img className="icon" src="./miscellaneous/setting.png" alt="" />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
