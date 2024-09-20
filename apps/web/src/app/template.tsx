import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Header";
import React from "react";

export default function Template({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}