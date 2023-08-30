import React, {useState} from "react";

import { InputDebounced } from "./inputDebounced";
import { BottomSectionWrapper } from "./bottomSectionWrapper";
import { Autocomplete } from "./autoComplete";
import { SearchHistory } from "./searchHistory";

// Selected location is dispatched to redux store.

export const InputHeader: React.FC = () => {
    // expand AutocompleteSection/SearchHistorySection 
    const [isExpanded, setIsExpanded] = useState(false)
    // debounced and controlled by InputDebounced
    const [query, setQuery] = useState("")

    return (
        <div
            className={`header__input
                        text-zinc-950 transition-all h-10 
                        mt-1.5 md:mt-0 
                        w-full md:w-1/4 min-w-[250px]
                        ${isExpanded ? "grow" : ""}
        `}>
            <InputDebounced setIsExpanded={setIsExpanded} setQuery={setQuery} />
            <BottomSectionWrapper isExpanded={isExpanded}>
                {query.trim() !== ""
                    ? <Autocomplete query={query} />
                    : <SearchHistory />
                }
            </BottomSectionWrapper>
        </div >
    )
}