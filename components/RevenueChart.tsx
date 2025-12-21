'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
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

export const revenueChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            displayColors: false,
            callbacks: {
                label: (ctx: any) => ` ${ctx.parsed.y}`,
            },
        },
    },
    scales: {
        x: {
            grid: {
                display: true,
                drawBorder: false,
                color: '#e5e7eb',
            },
            ticks: {
                color: '#9ca3af',
                font: { size: 11 },
            },
        },
        y: {
            min: 0,
            max: 12,
            grid: {
                display: true,
                drawBorder: false,
                color: '#e5e7eb',
            },
            ticks: {
                stepSize: 1,
                color: '#9ca3af',
                font: { size: 11 },
            },
        },
    },
};

type Props = {
    points: { month: string; value: number }[];
};

const RevenueChart: React.FC<Props> = ({ points }) => {
    const labels = points.map((p) => p.month);
    const values = points.map((p) => p.value);

    const data = {
        labels,
        datasets: [
            {
                label: 'Revenue',
                data: values,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
                pointBackgroundColor: '#2563eb',
                pointBorderColor: '#ffffff',
                pointRadius: 4,
                pointHoverRadius: 5,
                borderWidth: 2,
                tension: 0,
                fill: true,
            },
        ],
    };

    return (
        <div className="revenue-chart-container">
            <Line data={data} options={revenueChartOptions} />
        </div>
    );
};

export default RevenueChart;
