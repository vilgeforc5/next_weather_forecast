import React from "react"

export const BottomSectionWrapper: 
    React.FC<React.PropsWithChildren<{ isExpanded: boolean }>>
    = ({ children, isExpanded }) => {
    return (
        <div className={`
                grid overflow-hidden
                ${isExpanded ? "grid-rows-1" : "grid-rows-[0]"}
        `}>
            <section className={`
                   black-white-gradient-lr-min text-slate-900 
                   max-h-72 overflow-y-scroll rounded-lg mt-1.5 relative
            `}>
                {children}
            </section>
        </div>
    )
}