'use client';

import React from 'react';

const PatientSummary = () => {
  const data = [
    { label: 'New', value: 100, color: '#0A3A63' },
    { label: 'Existing', value: 100, color: '#82D1D1' },
    { label: 'Total', value: 100, color: '#D4EDED' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full max-w-sm">
      <h3 className="text-[#0F172A] text-sm font-medium mb-6">Total Patients</h3>

      <div className="flex justify-between mb-6">
        {data.map((item) => (
          <div key={item.label} className="flex-1 text-center">
            <p className="text-[#0F172A] text-xl font-semibold">{item.value}</p>
            <div className="flex justify-center items-center gap-1 mt-1">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-xs text-[#64748B]">{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom segmented bar */}
      <div className="flex h-3 w-full overflow-hidden rounded-md">
        {data.map((item) => {
          const widthPercent = (item.value / total) * 100;
          return (
            <div
              key={item.label}
              style={{
                width: `${widthPercent}%`,
                backgroundColor: item.color,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PatientSummary;
