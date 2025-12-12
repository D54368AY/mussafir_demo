import { HeroProps } from "./Hero.types";
import { Autocomplete } from "./Autocomplete";

export const Hero = ({ children }: HeroProps) => {
    return (
        <div className="p-[10px] w-full h-full relative">
            <div
                className="relative w-full h-full bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat"
            >
                <div className="relative">
                    <header className="py-[40px] px-[80px]">
                        <div className="inline-flex items-baseline text-[32px] font-semibold tracking-[-0.5px] z-[99]">
                            <img src="/logo.svg" className="z-[99]" />
                        </div>
                    </header>

                    <main className="flex justify-between items-start px-[80px] pt-[40px] pb-[120px] gap-[60px] max-w-[1600px] mx-auto">
                        <div className="flex-1 max-w-[700px] z-[99]">
                            <img src="/aeroplane.svg" className="h-[92px] w-auto" />

                            <div className="mt-[20px]">
                                <div className="flex mb-[30px]">
                                    <div className="w-full border border-[#EBEBEB] rounded-[10px]">
                                        <div className="py-[16px] px-[20px] flex items-center gap-[14px] bg-transparent cursor-pointer transition-all relative">
                                            <img
                                                src="/indiaFlag.svg"
                                                className="w-[36px] h-[36px] rounded-full object-cover shrink-0"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <label className="block text-[12px] text-[#64748b] mb-[4px] font-medium uppercase tracking-[0.5px]">
                                                    Nationality
                                                </label>
                                                <select className="w-full border-none outline-none text-[16px] text-[#0f172a] font-semibold bg-transparent cursor-pointer appearance-none pr-[20px]">
                                                    <option>Indian</option>
                                                </select>
                                            </div>

                                            <div className="absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none">
                                                <div
                                                    className="w-0 h-0 
                                        border-l-[5px] border-l-transparent 
                                        border-r-[5px] border-r-transparent 
                                        border-t-[6px] border-t-[#003669]"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full border border-[#EBEBEB] rounded-[10px] ml-[20px]">
                                        <div className="py-[16px] px-[20px] flex items-center gap-[14px] bg-transparent cursor-pointer transition-all relative">
                                            <img
                                                src="/dubaiFlag.svg"
                                                className="w-[36px] h-[36px] rounded-full object-cover shrink-0"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <label className="block text-[12px] text-[#64748b] mb-[4px] font-medium uppercase tracking-[0.5px]">
                                                    Residency
                                                </label>
                                                <select className="w-full border-none outline-none text-[16px] text-[#0f172a] font-semibold bg-transparent cursor-pointer appearance-none pr-[20px]">
                                                    <option>United Arab Emirates</option>
                                                </select>
                                            </div>

                                            <div className="absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none">
                                                <div
                                                    className="w-0 h-0 
                                        border-l-[5px] border-l-transparent 
                                        border-r-[5px] border-r-transparent 
                                        border-t-[6px] border-t-[#003669]"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-[20px]">
                                    <div className="flex flex-col items-center">
                                        <button className="w-[80px] h-[80px] rounded-[10px] flex items-center justify-center border-[2px] border-white bg-[#e6f2ff] cursor-pointer">
                                            <div className="w-[56px] h-[56px] flex items-center justify-center">
                                                <img src="/location.svg" />
                                            </div>
                                        </button>
                                        <span className="text-[16px] font-normal text-[#00366B] tracking-[0.2px] mt-[14px]">
                                            Destination
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <button className="w-[80px] h-[80px] rounded-[10px] flex items-center justify-center border-[2px] border-white bg-[#e6f2ff] cursor-pointer">
                                            <div className="w-[56px] h-[56px] flex items-center justify-center">
                                                <img src="/visaIcon.svg" />
                                            </div>
                                        </button>
                                        <span className="text-[16px] font-normal text-[#00366B] tracking-[0.2px] mt-[14px]">
                                            Visa mode
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <button className="w-[80px] h-[80px] rounded-[10px] flex items-center justify-center border-[2px] border-white bg-[#e6f2ff] cursor-pointer">
                                            <div className="w-[56px] h-[56px] flex items-center justify-center">
                                                <img src="/calender.svg" />
                                            </div>
                                        </button>
                                        <span className="text-[16px] font-normal text-[#00366B] tracking-[0.2px] mt-[14px]">
                                            Travel date
                                        </span>
                                    </div>
                                </div>

                                <div className="relative mt-[20px]">
                                    <Autocomplete />
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-0 right-0 bottom-0 z-[1]">
                            <div className="w-full h-full relative">
                                <img
                                    src="/bgGrid.svg"
                                    className="w-full h-full object-contain rounded-[24px] transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer blur-[1px]"
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <footer className="mt-[-30px] z-[999] w-full flex justify-center">
                <div className="flex items-center gap-[16px] px-[32px] py-[16px] bg-white rounded-[60px] shadow-[0_12px_48px_rgba(0,0,0,0.12),0_0_1px_rgba(0,0,0,0.05)] cursor-pointer transition-all z-[999]">
                    <div className="w-[36px] h-[36px] flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
                                fill="url(#gradient)"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="22">
                                    <stop offset="0%" stopColor="#667eea" />
                                    <stop offset="100%" stopColor="#764ba2" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="text-[16px] bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-semibold tracking-[0.2px]">
                        Plan your next adventure, and let AI simplify your visa
                    </span>
                    <svg className="w-[24px] h-[24px] text-[#667eea]" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M5 12h14m-7-7l7 7-7 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </footer>
        </div>
    );
};
