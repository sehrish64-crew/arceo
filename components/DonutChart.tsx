'use client';

import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const DonutChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<ApexCharts | null>(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'donut',
        height: 280,
      },
      series: [40, 30, 15, 15], // Example values (you can adjust)
      labels: ['Booked', 'Cancelled', 'Pending', 'Others'],
      colors: ['#4CA6AF', '#144A6C', '#E6ECEC', '#F3F6F6'],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '22px',
                fontWeight: 600,
                color: '#0F172A', // dark text color
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: '24px',
                fontWeight: 700,
                color: '#0F172A',
                offsetY: 10,
                formatter: (val: number) => val.toString(),
              },
              total: {
                show: true,
                fontSize: '16px',
                fontWeight: 500,
                color: '#475569',
                formatter: () => 100, // example total
              },
            },
          },
        },
      },
      stroke: {
        show: true,
        width: 5,
        colors: ['#fff'],
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        y: {
          formatter: (val: number) => `${val} bookings`,
        },
      },
    };

    if (chartRef.current) {
      chartInstance.current = new ApexCharts(chartRef.current, options);
      chartInstance.current.render();
    }

    return () => {
      chartInstance.current?.destroy();
    };
  }, []);

  return (
    <div>
     
      <div ref={chartRef} />
      <p
        style={{
          fontSize: 18,
          fontWeight: 300,
          color: '#0F172A',
          textAlign: 'center',
          marginTop: 10,
        }}
      >
        Total Material Reorders
      </p>
      <p
        style={{
          fontSize: 32,
          fontWeight: 'normal',
          color: '#0F172A',
          textAlign: 'center',
          margin: 0,
        }}
      >
        700
      </p>
    </div>
  );
};

export default DonutChart;
