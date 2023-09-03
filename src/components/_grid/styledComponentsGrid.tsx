import styled from "styled-components";
import { createCellStyles, createGridStyles, createGridMediaQueries, createGridCellMediaQueries } from "./createMediaQuery";
<<<<<<< HEAD
import { GridCellPropsStyledComponentProps, GridPropsStyledComponentProps } from "./grid.types";

export const GridStyled = styled.div<GridPropsStyledComponentProps>`
=======
import { GridCellPropsStyledComponentProps, GridCellResponsive, GridPropsStyledComponentProps } from "./grid.types";

export const GridStyled = styled.div <GridPropsStyledComponentProps>`
>>>>>>> fa019d955088cada9cf08d1829a9946a5c8763ce
    height: 100%;
    width: 100%;
    display: grid;
    ${props => createGridStyles({
        col: props.$col,
        row: props.$row,
        flow: props.$flow,
        gap: props.$gap
    })}
    ${props => props.$responsive ? createGridMediaQueries(props.$responsive) : ""}
`;

export const GridCellStyled = styled.div<GridCellPropsStyledComponentProps>`
    height: 100%;
    width: 100%;
    ${props => createCellStyles({
        col_span: props.$col_span,
        row_span: props.$row_span
    })}
    ${props => props.$responsive ? createGridCellMediaQueries(props.$responsive) : ""}
`;