"use client";

import React, { useState } from "react";
import {
  Pencil,
  MoreVertical,
  Upload,
  SlidersHorizontal,
} from "lucide-react";
import { AdminTable, Column } from "@/app/admin/components/AdminTable";

interface FrontDeskRow {
  roomNumber: string;
  roomType: string;
  status: string;
  guestName: string;
  checkOutTime: string;
  checkOutDelay?: string;
  nextCheckIn: string;
  occupancy: string;
  houseKeeping: string;
  id: string;
  [key: string]: string | undefined;
}

// Mock data
const MOCK_FRONT_DESK_DATA: FrontDeskRow[] = Array.from({ length: 20 }).map(
  (_, i) => {
    const statusOptions = [
      "Occupied",
      "Available",
      "Cleaning",
      "Reserved",
      "Out-Of Order",
    ];
    const hkOptions = ["Do-Not Disturb", "Clean", "In-Progress", "Dirty"];
    const types = [
      "Canopy Villa",
      "Estate Retreat",
      "Avanya Residence",
      "Skyline Suite",
    ];

    const status = statusOptions[i % statusOptions.length];

    return {
      id: `fd-${i}`,
      roomNumber: `20${i % 9} - ${
        i % 3 === 0 ? "A" : i % 3 === 1 ? "B" : "C"
      }`,
      roomType: types[i % types.length],
      status,
      guestName:
        status === "Occupied" ||
        status === "Cleaning" ||
        status === "Reserved"
          ? "Pradhyumn Dhondi"
          : "-",
      checkOutTime: "11:00:00",
      checkOutDelay: i % 3 === 0 ? "+00:00:00" : undefined,
      nextCheckIn: "02:00:00",
      occupancy:
        status === "Occupied" || status === "Reserved" ? "1 A, 0 C" : "0 A, 0 C",
      houseKeeping: hkOptions[i % hkOptions.length],
    };
  }
);

const getStatusColor = (status: string) => {
  switch (status) {
    case "Occupied":
      return { bg: "#eef2ff", text: "#314cdd" };
    case "Available":
      return { bg: "#ecfdf5", text: "#059669" };
    case "Cleaning":
      return { bg: "#fefce8", text: "#ca8a04" };
    case "Reserved":
      return { bg: "#fff7ed", text: "#c2410c" };
    case "Out-Of Order":
      return { bg: "#fef2f2", text: "#dc2626" };
    default:
      return { bg: "#f3f4f6", text: "#374151" };
  }
};

const getHKStatusColor = (status: string) => {
  switch (status) {
    case "Do-Not Disturb":
      return { bg: "#fee2e2", text: "#991b1b" };
    case "Clean":
      return { bg: "#ecfdf5", text: "#059669" };
    case "In-Progress":
      return { bg: "#fffbeb", text: "#b45309" };
    case "Dirty":
      return { bg: "#eff6ff", text: "#1d4ed8" };
    default:
      return { bg: "#f3f4f6", text: "#374151" };
  }
};

