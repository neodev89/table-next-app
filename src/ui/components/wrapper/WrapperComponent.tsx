import React from "react"

export default function WrapperComponent({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div style={{
            backgroundColor: "white",
            height: "100vh",
            width: "100vw",
            display: "flex",
        }}>
            {children}
        </div>
    )
}