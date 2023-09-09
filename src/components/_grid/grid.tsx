import React from "react";
import { GridCellComponent, GridComponent } from "./grid.types";
import { GridCellStyled, GridStyled } from "./styledComponentsGrid";


export const Grid: GridComponent = ({ row, col, flow, gap, responsive, children }) => {
    return (
            <GridStyled $col={col} $row={row} $flow={flow} $gap={gap} $responsive={responsive}>
                {children}
            </GridStyled>

    )
}

const GridCell: GridCellComponent = ({ row_span = 1, col_span = 1, responsive, children }) => {
    return (
        <GridCellStyled
            $row_span={row_span}
            $col_span={col_span}
            $responsive={responsive}
        >
            {children}
        </GridCellStyled>
    )
}

Grid.GridCell = GridCell;



