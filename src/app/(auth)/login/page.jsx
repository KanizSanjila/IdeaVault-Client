'use client';

import { useState } from 'react';
import { Button, Input } from '@heroui/react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
// toast ইমপোর্ট করা না থাকলে আপনার প্রজেক্টের লাইব্রেরি অনুযায়ী ইমপোর্ট করে নেবেন (যেমন: import { toast } from 'sonner')

export default function Login() {
    // Forgot Password UI টগল করার জন্য স্টেট
    const [isForgotPassword, setIsForgotPassword] = useState(false);
 
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const loginData = Object.fromEntries(formData.entries());
        
        const { data, error } = await authClient.signIn.email({
            ...loginData,
            callbackURL: '/'
        });

        if (data) {
            redirect('/');
        }
        if (error) {
            toast.error(error.message);
        }
    };

    // Forgot Password সাবমিট হ্যান্ডলার (আপাতত UI তে মেসেজ দেখানোর জন্য)
    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('forgotEmail');
        
        // এখানে আপনার authClient-এর পাসওয়ার্ড রিসেট লজিক বসবে
        console.log("Reset link requested for:", email);
        
        // UI তে একটি ফিডব্যাক অ্যালার্ট বা টোস্ট দেখাতে পারেন
        alert(`A password reset link has been sent to ${email}`);
        setIsForgotPassword(false); // কাজ শেষে লগইন ফর্মে ফেরত নিয়ে যাবে
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google"
        });
    };

    return (
        <div className="min-h-[80vh] flex flex-col bg-slate-50">
            <div className="flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-8 relative overflow-hidden">
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                        {/* --- ডাইনামিক হেডার সেকশন --- */}
                        <div className="text-center space-y-2 relative">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                                {isForgotPassword ? (
                                    <>Reset <span className="text-blue-600">Password</span></>
                                ) : (
                                    <>Welcome <span className="text-blue-600">Back</span></>
                                )}
                            </h2>
                            <p className="text-slate-500 font-medium">
                                {isForgotPassword 
                                    ? "Enter your email to recover your account" 
                                    : "Continue your learning journey today"
                                }
                            </p>
                        </div>

                        {/* যদি Forgot Password স্টেট ট্রু (True) হয় */}
                        {isForgotPassword ? (
                            <form className="space-y-6" onSubmit={handleForgotPasswordSubmit}>
                                <div className="space-y-2">
                                    <label htmlFor="forgotEmail" className="text-sm font-bold text-slate-700 ml-1">
                                        Email Address
                                    </label>
                                    <Input
                                        id="forgotEmail"
                                        required
                                        placeholder="Enter your registered email"
                                        type="email"
                                        name="forgotEmail"
                                        className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                                    />
                                </div>

                               <Button
    color="primary"
    type="submit"
    className="w-full h-14 text-lg font-black rounded-2xl shadow-xl shadow-blue-600/20 group"
> 
                                    Send Reset Link <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <div className="text-center pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsForgotPassword(false)}
                                        className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-2"
                                    >
                                        <ArrowLeft className="w-4 h-4" /> Back to Login
                                    </button>
                                </div>
                            </form>
                        ) : (
                            /* মূল লগইন ফর্ম (পাসওয়ার্ড সহ) */
                            <>
                                <div className="space-y-4">
                                    <Button
                                        onClick={handleGoogleSignin}
                                        variant="bordered"
                                        className="w-full h-12 font-bold rounded-2xl border-slate-200 hover:bg-slate-50 transition-colors gap-3 text-black"
                                    >
                                        <Image
                                            width={20}
                                            height={20}
                                            src="https://www.google.com/favicon.ico"
                                            className="w-5 h-5"
                                            alt="Google"
                                        />
                                        Sign in with Google
                                    </Button>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-slate-100"></span>
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or with email</span>
                                    </div>
                                </div>

                                <form className="space-y-6" onSubmit={handleLogin}>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">
                                            Email Address
                                        </label>
                                        <Input
                                            id="email"
                                            required
                                            placeholder="Enter your email"
                                            type="email"
                                            name="email"
                                            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
                                            className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="password" className="text-sm font-bold text-slate-700 ml-1">
                                            Password
                                        </label>
                                        <Input
                                            id="password"
                                            required
                                            placeholder="••••••••"
                                            type="password"
                                            name="password"
                                            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
                                            className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                                        />
                                    </div>
                                    
                                    {/* এখানে লিংকের পরিবর্তে বাটন টগল ব্যবহার করা হয়েছে */}
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => setIsForgotPassword(true)}
                                            className="text-sm font-bold text-blue-600 hover:underline underline-offset-4 transition-all"
                                        >
                                            Forgot password?
                                        </button>
                                    </div>

                                    <Button
                                        color="primary"
                                        type="submit"
                                        className="w-full h-14 text-lg font-black rounded-2xl shadow-xl shadow-blue-600/20 group"
                                    >
                                        Sign In <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>

                                <div className="text-center pt-2">
                                    <p className="text-sm text-slate-500 font-medium">
                                        New to Idea?{' '}
                                        <Link
                                            href="/register"
                                            className="text-blue-600 font-black hover:underline underline-offset-4 transition-all"
                                        >
                                           Register
                                        </Link>
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}