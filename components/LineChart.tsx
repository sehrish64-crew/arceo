'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const LineChart = () => {
  const series = [
    {
      name: 'Number of Sales',
      data: [75, 90, 65], // Values for Filling, Molar Extraction, Root Canal
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        borderRadius: 4,
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Filling', 'Molar Extraction', 'Root Canal'],
      labels: {
        style: {
          fontSize: '12px',
          colors: ['#0F172A', '#0F172A', '#0F172A'],
        },
      },
    },
    yaxis: {
      title: {
        text: 'Number of Sales',
        style: {
          fontSize: '12px',
          color: '#144A6C',
          fontWeight: 500,
        },
      },
      labels: {
        style: {
          fontSize: '12px',
          colors: '#64748B',
        },
      },
      min: 0,
      max: 100,
      tickAmount: 5,
    },
    colors: ['#0A3A63'],
    grid: {
      strokeDashArray: 4,
      borderColor: '#E2E8F0',
    },
    tooltip: {
      theme: 'light',
    },
  };

  return (
    <div className="w-[409px]">
      <h3 className="text-[#0F172A] text-2xl font-normal">Top Treatments</h3>
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default LineChart;
