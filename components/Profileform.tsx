// components/ProfileForm.tsx
import Image from "next/image";
import Singledatepicker from "../components/Singledatepicker"

export default function ProfileForm() {
  return (
    <div className="bg-white rounded-2xl p-6 space-y-8">
      {/* Personal Section */}
      <div>
        <h2 className="text-[#475467] font-medium">Personal</h2>
        <hr className="mt-1 mb-6 border-gray-200" />

        <div className="flex md:flex-row gap-6 flex-col">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/profilees.png"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </div>

          {/* Personal Form */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Number</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Language</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Qualification</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Specialty</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">License Number</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">License Expiration</label>
              <div className="relative">
                <Singledatepicker />
                <div className="absolute top-5 right-3 text-gray-500 pointer-events-none">
                  <svg
                    width={16}
                    height={18}
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 7.5H14.75M5 4.5V1.5M11 4.5V1.5M6.05 16.5H9.95C11.6302 16.5 12.4702 16.5 13.112 16.173C13.6765 15.8854 14.1354 15.4265 14.423 14.862C14.75 14.2202 14.75 13.3802 14.75 11.7V7.8C14.75 6.11984 14.75 5.27976 14.423 4.63803C14.1354 4.07354 13.6765 3.6146 13.112 3.32698C12.4702 3 11.6302 3 9.95 3H6.05C4.36984 3 3.52976 3 2.88803 3.32698C2.32354 3.6146 1.8646 4.07354 1.57698 4.63803C1.25 5.27976 1.25 6.11984 1.25 7.8V11.7C1.25 13.3802 1.25 14.2202 1.57698 14.862C1.8646 15.4265 2.32354 15.8854 2.88803 16.173C3.52976 16.5 4.36984 16.5 6.05 16.5Z"
                      stroke="#A1A5AA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinic Section */}
      <div>
        <h2 className="text-[#475467] font-medium">Clinic</h2>
        <hr className="mt-1 mb-6 border-gray-200" />

        <div className="flex md:flex-row gap-6 flex-col">
          {/* Clinic Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/clinic-logo.png"
              alt="Clinic Logo"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </div>

          {/* Clinic Form */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Website</label>
              <input
                type="url"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Number</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm text-gray-600 mb-1">Address</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
