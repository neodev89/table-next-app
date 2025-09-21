import React from "react";

export default function LayoutHome ({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            {children}
        </div>
    )
}