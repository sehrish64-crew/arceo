'use client';

import React from 'react';

const PatientSummary = () => {
  const data = [
    { label: 'New', value: 100, color: '#0A3A63' },
    { label: 'Existing', value: 100, color: '#82D1D1' },
    { label: 'Total', value: 100, color: '#D4EDED' },
  ];

  return (
    <div className="w-full p-3">
      {/* Title */}
      <h3 className="text-[#101828] text-2xl font-normal mb-8">Total Patients</h3>

      {/* Stats row with vertical separators */}
      <div className="flex justify-between mb-20">
        {data.map((item, index) => (
          <React.Fragment key={item.label}>
            <div className="flex-1 text-center px-4">
              <p className="text-sm text-[#64748B]">{item.label}</p>
              <p className="text-[#0F172A] text-3xl font-normal mb-2">{item.value}</p>

            </div>
            {index < data.length - 1 && (
              <div className="border-r border-[#E2E8F0] h-12 self-center"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Segmented bar - taller with more spacing */}
      <div className="mb-4">
        <div className="flex h-4 w-full overflow-hidden rounded-full bg-gray-100">
          {data.map((item, index) => (
            <div
              key={item.label}
              style={{
                width: `${(item.value / 300) * 100}%`,
                backgroundColor: item.color,
                marginLeft: index !== 0 ? '2px' : '0'
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-[#E2E8F0] pt-4"></div>
    </div>
  );
};

export default PatientSummary;