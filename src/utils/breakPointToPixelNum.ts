import { Breakpoints } from "@/types/types"

export function breakpointToPixelNum(breakpoint: Breakpoints) {
    switch (breakpoint) {
        case "sm":
            return 640
        case "md":
            return 768
        case "lg":
            return 1024
        case "xl":
            return 1280
        case "2xl":
            return 1536
    }
}
