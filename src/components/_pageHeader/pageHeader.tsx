import { InputHeader } from "./headerInput/headerInput"

export const PageHeader = () => {
    return (
        <header
            className="header flex flex-col md:flex-row justify-between items-start
                       outer-padding"
        >
            <h1
                className="header-text text-3xl lg:text-4xl xl:text-5xl
                           mr-6
                         text-zinc-300"
            >
                Weather
                <i className='h-3 w-3 lg:h-4 lg:w-4 inline-block bg-orange-500 rounded-full animate-pulse'>
                </i>
                com
            </h1>
            <InputHeader />
        </header>
    )
}