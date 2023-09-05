import React, { ReactElement, ReactNode } from "react";


interface WeatherCardProps {
    renderHeader: () => ReactElement;
    renderMain: () => ReactElement;
    prefix: string;
    addOn?: ReactNode;
}

export type IWeatherCard = React.FC<WeatherCardProps>