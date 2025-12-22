
import RevenueChart from "@/components/RevenueChart";
import dashboardData from "@/lib/data.json";
import { getHeaderIcon } from '@/lib/headerIcons';

export default function Home() {
    const { header, summaryCards, revenue, rooms, todayOverview, roomStatus, feedback } =
        dashboardData;
    const getStatusBg = (hex: string) => {
        switch (hex) {
            case "#5643C7":
                return "#EEEAFE";
            case "#0D824B":
                return "#E3F7EE";
            case "#F8C313":
                return "#FFF6D6";
            case "#12607D":
                return "#E3F3FA";
            case "#CD3636":
                return "#FDE5E5";
            default:
                return "#F3F4F6";
        }
    };

    return (
        <>
            <section className="dash-header">
                <div>
                    <h1 className="dash-title">Welcome Back, {header.userName}</h1>
                    <p className="dash-subtitle">{header.subtitle}</p>
                    <p className="dash-date">{header.date}</p>
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
                                {card.direction === "up" ? <img src="/miscellaneous/trending_up.png" alt="" /> : "▼"} {card.changePct}%
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
                    <div className="dash-chart-controls">
                        <button className="chart-filter">{revenue.period} ▾</button>
                        <button className="chart-expand"><img src="/miscellaneous/DiagonalArrow.png" alt="" /></button>
                    </div>
                </header>

                <div className="dash-chart-placeholder">
                    <RevenueChart points={revenue.points} />
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
                    <table className="overview-table">
                        <thead>
                            <tr>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {getHeaderIcon('Booking ID')}
                                        Booking ID
                                    </div>
                                </th>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {getHeaderIcon('Guest Name')}
                                        Guest Name
                                    </div>
                                </th>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {getHeaderIcon('Contact')}
                                        Contact
                                    </div>
                                </th>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {getHeaderIcon('Room Number')}
                                        Room Number
                                    </div>
                                </th>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {getHeaderIcon('Expected Check In')}
                                        Expected Check In
                                    </div>
                                </th>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {getHeaderIcon('Check-In Time')}
                                        Check-In Time
                                    </div>
                                </th>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {getHeaderIcon('Status')}
                                        Status
                                    </div>
                                </th>
                                <th>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {getHeaderIcon('Check-Out Time')}
                                        Check-Out Time
                                    </div>
                                </th>
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
                                    </td>                   <td>
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
                                    </td>                  </tr>
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
                    </footer>
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
        </>
    );
}
