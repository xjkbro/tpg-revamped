import React from "react";
import Video from "@/components/Video";
import Link from "next/link";

export default function Hero() {
    return (
        <>
            <nav className="h-[111vh] relative">
                <div className="w-full absolute top-0 left-0 overflow-hidden leading-none rotate-180 ">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block w-[101%] h-[300px]  -scale-x-100"
                    >
                        <path
                            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                            className="fill-[#232323]"
                        ></path>
                    </svg>
                </div>
                <Video />
                <div className="z-20 w-full h-full -translate-y-12 flex items-center justify-center relative text-white ">
                    <span className="font-bold text-[6rem]">TPG Gaming</span>
                    <Link className="text-[1.5rem]" href="/test">
                        [Beta]
                    </Link>
                </div>

                <div className="w-full absolute bottom-0 left-0 overflow-hidden leading-none ">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block w-[101%] h-[300px] "
                    >
                        <path
                            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                            className="fill-[#232323]"
                        ></path>
                    </svg>
                </div>
            </nav>
            <div className="w-full overflow-hidden leading-none rotate- ">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="relative block w-[101%] h-[150px]  -scale-x-100"
                >
                    <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        className="fill-[#232323]"
                    ></path>
                </svg>
            </div>
        </>
    );
}
