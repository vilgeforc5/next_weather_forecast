import React from "react";
import styled from "styled-components";
import { GridCellComponent, GridComponent } from "./grid.types";


const GridStyled = styled.div<{$row: number, $col: number, $gap?: string, $media?: string }> `
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: ${props => `repeat(${props.$col}, minmax(0,1fr))`};
    grid-template-rows: ${props => `repeat(${props.$row}, minmax(0,1fr))`};
`

export const Grid: GridComponent = ({row, col, children, gap_x, gap_y, media}) => {
    return (
        <GridStyled $col={col} $row={row} >
            {children}
        </GridStyled>
    )
}

const GridCellStyled = styled.div<{$row_span: number, $col_span: number }>`
    height: 100%;
    width: 100%;
    grid-row: ${props => `span ${props.$row_span || 1 } / span ${props.$row_span || 1 }`};
    grid-column: ${props => `span ${props.$col_span || 1 } / span ${props.$col_span || 1 }`};
`

const GridCell: GridCellComponent = ( {row_span = 1, col_span = 1, children} ) => {
    return (
        <GridCellStyled $row_span = {row_span} $col_span = {col_span}>
            {children}
        </GridCellStyled>
    )
}

Grid.GridCell = GridCell;
