import { ComponentType, ReactElement, ReactNode } from "react";
import { viewportSizes } from "@/types/types";

interface GridParams {
    row: number;
    col: number;
}

type GridMediaParameter = Record<viewportSizes, GridParams>

interface GridProps extends GridParams {
    // flow: "row" | "col" | "dense" | "col-dense" | "row-dense";
    children: ReactElement<GridCellProps>[] | ReactElement<GridCellProps>;
    media?: Partial<GridMediaParameter>;
    gap_x?: string;
    gap_y?: string;

}
interface GridCellProps {
    row_span?: number;
    col_span?: number;
    children: ReactNode;
} 

export interface GridComponent extends React.FC <GridProps> {
    GridCell: ComponentType<GridCellProps>
}
export interface GridCellComponent extends React.FC<GridCellProps> {

}