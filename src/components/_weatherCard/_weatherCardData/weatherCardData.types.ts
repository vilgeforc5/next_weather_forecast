import React from "react";

interface BarLimitsSetting {
    min: number;
    max: number;
    gap: number;
}
interface WeatherCardDataProps {
    dataNumerical: number;
    prefix?: string;
    barColor?: string;
    barLimits?: BarLimitsSetting;
}

export type IWeatherCardData = React.FC<WeatherCardDataProps>