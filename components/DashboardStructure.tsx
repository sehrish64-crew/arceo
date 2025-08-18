'use client';
// import dynamic from "next/dynamic";
// import DonutChart from "@/components/DonutChart";
// import PatientSummary from "@/components/PatientSummary";

export default function DashboardStructure() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

            {/* ===== Top Row ===== */}
            <div className="bg-white rounded-lg shadow-md p-4 min-h-[300px] border border-[]">
                <h3 className="text-2xl">Total Booking</h3>
                {/* <DonutChart /> */}
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 min-h-[300px] border border-[#1018280D]">
                <h3 className="text-2xl">Top Material Reorders</h3>
                {/* <DonutChart /> */}
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 max-h-[450px] overflow-y-auto border border-[#1018280D]">
                <h3 className="text-[#144A6C] text-lg font-semibold mb-3">
                    Upcoming Appointments
                </h3>
                <hr className="mb-3" />

                {/* Today Section */}
                <span className="text-[#56555C] block mb-2">Today</span>
                {[...Array(4)].map((_, i) => (
                    <div key={`today-${i}`} className="rounded p-3 hover:bg-[#CEE5E4] mb-2">
                        <div className="flex justify-between mb-1">
                            <div className="text-[#144A6C] font-medium text-md">Root Canal</div>
                            <p className="text-[#606061]">Chandler Bing</p>
                        </div>
                        <div className="flex justify-between text-sm text-[#606061]">
                            <div>10:00am - 11:00am</div>
                            <div>Nov 01, 2024</div>
                        </div>
                    </div>
                ))}

                <hr className="my-4" />

                {/* 12 July Section */}
                <span className="text-[#56555C] block mb-2">12 July</span>
                {[...Array(2)].map((_, i) => (
                    <div key={`july12-${i}`} className="rounded p-3 hover:bg-[#CEE5E4] mb-2">
                        <div className="flex justify-between mb-1">
                            <div className="text-[#144A6C] font-medium text-md">Cleaning</div>
                            <p className="text-[#606061]">Joey Tribbiani</p>
                        </div>
                        <div className="flex justify-between text-sm text-[#606061]">
                            <div>2:00pm - 3:00pm</div>
                            <div>Jul 12, 2024</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ===== Bottom Row ===== */}
            <div className="bg-white rounded-lg shadow-md p-4 min-h-[250px] flex items-center justify-center text-gray-600">
               {/* <PatientSummary/> */}
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 min-h-[250px] flex items-center justify-center text-gray-600">
                Chart: Top Treatments
            </div>

            <div className="hidden md:block"></div> {/* For spacing/alignment */}
        </div>
    );
}
