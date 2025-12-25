'use client';
import DashNavbar from "@/components/DashNavbar";
import Preloader from "@/components/Preloader";
import Sidebar from "@/components/SideBar";
import '../../admin.css'
import RevenueChart from "@/components/RevenueChart";
import dashboardData from "@/lib/data.json";
import { useEffect, useState } from "react";
import OverviewTable from "@/components/TableList";

export default function Home() {
    const { header, summaryCards, revenue, rooms, todayOverview, roomStatus, feedback } =
        dashboardData;
    const [selectedPeriod, setSelectedPeriod] = useState<'Monthly' | 'Weekly'>('Monthly');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const chartPoints =
        selectedPeriod === 'Monthly'
            ? revenue.monthlyPoints
            : revenue.yearlyPoints;

    const [currentDate, setCurrentDate] = useState({ date: '' });

    useEffect(() => {
        setCurrentDate({
            date: new Date().toLocaleDateString('en-GB', {
                weekday: 'long',
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        });
    }, []);

    return (
        <>
            <main>
                <section className="dash-header">
                    <div>
                        <h1 className="dash-title">Welcome Back, {header.userName}</h1>
                        <p className="dash-subtitle">{header.subtitle}</p>
                        <p className="dash-date">{currentDate.date}</p>
                    </div>
                </section>

                <section className="dash-metrics">
                    {summaryCards.map((card) => (
                        <article className="metric-card" key={card.id}>
                            <p className="metric-label">{card.label}</p>
                            <p className="metric-value">{card.value}</p>
                            <p className="metric-change">
                                <span
                                    className={`metric-change-pill ${card.direction === "up" ? "up" : "down"
                                        }`}
                                >
                                    {card.direction === "up" ? <img src="/miscellaneous/trending_up.png" alt="" /> : <img src="/miscellaneous/down1.png" style={{height:'14px'}}/> }{card.changePct}%
                                </span>
                                <span className="metric-change-text">{card.compareText}</span>
                            </p>
                        </article>
                    ))}
                </section>
                <section className="dash-chart-card">
                    <header className="dash-chart-header">
                        <div>
                            <h2 className="dash-chart-title">Revenue Overtime</h2>
                            <div className="dash-chart-meta">
                                <div>
                                    <p className="meta-label">Total Revenue Made</p>
                                    <p className="meta-value">
                                        ₹{revenue.total.toLocaleString("en-IN")}.00
                                    </p>
                                </div>
                                <div>
                                    <p className="meta-label">Monthly Avg.</p>
                                    <p className="meta-value">
                                        ₹{revenue.monthlyAvg.toLocaleString("en-IN")}.00
                                    </p>
                                </div>
                                <div>
                                    <p className="meta-label">Weekly Avg.</p>
                                    <p className="meta-value">
                                        ₹{revenue.weeklyAvg.toLocaleString("en-IN")}.00
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="dash-chart-controls flex items-center gap-3 relative">
                            <div className="relative">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsDropdownOpen(!isDropdownOpen);
                                    }}
                                    className="chart-filter flex items-center gap-2 px-4 py-2 font-semibold text-gray-800"
                                >
                                    {selectedPeriod}
                                    <svg className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isDropdownOpen && (
                                    <div className=" chart-filter1 absolute right-0 mt-2 w-36 bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-2xl shadow-2xl z-50">
                                        {revenue.period?.map((period) => (
                                            <button
                                                key={period}
                                                onClick={() => {
                                                    setSelectedPeriod(period as 'Monthly' | 'Weekly');
                                                    setIsDropdownOpen(false);
                                                }}
                                                className=" chart-filter1 w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-800 border-b border-gray-100 last:border-b-0 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-150"
                                            >
                                                {period.charAt(0).toUpperCase() + period.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <button className="chart-expand"><img src="/miscellaneous/DiagonalArrow.png" alt="" /></button>

                        </div>
                    </header>

                    <div className="dash-chart-placeholder">
                        <RevenueChart points={chartPoints} />
                    </div>
                </section>
                <section className="rooms-section">
                    <h2 className="section-title">Rooms</h2>
                    <div className="rooms-grid">
                        {rooms.map((room) => (
                            <article key={room.id} className="room-card">
                                <header className="room-card-header">
                                    <span className="room-badge">{room.badge}</span>
                                    <button className="room-menu-btn">⋮</button>
                                </header>
                                <div className="room-card-body">
                                    <p className="room-type">{room.type}</p>
                                    <p className="room-occupancy">
                                        <span className="room-used">{room.occupied}</span>
                                        <span className="room-all">/{room.total}</span>
                                    </p>
                                    <p className="room-price">
                                        <span className="price-value">
                                            ₹{room.pricePerDay.toLocaleString("en-IN")}
                                        </span>
                                        <span className="price-unit">/day</span>
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
                <section className="overview-section">
                    <header className="overview-header">
                        <h2 className="section-title1">Today’s Overview</h2>
                        <div className="overview-actions">
                            <button className="chart-expand"><img src="/miscellaneous/DiagonalArrow.png" alt="" /></button>
                            <button className="chart-expand"><img src="/miscellaneous/3dot.png" alt="" /></button>
                        </div>
                    </header>

                    <div className="overview-table-wrapper">
                        {/* <table className="overview-table">
                            <thead>
                                <tr>
                                    <th >Booking ID</th>
                                    <th>Guest Name</th>
                                    <th>Contact</th>
                                    <th>Room Number</th>
                                    <th>Expected Check In</th>
                                    <th>Check-In Time</th>
                                    <th>Status</th>
                                    <th>Check-Out Time</th>
                                </tr>
                            </thead>

                            <tbody>
                                {todayOverview.rows.map((row) => (
                                    <tr key={row.bookingId}>
                                        <td>{row.bookingId}</td>
                                        <td>{row.guestName}</td>
                                        <td>{row.contact}</td>
                                        <td>{row.roomNumber}</td>
                                        <td>{row.expectedCheckIn}</td>

                                        <td>
                                            <div className="time-cell">
                                                <span>{row.checkInTime}</span>
                                                {row.checkInDelta && (
                                                    <span
                                                        className={`time-pill ${row.checkInDelta.type === "positive"
                                                            ? "time-pill-positive"
                                                            : "time-pill-negative"
                                                            }`}
                                                    >
                                                        {row.checkInDelta.text}
                                                    </span>
                                                )}
                                            </div>
                                        </td>

                                        <td>
                                            <span
                                                className="status-pill"
                                                style={{
                                                    color: row.statusColor,
                                                    backgroundColor: getStatusBg(row.statusColor),
                                                }}
                                            >
                                                {row.status}
                                            </span>
                                        </td>

                                        <td>
                                            <div className="time-cell">
                                                <span>{row.checkOutTime}</span>
                                                {row.checkOutDelta && (
                                                    <span
                                                        className={`time-pill ${row.checkOutDelta.type === "positive"
                                                            ? "time-pill-positive"
                                                            : "time-pill-negative"
                                                            }`}
                                                    >
                                                        {row.checkOutDelta.text}
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <footer className="overview-footer">
                            <div className="overview-show">
                                Show
                                <select defaultValue={todayOverview.pageSize}>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>50</option>
                                </select>
                                <span style={{ color: '#48494C', marginLeft: '10px' }}>{todayOverview.page} to {todayOverview.pageSize} of{" "}
                                    {todayOverview.totalResults} results        </span>      </div>

                            <div className="overview-pagination">
                                <button className="page-btn">‹</button>
                                <button className="page-btn">›</button>
                            </div>
                        </footer> */}
                        <OverviewTable todayOverview={dashboardData.todayOverview} />

                    </div>
                </section>
                <section className="bottom-section">
                    <div className="room-status-card">
                        <div className="section-title2">
                            <span className="status-icon" style={{ paddingTop: '10px' }}><img src="/miscellaneous/roomicon.png" alt="" /></span> <span > Room Status</span>
                        </div>
                        <p className="status-subtitle">Track your Rooms!</p>

                        <div className="status-row">
                            <div className="status-labels">
                                <span>Occupied Rooms</span>
                                <span className="sublable">
                                    {roomStatus.occupiedPct}% • {roomStatus.occupiedRooms}
                                </span>
                            </div>
                            <div className="status-bar">
                                <div
                                    className="status-bar-fill occupied"
                                    style={{ width: `${roomStatus.occupiedPct}%` }}
                                />
                            </div>
                        </div>

                        <div className="status-row">
                            <div className="status-labels">
                                <span>Available Rooms</span>
                                <span className="sublable">
                                    {roomStatus.availablePct}% • {roomStatus.availableRooms}
                                </span>
                            </div>
                            <div className="status-bar">
                                <div
                                    className="status-bar-fill available"
                                    style={{ width: `${roomStatus.availablePct}%` }}
                                />
                            </div>
                        </div>

                        <div className="status-row">
                            <div className="status-labels">
                                <span>Blocked Rooms</span>
                                <span className="sublable">
                                    {roomStatus.blockedPct}% • {roomStatus.blockedRooms}
                                </span>
                            </div>
                            <div className="status-bar">
                                <div
                                    className="status-bar-fill blocked"
                                    style={{ width: `${roomStatus.blockedPct}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="feedback-card">
                        <header className="feedback-header">
                            <h2 className="section-title1">Customer Feedback</h2>
                            <button className="icon-button">⋮</button>
                        </header>

                        <ul className="feedback-list">
                            {feedback.map((fb) => (
                                <li key={fb.id} className="feedback-item">
                                    <div className="feedback-avatar">
                                        {fb.guestName.charAt(0)}
                                    </div>
                                    <div className="feedback-content">
                                        <div className="feedback-top">
                                            <span className="feedback-name">{fb.guestName}</span>
                                            <span className="feedback-room">{fb.roomNumber}</span>
                                        </div>
                                        <p className="feedback-text">{fb.comment}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
}