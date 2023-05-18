"use client";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

export default function Video() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        setTimeout(() => {
            if (videoRef.current != null) videoRef.current.play();
        }, 0);
    }, []);
    return (
        <video
            className={clsx(
                "absolute top-0 left-0 w-full h-[111vh] object-cover opacity-80 -z-10"
            )}
            ref={videoRef}
            width="250"
            loop
            muted
        >
            <source src="gamers.mp4" type="video/mp4"></source>
        </video>
    );
}
