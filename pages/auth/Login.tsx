import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        await router.push("/");
    };


    return (
        <>
            <Head>
                <title>Login - Dental Society</title>
            </Head>

            <div className="flex min-h-screen" style={{ margin: '10px' }}>
                {/* Left Side - Login Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 md:px-24 bg-white">
                    <div className="w-full max-w-md">
                        <div className="text-center">
                            <div className="flex justify-center">
                                <Image
                                    src="/Frame.png"
                                    alt="Dental Society Logo"
                                    width={200}
                                    height={100}
                                    className="rounded-xl object-contain"
                                    priority
                                />
                            </div>
                            <h1 className="text-2xl font-normal text-[#144A6C] mt-4">
                               Welcome back
                            </h1>
                            <p className="text-sm text-gray-500 mt-2">
                                Welcome back! Please enter your details.
                            </p>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <label htmlFor="" className="text-[#939393]">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="relative">
                                <label htmlFor="password" className="text-[#939393]">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="w-full mt-1 px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute bottom-3 right-3 flex items-center text-gray-500 z-10"
                                    // style={{ top: '50%', transform: 'translateY(-50%)' }}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <label className="flex items-center text-[#939393]">
                                    <input type="checkbox" className="mr-2" />
                                    Remember me
                                </label>
                                <a href="#" className="text-[#939393] hover:underline">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#144A6C] text-white py-3 rounded-lg"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Side - Full Image with Text */}
                <div className="hidden lg:block relative w-1/2 h-screen">
                    <Image
                        src="/doctor.png"
                        alt="Dental"
                        fill
                        className="object-cover rounded-xl"
                        priority
                    />

                </div>
            </div>

        </>
    );
}
