import React from "react";
import { GridCellComponent, GridComponent } from "./grid.types";
import { GridCellStyled, GridStyled } from "./styledComponentsGrid";
<<<<<<< HEAD

export const Grid: GridComponent = ({ row, col, flow, gap, responsive, children }) => {
    return (
        <GridStyled 
            $col={col} 
            $row={row} 
            $flow={flow} 
            $gap={gap} 
            $responsive={responsive}
        >
=======
import { createCellStyles } from "./createMediaQuery";

export const Grid: GridComponent = ({ row, col, flow, gap, responsive, children }) => {
    return (
        <GridStyled $col={col} $row={row} $flow={flow} $gap={gap} $responsive={responsive}>
>>>>>>> fa019d955088cada9cf08d1829a9946a5c8763ce
            {children}
        </GridStyled>
    )
}

const GridCell: GridCellComponent = ({ row_span = 1, col_span = 1, responsive, children }) => {
    return (
<<<<<<< HEAD
        <GridCellStyled 
            $row_span={row_span} 
            $col_span={col_span} 
            $responsive={responsive}
        >
=======
        <GridCellStyled $row_span={row_span} $col_span={col_span} $responsive={responsive}>
>>>>>>> fa019d955088cada9cf08d1829a9946a5c8763ce
            {children}
        </GridCellStyled>
    )
}

Grid.GridCell = GridCell;



