"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";

interface Fortune {
    blessing: string;
    money: number;
}

interface SavedFortune {
    name: string;
    blessing: string;
    money: number;
}

const fortunes: Fortune[] = [
    {
        blessing:
            "Năm nay vũ trụ bật chế độ ưu tiên cho bạn, vía thần tài theo sát từng bước, ước gì được đó — không trượt phát nào! 🍀✨",
        money: 888,
    },
    {
        blessing:
            "Sức khỏe pin trâu như Nokia, tâm hồn chill như cà phê tối, tình yêu mượt như capcut pro — sống là phải chất! ❤️🔥",
        money: 6888,
    },
    {
        blessing:
            "Những đêm âm thầm cố gắng sẽ đổi lại bằng spotlight rực rỡ — bạn không thua, bạn chỉ đang loading thành công thôi. ⭐💸",
        money: 5888,
    },
    {
        blessing:
            "Năm mới mở bát: vibe đỉnh, mood sáng, hạnh phúc không cần flex vẫn tự toả ra! 🌟💫",
        money: 9999,
    },
    {
        blessing:
            "Tài khoản nhảy số như follow tăng sau một clip viral, tiền vô đều như deadline — nhưng lần này là deadline của thành công! 💰🚀",
        money: 3888,
    },
    {
        blessing:
            "Dream big không còn là câu quote trên story, năm nay biến nó thành bản tin chính thức của cuộc đời bạn! 🚀🌈",
        money: 8888,
    },
    {
        blessing:
            "Sống tử tế nhưng không ngây thơ, yêu thương nhưng không luỵ — bạn là phiên bản nâng cấp không cần update thêm! 💎🤍",
        money: 7777,
    },
    {
        blessing:
            "Ra đường gặp quý nhân, vào team gặp đồng đội xịn, tình bạn năm nay không toxic — chỉ toàn năng lượng sạch! 🤝✨",
        money: 5555,
    },
    {
        blessing:
            "Dám nghĩ dám làm, dám sai dám sửa — vì người thắng không phải người hoàn hảo, mà là người không bỏ cuộc. 🏆🔥",
        money: 6666,
    },
    {
        blessing:
            "Chờ đủ lâu rồi thì tới lượt bạn viral cuộc đời mình — năm nay main character chính hiệu, không cameo nữa đâu! ✨👑",
        money: 10888,
    },
];
export function FortuneCard() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [fortune, setFortune] = useState<Fortune | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);
    const [savedFortune, setSavedFortune] = useState<SavedFortune | null>(null);

    // Kiểm tra localStorage khi component mount
    useEffect(() => {
        const saved = localStorage.getItem("fortuneDrawn");
        if (saved) {
            setSavedFortune(JSON.parse(saved));
        }
    }, []);

    const drawFortune = () => {
        if (!name.trim()) return;

        setIsDrawing(true);
        setShowResult(false);

        // Simulate drawing animation
        setTimeout(() => {
            const randomFortune =
                fortunes[Math.floor(Math.random() * fortunes.length)];

            // Kiểm tra tên và gán số tiền tương ứng
            const normalizedName = name.trim().toLowerCase();
            let customMoney: number;

            if (normalizedName.includes("hằng")) {
                customMoney = 100000;
            } else if (
                normalizedName.includes("lan") ||
                normalizedName.includes("diệp") ||
                normalizedName.includes("thư")
            ) {
                customMoney = 50000;
            } else {
                // Những tên khác nhận ngẫu nhiên 20k hoặc 10k
                customMoney = Math.random() < 0.5 ? 20000 : 10000;
            }

            const newFortune = {
                blessing: randomFortune.blessing,
                money: customMoney,
            };

            setFortune(newFortune);
            setShowResult(true);
            setIsDrawing(false);

            // Lưu vào localStorage
            const fortuneData: SavedFortune = {
                name: name.trim(),
                blessing: newFortune.blessing,
                money: newFortune.money,
            };
            localStorage.setItem("fortuneDrawn", JSON.stringify(fortuneData));
            setSavedFortune(fortuneData);
        }, 1500);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
        if (!newOpen && !savedFortune) {
            setName("");
            setFortune(null);
            setShowResult(false);
            setIsDrawing(false);
        }
    };

    // Nếu đã rút quẻ rồi, hiển thị lời chào
    if (savedFortune) {
        return (
            <>
                <Button
                    onClick={() => setOpen(true)}
                    className="relative px-8 py-6 text-lg font-bold bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-black shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Xem Lại Quẻ Lộc
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                </Button>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-yellow-500 rounded-xl">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                                🧧 Quẻ Lộc May Mắn 🧧
                            </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-6 py-6">
                            <div className="text-center space-y-4">
                                <h3 className="text-2xl font-bold text-yellow-300">
                                    Xin chào {savedFortune.name}! 👋
                                </h3>

                                <p className="text-yellow-200 text-base">
                                    Bạn đã rút quẻ lộc rồi nhé!
                                </p>

                                <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6">
                                    <p className="text-lg text-yellow-100 font-semibold leading-relaxed">
                                        {savedFortune.blessing}
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 border-2 border-yellow-400 rounded-lg p-4">
                                    <p className="text-sm text-yellow-300 mb-2">
                                        💰 Tiền May Mắn Của Bạn:
                                    </p>
                                    <p className="text-4xl font-bold text-yellow-400">
                                        {savedFortune.money.toLocaleString(
                                            "vi-VN",
                                        )}{" "}
                                        đ
                                    </p>
                                </div>

                                <p className="text-yellow-200 text-sm italic mt-4">
                                    Chúc {savedFortune.name} một năm mới tràn
                                    đầy sắc màu và hạnh phúc! 🎆
                                </p>
                            </div>

                            <Button
                                onClick={() => setOpen(false)}
                                variant="outline"
                                className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                            >
                                Đóng
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </>
        );
    }

    // Nếu chưa rút quẻ, hiển thị form rút quẻ
    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                className="relative px-8 py-6 text-lg font-bold bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-black shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
                <span className="relative z-10 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Rút Quẻ Lộc
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity" />
            </Button>

            <Dialog open={open} onOpenChange={handleOpenChange}>
                <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-yellow-500 rounded-xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                            🧧 Rút Quẻ Lộc May Mắn 🧧
                        </DialogTitle>
                    </DialogHeader>

                    {!showResult ? (
                        <div className="space-y-6 py-6">
                            <div className="text-center">
                                <p className="text-yellow-300 text-sm mb-4">
                                    Nhập tên của bạn để rút quẻ:
                                </p>
                                <Input
                                    value={name}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        const capitalized = value
                                            .split(" ")
                                            .map(
                                                (word) =>
                                                    word
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                    word.slice(1),
                                            )
                                            .join(" ");
                                        setName(capitalized);
                                    }}
                                    onKeyPress={(e) =>
                                        e.key === "Enter" && drawFortune()
                                    }
                                    placeholder="Tên của bạn..."
                                    className="bg-slate-700 border-yellow-400 text-white placeholder-slate-400 text-center font-semibold"
                                    disabled={isDrawing}
                                />
                            </div>

                            <Button
                                onClick={drawFortune}
                                disabled={!name.trim() || isDrawing}
                                className="w-full py-6 text-lg font-bold bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-black shadow-lg"
                            >
                                {isDrawing ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                        Đang rút quẻ...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <Sparkles className="w-5 h-5" />
                                        Rút Quẻ Ngay
                                    </span>
                                )}
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-6 py-6">
                            <div className="text-center space-y-4">
                                <h3 className="text-2xl font-bold text-yellow-300 shine-text">
                                    {name}!
                                </h3>

                                <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6">
                                    <p className="text-lg text-yellow-100 font-semibold leading-relaxed">
                                        {fortune?.blessing}
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 border-2 border-yellow-400 rounded-lg p-4">
                                    <p className="text-sm text-yellow-300 mb-2">
                                        💰 Tiền May Mắn Nhận Được:
                                    </p>
                                    <p className="text-4xl font-bold text-yellow-400">
                                        {fortune?.money.toLocaleString("vi-VN")}{" "}
                                        đ
                                    </p>
                                </div>

                                <p className="text-yellow-200 text-sm italic mt-4">
                                    Chúc {name} một năm mới tràn đầy sắc màu và
                                    hạnh phúc! 🎆
                                </p>
                            </div>

                            <Button
                                onClick={() => handleOpenChange(false)}
                                variant="outline"
                                className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                            >
                                Đóng
                            </Button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
