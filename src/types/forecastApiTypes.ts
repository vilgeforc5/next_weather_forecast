
export interface ForecastRequestParamMandatory {
    location: string;
}
export interface CurrentForecastRequestParams extends ForecastRequestParamMandatory {
    lang?: string;
}

interface WeatherConditionType {
    text: string;
    icon: string;
    code: number;

}

interface CurrentForecastResponseFieldCurrent {
    time: string;
    last_updated: string;
    last_updated_epoch: number;
    temp_c: number;
    feelslike_c: number
    condition: WeatherConditionType;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    is_day: boolean;
}

interface IResponseLocation {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
}

export interface CurrentForecastResponse {
    location: IResponseLocation;
    current: CurrentForecastResponseFieldCurrent;
}

interface FutureForecastDayField {
    avghumidity: number;
    avgtemp_c: number;
    condition: WeatherConditionType;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    maxtemp_c: number;
    maxwind_kph: number;
    mintemp_c: number;
    avgvis_km: number;

}

type HoursWeatherData = Array<CurrentForecastResponseFieldCurrent>

export interface ForecastDay {
    date: string;
    day: FutureForecastDayField;
    hour: HoursWeatherData;

}

export type ForecastDays = Array<ForecastDay>


export interface FutureForecastResponse extends CurrentForecastResponse {
    forecast: {
        forecastday: ForecastDays;
    };
}

export interface FutureForecastRequestParams extends ForecastRequestParamMandatory {
    lang?: string;
    days?: number;
}

