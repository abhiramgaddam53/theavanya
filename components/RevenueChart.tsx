'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

type Props = {
    points: { label: string; value: number; period?: string }[];
};

const RevenueChart: React.FC<Props> = ({ points }) => {
    const labels = points.map(p => p.label);
    const values = points.map(p => p.value);

    // Fix: Pass values to options or calculate dynamically
    const revenueChartOptions: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                displayColors: false,
                callbacks: {
                    label: (ctx) => `₹${ctx.parsed.y !== null ? ctx.parsed.y.toLocaleString('en-IN') : '0'}k`,
                },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    color: '#9ca3af',
                    font: { size: 11 },
                },
            },
            y: {
                min: values.length > 0 ? Math.min(...values) - 20 : 0,
                max: values.length > 0 ? Math.max(...values) + 20 : 100,
                ticks: {
                    stepSize: 25,
                    callback: (value) => `₹${value}k`,
                    color: '#9ca3af',
                    font: { size: 11 },
                },
                grid: {
                    color: '#f1f5f9',
                },
            },
        },
        animation: {
            duration: 1000,
            easing: 'easeOutQuart',
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Revenue',
                data: values,
                borderColor: '#2563eb',
                borderWidth: 3,
                tension: 0,
                fill: true,
                backgroundColor: (ctx: any) => {
                    const chart = ctx.chart;
                    const { ctx: canvasCtx, chartArea } = chart;
                    if (!chartArea) return null;

                    const patternCanvas = document.createElement('canvas');
                    patternCanvas.width = 12;
                    patternCanvas.height = 12;

                    const pCtx = patternCanvas.getContext('2d')!;
                    pCtx.fillStyle = 'rgba(37, 99, 235, 0.15)';
                    pCtx.fillRect(0, 0, 4, 12); // Vertical stripes
                    pCtx.fillRect(8, 0, 4, 12);

                    return canvasCtx.createPattern(patternCanvas, 'repeat');
                },
                pointRadius: 5,
                pointHoverRadius: 8,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#2563eb',
                pointBorderWidth: 2,
                pointHoverBackgroundColor: '#2563eb',
                pointHoverBorderColor: '#ffffff',
                pointHoverBorderWidth: 2,
            },
        ],
    };

    return (
        <div className="revenue-chart-container h-80 w-full p-4 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100">
            {points.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                        📊
                    </div>
                    <h3 className="text-lg font-semibold mb-1">No Data Available</h3>
                    <p className="text-sm">Select a different period to view revenue</p>
                </div>
            ) : (
                <Line data={data} options={revenueChartOptions} />
            )}
        </div>
    );
};

export default RevenueChart;
