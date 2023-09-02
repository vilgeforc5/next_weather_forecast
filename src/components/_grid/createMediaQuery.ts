import { breakpointToPixelNum } from "@/utils/breakPointToPixelNum";
import { GridCellParams, GridCellResponsive, GridParams, GridResponsive } from "./grid.types"
import { Breakpoints } from "@/types/types"

export function createGridMediaQueries(mediaResponsive: GridResponsive): string {
    return Object.entries(mediaResponsive).reduce((totalQuery, current) => {
        const breakpoint = current[0] as Breakpoints;
        const breakpointData = current[1]

        totalQuery += `
            @media (min-width: ${breakpointToPixelNum(breakpoint)}px) {
                ${createGridStyles(breakpointData)}
            }
        `
        return totalQuery
    }, "")

}


export function createGridStyles(styles: Partial<GridParams>) { 
    return `
        ${styles.flow ? `grid-auto-flow: ${styles.flow};` : ""}
        ${styles.col ? `grid-template-columns: repeat(${styles.col}, minmax(0,1fr));` : ""}
        ${styles.row ? `grid-template-rows: repeat(${styles.row}, minmax(0,1fr));` : ""}
        ${styles.gap ? `gap: ${styles.gap.gap_y || 0}px  ${styles.gap.gap_x || 0}px;` : ""}
    `
}


export function createCellStyles(styles: Partial<GridCellParams>) { 
    return `
        ${styles.col_span ? `grid-column: span ${styles.col_span || 1} / span ${styles.col_span || 1};` : ""}
        ${styles.row_span ? `grid-row: span ${styles.row_span || 1} / span ${styles.row_span || 1};` : ""}
    `
}

export function createGridCellMediaQueries(mediaResponsive: GridCellResponsive) {
    return Object.entries(mediaResponsive).reduce((totalQuery, current) => {
        const breakpoint = current[0] as Breakpoints;
        const breakpointData = current[1]

        totalQuery += `
            @media (min-width: ${breakpointToPixelNum(breakpoint)}px) {
                ${createCellStyles(breakpointData)}
            }
        `
        return totalQuery
    }, "")

}