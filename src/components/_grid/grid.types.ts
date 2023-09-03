import { ComponentType, ReactElement, ReactNode } from "react";
import { Breakpoints } from "@/types/types";

type ResponsiveStyles <T extends any> = Partial<Record<Breakpoints, Partial<T>>> 

<<<<<<< HEAD
type GridFlowType = "row" | "col" | "dense" | "col-dense" | "row-dense";
=======
export type GridFlowType = "row" | "col" | "dense" | "col-dense" | "row-dense";
>>>>>>> fa019d955088cada9cf08d1829a9946a5c8763ce

export interface GridParams {
    row: number;
    col: number;    
    gap?: {
        gap_x: number;
        gap_y: number;
    };
    flow?: GridFlowType;
}

export type GridResponsive = ResponsiveStyles<GridParams>

interface GridProps extends GridParams {
    children: ReactElement<GridCellProps>[] | ReactElement<GridCellProps>;
    responsive?: GridResponsive
}

<<<<<<< HEAD
export type GridPropsStyledComponentProps = { 
    [P in keyof Omit<GridProps, "children"> as `$${P}`]: GridProps[P]
}
=======
export type GridPropsStyledComponentProps = { [P in keyof Omit<GridProps, "children"> as `$${P}`]: GridProps[P]}
>>>>>>> fa019d955088cada9cf08d1829a9946a5c8763ce

export interface GridCellParams { 
    row_span?: number;
    col_span?: number;
}

export type GridCellResponsive = ResponsiveStyles<GridCellParams>

interface GridCellProps extends GridCellParams  {
    children: ReactNode;
    responsive?: GridCellResponsive;
} 

<<<<<<< HEAD
export type GridCellPropsStyledComponentProps = { 
    [P in keyof Omit<GridCellProps, "children"> as `$${P}`]: GridCellProps[P]
}
=======
export type GridCellPropsStyledComponentProps = { [P in keyof Omit<GridCellProps, "children"> as `$${P}`]: GridCellProps[P]}

>>>>>>> fa019d955088cada9cf08d1829a9946a5c8763ce

export interface GridComponent extends React.FC<GridProps> {
    GridCell: ComponentType<GridCellProps>;
}

export interface GridCellComponent extends React.FC<GridCellProps> {
}