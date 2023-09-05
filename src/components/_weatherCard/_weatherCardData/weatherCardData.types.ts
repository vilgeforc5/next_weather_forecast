import React from "react";

interface WeatherCardDataProps {
    dataNumerical: number;
    prefix?: string;
    barColor?: string;
}

export type IWeatherCardData = React.FC<WeatherCardDataProps>