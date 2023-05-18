"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const path = usePathname();
    if (path == "/") return <></>;
    return <div>Navbar</div>;
}
