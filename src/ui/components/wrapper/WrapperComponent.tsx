import React from "react"

export default function WrapperComponent({ 
    children 
} : {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}