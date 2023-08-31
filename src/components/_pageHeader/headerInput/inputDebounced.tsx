import React, { useEffect, useState, useRef } from "react";
import { useDebounce } from "@/hooks/useDebounce";


interface InputDebounced {
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputDebounced: React.FC<InputDebounced> = ({ setQuery, setIsExpanded }) => {
    const [input, setInput] = useState("")
    const debouncedInput = useDebounce(input, 500)
    const inputRef = useRef<HTMLInputElement>(null)

    // every 500 seconds update outer query state if changed
    useEffect(() => {
        setQuery(debouncedInput.trim())
    }, [debouncedInput, setQuery])

    // on outer click remove grow on input and clear input
    useEffect(() => {
        function handleOuterClick(e: MouseEvent) {
            if (e.target instanceof HTMLElement) {
                if (e.target.closest("div.header__input") === null) {
                    setQuery("")
                    setInput("")
                    setIsExpanded(false)
                }
            }
        }

        window.addEventListener("click", handleOuterClick)
        return () => window.removeEventListener("click", handleOuterClick)
    }, [setIsExpanded, setQuery])

    return (
        <section className="relative w-full">
            <input
                ref={inputRef}
                placeholder="Найти город"
                className=" w-full p-1 md:p-2 pl-3 md:pl-4 
                            text-slate-400
                            h-10  lg:h-12 
                            lg:text-lg
                            shadow-black shadow-lg
                            focus:shadow-md focus:shadow-orange-700
                            outline-none rounded-lg black-white-gradient-lr
                          placeholder:text-slate-400/80 transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => {
                    setIsExpanded(true)
                }}
            />
            {/* МОЖНО ДОБАВИТЬ ФИЧУ - ПО КЛИКУ ИЛИ ENTER ВСТАВЛЯТЬ ПЕРВЫЙ ЭЛЕМЕНТ В СПИСКЕ АВТОКОМПЛИТА. */}
            <svg className="w-8 h-8 animate-wiggle pause hover:running  
                            absolute 
                            cursor-pointer active:bg-slate-700 rounded-lg p-1
                            right-1 lg:right-2 top-1 lg:top-2
                            text-slate-500"
                onClick={() => {
                    if (inputRef.current) {
                        inputRef.current.focus()
                    }
                }}
                xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </section>
    )
}