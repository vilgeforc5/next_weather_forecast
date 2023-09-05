import { Grid } from "../_grid/grid";
import { IWeatherCard } from "./weatherCard.types";

export const WeatherCard: IWeatherCard = ({renderHeader, renderMain, prefix, addOn }) => {
    const header = renderHeader()
    const main = renderMain()
    return (
        <div 
            className="w-full h-full 
                       rounded-lg  bg-slate-purple-gradient
                       p-3.5 md:p-4 lg:p-6 xl:p-7 2xl:p-8
                       shadow-slate-950 shadow-lg
                       relative z-0
        ">
            <div className="absolute right-3 top-3 md:right-4 md:top-4 lg:right-5 lg:top-5">
                {addOn}
            </div>
            <Grid col={1} row={3}>
                <Grid.GridCell>
                    {header}
                </Grid.GridCell>
                <Grid.GridCell row_span={2}>
                    {main}
                </Grid.GridCell>
            </Grid>
        </div>
    )

}