export default function FrontDeskPage() {
  const [activeTab, setActiveTab] = useState("All Rooms");
  const [years, setYears] = useState<number | "">("");
  const [adultyears, setAdultYears] = useState<number | "">("");
  const [showOnlyAvailableClean, setShowOnlyAvailableClean] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState<string>("All");

  // Data filter: tab + availability filter + room type
  const filteredData = MOCK_FRONT_DESK_DATA
    .filter((item) => {
      if (activeTab === "All Rooms") return true;
      return item.roomType.includes(activeTab);
    })
    .filter((item) => {
      if (!showOnlyAvailableClean) return true;

      const hk = item.houseKeeping;
      const matchesStatusAndHK =
        item.status === "Available" && (hk === "Clean" || hk === "In-Progress");

      const matchesRoomType =
        selectedRoomType === "All" || item.roomType === selectedRoomType;

      return matchesStatusAndHK && matchesRoomType;
    });

  const columns: Column<FrontDeskRow>[] = [
    { key: "roomNumber", header: "Room No." },
    { key: "roomType", header: "Room Type" },
    {
      key: "status",
      header: "Status",
      render: (row) => {
        const style = getStatusColor(row.status);
        return (
          <span
            className="status-pill"
            style={{ backgroundColor: style.bg, color: style.text }}
          >
            {row.status}
          </span>
        );
      },
    },
    { key: "guestName", header: "Current Guest" },
    {
      key: "checkOutTime",
      header: "Check-Out Time",
      render: (row) => (
        <>
          {row.checkOutTime}
          {row.checkOutDelay && (
            <span className="ml-2 text-[10px] text-red-500 bg-red-50 px-1 py-0.5 rounded">
              {row.checkOutDelay}
            </span>
          )}
        </>
      ),
    },
    { key: "nextCheckIn", header: "Next Check-In" },
    { key: "occupancy", header: "Occupancy" },
    {
      key: "houseKeeping",
      header: "House-Keeping",
      render: (row) => {
        const style = getHKStatusColor(row.houseKeeping);
        return (
          <span
            className="status-pill"
            style={{ backgroundColor: style.bg, color: style.text }}
          >
            {row.houseKeeping}
          </span>
        );
      },
    },
    {
      key: "actions",
      header: "Actions",
      sortable: false,
      render: () => (
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "#6B7280",
            }}
          >
            <Pencil size={16} />
          </button>
          <button
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "#6B7280",
            }}
          >
            <MoreVertical size={16} />
          </button>
        </div>
      ),
    },
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

      {/* Stat Cards */}
      <section className="grid grid-cols-3 gap-6 mb-8">
        <div className="rounded-2xl p-5 border border-blue-100 bg-gradient-to-l from-blue-50/80 to-blue-50/20 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[15px] font-medium text-gray-600">
              Occupied Rooms
            </span>
            <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
          </div>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-semibold text-gray-800">32</span>
            <span className="text-xs font-medium text-blue-600">
              +10% from last month
            </span>
          </div>
        </div>

        <div className="rounded-2xl p-5 border border-green-100 bg-gradient-to-l from-green-50/80 to-green-50/20 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[15px] font-medium text-gray-600">
              Available Rooms
            </span>
            <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
          </div>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-semibold text-gray-800">12</span>
            <span className="text-xs font-medium text-green-600">
              +10% from last month
            </span>
          </div>
        </div>

        <div className="rounded-2xl p-5 border border-red-100 bg-gradient-to-l from-red-50/80 to-red-50/20 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[15px] font-medium text-gray-600">
              Blocked Rooms
            </span>
            <MoreVertical size={18} className="text-gray-400 cursor-pointer" />
          </div>
          <div className="flex justify-between items-end">
            <span className="text-3xl font-semibold text-gray-800">8</span>
            <span className="text-xs font-medium text-red-600">
              -20% This Month
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="overview-section font-poppins">
        {/* Tabs */}
        <div className="flex justify-between items-center pb-4 mb-4">
          <div className="flex gap-6">
            {[
              "All Rooms",
              "Canopy Villa",
              "Estate Retreat",
              "Avanya Residence",
              "Skyline Suite",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm cursor-pointer font-medium pb-4 -mb-4 transition-colors ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
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
        <div className="grid grid-cols-12 gap-3 mb-6 items-end">
          <div className="col-span-2">
            <label className="text-xs font-medium text-gray-500 mb-1 block">
              Check in
            </label>
            <input
              type="date"
              className="w-full pl-3 pr-2 py-2 border border-gray-200 rounded-lg text-sm"
            />
          </div>

          <div className="col-span-2">
            <label className="text-xs font-medium text-gray-500 mb-1 block">
              Check out
            </label>
            <input
              type="date"
              className="w-full pl-3 pr-2 py-2 border border-gray-200 rounded-lg text-sm"
            />
          </div>

          {/* Room Type with state */}
          <div className="col-span-2">
            <label className="text-xs font-medium text-gray-500 mb-1 block">
              Room Type
            </label>
            <div className="relative">
              <select
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm appearance-none bg-white"
                value={selectedRoomType}
                onChange={(e) => setSelectedRoomType(e.target.value)}
              >
                <option value="All">All room types</option>
                <option value="Canopy Villa">Canopy Villa</option>
                <option value="Estate Retreat">Estate Retreat</option>
                <option value="Avanya Residence">Avanya Residence</option>
                <option value="Skyline Suite">Skyline Suite</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <span className="border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-400" />
              </div>
            </div>
          </div>

          {/* Adult */}
          <div className="col-span-2">
            <label className="text-xs font-medium text-gray-500 mb-1 block">
              Adult
            </label>
            <div className="relative inline-flex w-full">
              <input
                type="number"
                min={0}
                max={100}
                value={adultyears}
                onChange={(e) => {
                  const val =
                    e.target.value === ""
                      ? ""
                      : Math.min(10, Math.max(0, Number(e.target.value)));
                  setAdultYears(val as number | "");
                }}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm appearance-none bg-white"
                placeholder="Older than 12 years"
              />
              <div className="absolute inset-y-0 right-2 flex flex-col justify-center gap-1 text-gray-400">
                <button
                  type="button"
                  onClick={() =>
                    setAdultYears((prev) =>
                      Math.min(10, (Number(prev) || 0) + 1)
                    )
                  }
                  style={{ fontSize: "8px" }}
                  className="w-5 h-4 flex items-center justify-center hover:text-gray-700"
                >
                  ▲
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setAdultYears((prev) =>
                      Math.max(0, (Number(prev) || 0) - 1)
                    )
                  }
                  style={{ fontSize: "8px" }}
                  className="w-5 h-4 flex items-center justify-center hover:text-gray-700"
                >
                  ▼
                </button>
              </div>
            </div>
          </div>

          {/* Children */}
          <div className="col-span-2">
            <label className="text-xs font-medium text-gray-500 mb-1 block">
              Children
            </label>
            <div className="relative inline-flex w-full">
              <input
                type="number"
                min={0}
                max={100}
                value={years}
                onChange={(e) => {
                  const val =
                    e.target.value === ""
                      ? ""
                      : Math.min(10, Math.max(0, Number(e.target.value)));
                  setYears(val as number | "");
                }}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm appearance-none bg-white"
                placeholder="0 - 10 years"
              />
              <div className="absolute inset-y-0 right-2 flex flex-col justify-center gap-1 text-gray-400">
                <button
                  type="button"
                  onClick={() =>
                    setYears((prev) =>
                      Math.min(10, (Number(prev) || 0) + 1)
                    )
                  }
                  style={{ fontSize: "8px" }}
                  className="w-5 h-4 flex items-center justify-center hover:text-gray-700"
                >
                  ▲
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setYears((prev) =>
                      Math.max(0, (Number(prev) || 0) - 1)
                    )
                  }
                  style={{ fontSize: "8px" }}
                  className="w-5 h-4 flex items-center justify-center hover:text-gray-700"
                >
                  ▼
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="col-span-2 mt-4 flex gap-2">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm transition-colors cursor-pointer"
              onClick={() => setShowOnlyAvailableClean(true)}
            >
              Check Availability
            </button>
          </div>
        </div>

        {/* Table */}
        <AdminTable key={activeTab} data={filteredData} columns={columns} />
      </div>
    </div>
  );
}
