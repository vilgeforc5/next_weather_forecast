import { ComponentType, ReactElement, ReactNode } from "react";
import { Breakpoints } from "@/types/types";

type ResponsiveStyles <T extends any> = Partial<Record<Breakpoints, Partial<T>>> 

export type GridFlowType = "row" | "col" | "dense" | "col-dense" | "row-dense";

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

export type GridPropsStyledComponentProps = { [P in keyof Omit<GridProps, "children"> as `$${P}`]: GridProps[P]}

export interface GridCellParams{ 
    row_span?: number | "full";
    col_span?: number | "full";
}

export type GridCellResponsive = ResponsiveStyles<GridCellParams>

interface GridCellProps extends GridCellParams  {
    children: ReactNode;
    responsive?: GridCellResponsive;
} 

export type GridCellPropsStyledComponentProps = { [P in keyof Omit<GridCellProps, "children"> as `$${P}`]: GridCellProps[P]}


export interface GridComponent extends React.FC<GridProps> {
    GridCell: ComponentType<GridCellProps>;
}

export interface GridCellComponent extends React.FC<GridCellProps> {
}