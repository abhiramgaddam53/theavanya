'use client';

import { useState } from 'react';

const OverviewTable = ( {todayOverview }) => {
  const [currentPage, setCurrentPage] = useState(todayOverview.page || 1);
  const [pageSize, setPageSize] = useState(todayOverview.pageSize || 10);
  const totalResults = todayOverview.totalResults || 0;
  const totalPages = Math.ceil(totalResults / pageSize);
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalResults);
  const paginatedRows = todayOverview.rows?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  ) || [];

  const getStatusBg = (statusColor:any) => {
    if (!statusColor) return '#f3f4f6';
    const color = statusColor.toLowerCase();
    if (color.includes('green') || color === '#0d824b') return 'rgba(13, 130, 75, 0.1)';
    if (color.includes('yellow') || color === '#f8c313') return 'rgba(248, 195, 19, 0.1)';
    if (color.includes('purple') || color === '#5643c7') return 'rgba(86, 67, 199, 0.1)';
    if (color.includes('red') || color === '#cd3636') return 'rgba(205, 54, 54, 0.1)';
    if (color.includes('blue') || color === '#12607d') return 'rgba(18, 96, 125, 0.1)';
    return '#f3f4f6';
  };

  const handlePageSizeChange = (e:any) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); 
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="overview-table-wrapper">
      <table className="overview-table">
        <thead>
          <tr>
            <th>Booking ID</th>
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
          {paginatedRows.map((row:any) => (
            <tr key={row.bookingId}>
              <td>{row.bookingId}</td>
              <td>{row.guestName}</td>
              <td>{row.contact}</td>
              <td>{row.roomNumber}</td>
              <td>{row.expectedCheckIn}</td>

              <td>
                <div className="time-cell">
                  <span>{row.checkInTime || '-'}</span>
                  {row.checkInDelta && (
                    <span
                      className={`time-pill ${
                        row.checkInDelta.type === 'positive'
                          ? 'time-pill-positive'
                          : 'time-pill-negative'
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
                  <span>{row.checkOutTime || '-'}</span>
                  {row.checkOutDelta && (
                    <span
                      className={`time-pill ${
                        row.checkOutDelta.type === 'positive'
                          ? 'time-pill-positive'
                          : 'time-pill-negative'
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
          <select value={pageSize} onChange={handlePageSizeChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span style={{ color: '#48494C', marginLeft: '10px' }}>
            {startItem} to {endItem} of {totalResults} results
          </span>
        </div>

        <div className="overview-pagination">
          <button
            className="page-btn"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          <button
            className="page-btn"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </footer>
    </div>
  );
};

export default OverviewTable;
