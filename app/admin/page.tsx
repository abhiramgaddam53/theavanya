'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Image from 'next/image';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const STATIC_EMAIL = 'info@asterisks.media';
    const STATIC_PASSWORD_HASH = 'd9127688556da48f5166b00a19366cfaf269beba01b0486fa9236e3daa070dc3';

    const hashPassword = async (pwd: string) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(pwd);
        const hash = await crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(hash))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('');
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (email.trim() !== STATIC_EMAIL) {
            setError('Invalid credentials');
            return;
        }

        try {
            const inputHash = await hashPassword(password);
            if (inputHash === STATIC_PASSWORD_HASH) {
                Cookies.set('admin_auth', 'true', { expires: 1 });
                router.push('/admin/dashboard');
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred during login');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f3f4f6]" style={{ fontFamily: '"Inter", system-ui, -apple-system, sans-serif' }}>
            <div className="bg-white rounded-3xl p-10 w-full max-w-[440px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#e5e7eb]">
                <div className="flex flex-col items-center mb-8 text-center">
                    <div className="flex items-center justify-center">
                        <Image src="/logos/black.png" alt="Logo" className="w-full h-auto" width={120} height={120} />
                    </div>
                </div>
                <form onSubmit={handleLogin} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-[#2b2f38]">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="p-2 px-4 rounded-sm border border-[#e5e7eb] bg-[#f9fafb] text-[#161618] text-sm outline-none transition-all duration-200 focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] placeholder-[#9ca3af]"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium text-[#2b2f38]">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            className="p-2 px-4 rounded-sm border border-[#e5e7eb] bg-[#f9fafb] text-[#161618] text-sm outline-none transition-all duration-200 focus:border-[#2563eb] focus:bg-white focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)] placeholder-[#9ca3af]"
                        />
                    </div>
                    {error && (
                        <div className="text-[#da3e33] bg-[#feeceb] p-2.5 rounded-lg text-[13px] text-center font-medium">
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="mt-2 p-2 rounded-sm border-none bg-[#2563eb] text-white text-[15px] font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#1d4ed8]"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
