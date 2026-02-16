"use client";

import { useEffect, useState } from "react";
import { Fireworks } from "@/components/fireworks";
import { FortuneCard } from "@/components/fortune-card";

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-black">
            {/* Fireworks background */}
            <Fireworks />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-yellow-900/5 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
                {/* Main content container */}
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    {/* Title section */}
                    <div className="space-y-4 animate-fade-in">
                        {/* Year indicator */}
                        <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-yellow-500/20 border border-yellow-400/50">
                            <p className="text-yellow-300 font-semibold text-sm tracking-widest">
                                🎆 CHÚC MỪNG NĂM MỚI 2026 🎆
                            </p>
                        </div>

                        {/* Main title */}
                        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-400 via-yellow-300 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
                            Thịnh Vượng & May Mắn
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-yellow-200 font-semibold">
                            Văn Són xin chúc bạn một năm mới tràn đầy sức khỏe,
                            tài lộc, tình yêu và thành công! 🎉
                        </p>

                        {/* Decorative elements */}
                        <div className="flex justify-center gap-4 mt-8 text-3xl md:text-4xl">
                            <span
                                className="animate-bounce"
                                style={{ animationDelay: "0s" }}
                            >
                                🧧
                            </span>
                            <span
                                className="animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                            >
                                ✨
                            </span>
                            <span
                                className="animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                            >
                                🎆
                            </span>
                            <span
                                className="animate-bounce"
                                style={{ animationDelay: "0.3s" }}
                            >
                                ✨
                            </span>
                            <span
                                className="animate-bounce"
                                style={{ animationDelay: "0.4s" }}
                            >
                                🧧
                            </span>
                        </div>
                    </div>

                    {/* Description section */}
                    <div className="space-y-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur border border-yellow-400/20 rounded-2xl p-8 md:p-12">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-yellow-300">
                                ✨ Rút Quẻ May Mắn ✨
                            </h2>
                            <p className="text-gray-100 leading-relaxed">
                                Hãy nhập tên của bạn và rút một quẻ lộc may mắn
                                từ những lời chúc tốt lành nhất từ trái tim. Quẻ
                                sẽ mang đến cho bạn một lời chúc ý nghĩa và một
                                món quà may mắn.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                            <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
                                <p className="text-red-200 font-semibold">
                                    🎯 Sức Khỏe
                                </p>
                                <p className="text-red-100 text-xs mt-1">
                                    Năm mới tươi tắn
                                </p>
                            </div>
                            <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
                                <p className="text-yellow-200 font-semibold">
                                    💰 Tài Lộc
                                </p>
                                <p className="text-yellow-100 text-xs mt-1">
                                    May mắn dồi dào
                                </p>
                            </div>
                            <div className="bg-pink-500/10 border border-pink-400/30 rounded-lg p-4">
                                <p className="text-pink-200 font-semibold">
                                    ❤️ Tình Yêu
                                </p>
                                <p className="text-pink-100 text-xs mt-1">
                                    Yêu thương tình cảm
                                </p>
                            </div>
                            <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
                                <p className="text-green-200 font-semibold">
                                    🌟 Thành Công
                                </p>
                                <p className="text-green-100 text-xs mt-1">
                                    Mục tiêu thành hiện
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Fortune button */}
                    <div className="pt-8">
                        <FortuneCard />
                    </div>

                    {/* Footer message */}
                    <div className="text-center text-yellow-100 text-sm md:text-base">
                        <p>Năm mới, hy vọng mới, may mắn mới 🌅</p>
                        {/* <p className="text-gray-400 mt-2">Cộng đồng chúng tôi gửi những lời chúc tốt lành nhất đến bạn</p> */}
                    </div>
                </div>

                {/* Floating particles effect */}
                <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/10 to-transparent" />
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
            `}</style>
        </main>
    );
}
